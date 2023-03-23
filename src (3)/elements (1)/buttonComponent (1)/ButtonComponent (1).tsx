import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LoginScreenStyle from '../../theme/style/LoginScreenStyle';
import {ColorCode} from '../../constants/ColorCode';

interface Props {
  handleSubmit?: () => void;
  disabled?: boolean;
  name: string;
  add: any;
}

const ButtonComponent = (props: Props) => {
  const {handleSubmit, disabled, name, add} = props;
  console.log(add, 'addedbutton');

  return (
    <View style={LoginScreenStyle.buttonView}>
      <TouchableOpacity
        onPress={handleSubmit}
        disabled={disabled}
        style={[
          LoginScreenStyle.button,
          {backgroundColor: disabled ? ColorCode.GRAY : ColorCode.BLUE},
        ]}>
        <Text style={LoginScreenStyle.loginButton}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
