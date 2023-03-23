import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateComponentStyle from '../../theme/style/DateComponentStyle';

const DateComponent = ({initialDate, onSelect}) => {
  // const [getDate, setDate] = useState('DD/MM/YYYY');
  const [getDate, setDate] = useState(initialDate);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const x1 = date.toISOString().split('T')[0].split('-');
    setDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
    onSelect(date);
  };

  return (
    <View>
      <Text style={DateComponentStyle.dateText}>DOB</Text>
      <TouchableOpacity
        style={DateComponentStyle.showDatePicker}
        onPress={() => {
          showDatePicker();
        }}>
        <Text style={DateComponentStyle.getDate}>{getDate}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateComponent;
