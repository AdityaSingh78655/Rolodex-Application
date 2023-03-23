import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ContactScreenStyle from '../../theme/style/dashboardStyle/ContactScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../reduxToolkit/store';
import {useAppDispatch} from '../../reduxToolkit/hooks';
import {fetchLogin} from '../../reduxToolkit/slice/LoginSlice';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {fetchDelete} from '../../reduxToolkit/slice/DeleteUserSlice';
import ImagePath from '../../theme/imagePath/Images';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StringConstant} from '../../constants/StringConstant';
import _ from 'lodash';

const Contact = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [Data, setData] = useState('');
  const [deleted, setDeleted] = useState();
  const loginUserDaTa = useSelector((state: RootState) => state?.login);
  const DeleteUserDaTa = useSelector((state: RootState) => state?.deleteUser);
  const userData = loginUserDaTa?.data?.items;
  console.log(userData, 'userData454545');

  const handleDelete = () => {
    dispatch(fetchDelete(deleted._uuid));
    console.log(deleted._uuid, 'fikodhgsashu');
    setLoader(true);
    setIsModalVisible(false);
  };
  console.log(DeleteUserDaTa, 'DeleteUserDaTa');

  useFocusEffect(
    useCallback(() => {
      setLoader(true);
      dispatch(fetchLogin());
      console.log('hih');
    }, [dispatch]),
  );

  useEffect(() => {
    if (
      loginUserDaTa?.isLoading === false &&
      loginUserDaTa?.isSuccess === true
    ) {
      setData(loginUserDaTa?.data?.items);
      setLoader(false);
    }
  }, [
    loginUserDaTa?.isLoading,
    loginUserDaTa?.isSuccess,
    dispatch,
    loginUserDaTa?.data?.items,
  ]);
  useEffect(() => {
    if (
      DeleteUserDaTa?.isLoading === false &&
      DeleteUserDaTa?.isSuccess === true
    ) {
      dispatch(fetchLogin());
    }
  }, [DeleteUserDaTa?.isLoading, DeleteUserDaTa?.isSuccess, dispatch]);

  const onEdit = (item: any) => {
    navigation.navigate('EditProfile', {data: item, isEdit: true});
  };

  const OnDelete = (item: any) => {
    setIsModalVisible(true);
    console.log(item._uuid, 'fopfjsadf');
    setDeleted(item);
    console.log('deleted2112');
  };

  const RightSwipe = (item: any) => {
    console.log(item, 'gfdjkgnggd');

    return (
      <View style={ContactScreenStyle.rightSwipeView}>
        <TouchableOpacity
          onPress={() => onEdit(item)}
          style={ContactScreenStyle.onEditTouchable}>
          <Text style={ContactScreenStyle.onEditTouchableText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => OnDelete(item)}
          style={ContactScreenStyle.onDeleteTouchable}>
          <Text style={ContactScreenStyle.onDeleteTouchableText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ShowUser = (item: any) => {
    navigation.navigate(StringConstant.VIEW_USER, {item});
  };

  const renderItemList = (item: any) => {
    return (
      <GestureHandlerRootView>
        <Swipeable renderRightActions={() => RightSwipe(item)}>
          <TouchableOpacity
            style={ContactScreenStyle.swipableTouchable}
            onPress={() => ShowUser(item)}>
            <View style={ContactScreenStyle.TouchableView}>
              <View style={ContactScreenStyle.imageView}>
                <Image
                  source={
                    item.profileImage
                      ? {uri: item.profileImage}
                      : ImagePath.USER
                  }
                  style={ContactScreenStyle.profileImage}
                />
              </View>
              <Text style={ContactScreenStyle.firstNameFontSize}>
                {item.first_name + ' '}
              </Text>
              <Text style={ContactScreenStyle.lastNameFontSize}>
                {item.last_name + ' '}
              </Text>
            </View>
            <Text style={ContactScreenStyle.phoneNumberText}>
              {item.phone_number}
            </Text>
          </TouchableOpacity>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <View style={ContactScreenStyle.mainView}>
      <View style={ContactScreenStyle.flatListView}>
        <Text style={ContactScreenStyle.headerText}>Contact List</Text>
        {loader ? (
          <ActivityIndicator size="large" />
        ) : _.isEmpty(Data) ? (
          <Text style={ContactScreenStyle.emptyText}>
            Contact is Empty please Enter Contact
          </Text>
        ) : (
          <FlatList data={Data} renderItem={({item}) => renderItemList(item)} />
        )}
      </View>
      <View style={ContactScreenStyle.editButtonView}>
        <TouchableOpacity
          style={ContactScreenStyle.editButton}
          onPress={() =>
            navigation.navigate(StringConstant.SIGN_UP, {Add: true})
          }>
          <Image
            source={ImagePath.ADDUSER}
            style={ContactScreenStyle.editImage}
          />
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={ContactScreenStyle.modalView}>
          <Text style={ContactScreenStyle.modalText}>
            {StringConstant.WANT_TO_DELETE}
          </Text>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={ContactScreenStyle.modalYesButton}>
              {StringConstant.YES}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Text style={ContactScreenStyle.modalNoButton}>
              {StringConstant.NO}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Contact;
