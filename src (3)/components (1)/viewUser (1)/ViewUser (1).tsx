import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'; // <-- add this
import ImagePath from '../../theme/imagePath/Images';
import ViewUserStyle from '../../theme/style/ViewUserStyle';
import {StringConstant} from '../../constants/StringConstant';
import {useAppDispatch} from '../../reduxToolkit/hooks';
import {favouriteUser} from '../../reduxToolkit/slice/favouriteSlice';

interface ViewUserProps {
  route: any;
}

const ViewUser = ({route}: ViewUserProps) => {
  const {item} = route?.params;
  const dispatch = useAppDispatch();
  const navigation = useNavigation(); // <-- add this
  const addToFavourites = () => {
    dispatch(favouriteUser(item));
    Alert.alert('Message', 'Added into favourite');
  };

  return (
    <View style={ViewUserStyle.mainView}>
      <Text style={ViewUserStyle.textHeader}>ViewUser</Text>
      <View style={ViewUserStyle.contentView}>
        <Image
          source={item.profileImage ? {uri: item.profileImage} : ImagePath.USER}
          style={ViewUserStyle.image}
        />
        <Text style={ViewUserStyle.text}>
          {item.first_name &&
            item.last_name &&
            `Name: ${item.first_name + item.last_name}\n`}
          {item.phone_number && `Mobile No.: ${item.phone_number}\n`}
          {item.DOB && `Date Of Birth: ${item.DOB}\n`}
          {item.country?.name && `Country: ${item.country.name}`}
        </Text>
      </View>
      <View style={ViewUserStyle.switchView}>
        <Text style={ViewUserStyle.switchText}>
          {StringConstant.ADD_FAVOURITE}
        </Text>
        <TouchableOpacity onPress={addToFavourites}>
          <Text style={ViewUserStyle.favouriteText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewUser;
