import {View, Text, TextInput} from 'react-native';
import React from 'react';
import InputCompStyle from '../../theme/style/InputCompStyle';

interface Props {
  name: string;
  placeHolder: string;
  error: string | undefined;
  touched?: boolean;
  handleChange?: (e: string) => void;
}

const InputComponent = (props: Props) => {
  const {name, placeHolder, error, touched, handleChange, keyboardType} = props;

  return (
    <View style={InputCompStyle.mainView}>
      <Text style={InputCompStyle.name}>{name}</Text>
      <TextInput
        style={InputCompStyle.placeholder}
        placeholder={placeHolder}
        handleChange={handleChange}
        keyboardType={keyboardType}
        {...props}
      />
      {error && touched && <Text style={InputCompStyle.error}>{error}</Text>}
    </View>
  );
};

export default InputComponent;
