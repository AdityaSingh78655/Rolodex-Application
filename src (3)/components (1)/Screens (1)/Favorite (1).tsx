import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../reduxToolkit/store';
import {FlatList} from 'react-native-gesture-handler';
import {useAppDispatch} from '../../reduxToolkit/hooks';
import {removeFavouriteUser} from '../../reduxToolkit/slice/favouriteSlice';
import FavoriteScreenStyle from '../../theme/style/dashboardStyle/FavoriteScreenStyle';

const Favourite = () => {
  const favouriteData = useSelector(
    (state: RootState) => state?.favourite?.userData,
  );
  console.log(favouriteData, 'favouriteDatafavouriteData');

  const dispatch = useAppDispatch();
  const removeItem = (item: any) => {
    dispatch(removeFavouriteUser(item));
  };

  const renderItem = ({item}) => (
    <View style={FavoriteScreenStyle.itemView}>
      <Text style={FavoriteScreenStyle.text}>
        {item.first_name + ' ' + item.last_name}
      </Text>
      <TouchableOpacity onPress={() => removeItem(item)}>
        <Text style={FavoriteScreenStyle.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={FavoriteScreenStyle.mainView}>
      <Text style={FavoriteScreenStyle.headingText}>Favourite</Text>
      <FlatList data={favouriteData} renderItem={renderItem} />
    </View>
  );
};

export default Favourite;
