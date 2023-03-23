import {View, Text} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import React from 'react';
import RadioButtonStyle from '../../theme/style/dashboardStyle/RadioButtonStyle';
import {NumberValues} from '../../constants/FixedValues';
import {StringConstant} from '../../constants/StringConstant';

interface Props {
  initial: number;
  onPress: (value: number) => void;
}

const RadioButton = ({initial, onPress}: Props) => {
  const Gender = [
    {label: StringConstant.MALE, value: NumberValues.CONSTANT_VALUE_1},
    {label: StringConstant.FEMALE, value: NumberValues.CONSTANT_VALUE_2},
    {label: StringConstant.OTHER, value: NumberValues.CONSTANT_VALUE_3},
  ];

  return (
    <View style={RadioButtonStyle.mainView}>
      <Text style={RadioButtonStyle.text}>Gender</Text>
      <RadioForm
        style={RadioButtonStyle.radioForm}
        radio_props={Gender}
        buttonColor="black"
        labelColor="black"
        initial={initial}
        onPress={onPress}
        labelHorizontal={false}
        formHorizontal
      />
    </View>
  );
};

export default RadioButton;
