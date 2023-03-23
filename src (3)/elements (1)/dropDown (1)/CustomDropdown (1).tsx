import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ImagePath from '../../theme/imagePath/Images';
import DropDownStyle from '../../theme/style/DropDownStyle';

const CustomDropdown = (props: any) => {
  const [selectedName, setSelectedName] = useState(undefined);
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState('');

  const {selectedItem, label, open} = props;

  const filteredData = props?.data?.filter(item =>
    item?.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDropdownClick = () => {
    setIsClicked(!isClicked);
    open(!isClicked);
    setSearch('');
    if (!isClicked) {
      setSelectedName(undefined);
    }
  };

  return (
    <View style={DropDownStyle.mainView}>
      <TouchableOpacity
        style={DropDownStyle.touchable}
        onPress={handleDropdownClick}>
        <View style={DropDownStyle.selectView}>
          <Text style={DropDownStyle.text}>{selectedName || label}</Text>
          {isClicked ? (
            <Image style={DropDownStyle.image} source={ImagePath.UPWARD} />
          ) : (
            <Image source={ImagePath.DROPDOWN} />
          )}
        </View>
      </TouchableOpacity>
      {isClicked ? (
        <View style={DropDownStyle.clicked}>
          <TextInput
            style={DropDownStyle.searchInput}
            placeholder="Search"
            onChangeText={text => setSearch(text)}
          />

          <ScrollView style={{flex: 1, backgroundColor: 'green'}}>
            {filteredData.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setSelectedName(item?.name);
                  setIsClicked(false);
                  selectedItem(item);
                }}>
                <Text style={DropDownStyle.selectName}>{item?.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default CustomDropdown;
