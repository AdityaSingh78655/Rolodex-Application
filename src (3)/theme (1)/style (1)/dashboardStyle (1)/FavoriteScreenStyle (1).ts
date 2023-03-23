import {StyleSheet} from 'react-native';
import {FontFamily, NumberValues} from '../../../constants/FixedValues';

const FavoriteScreenStyle = StyleSheet.create({
  itemView: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 20,
  },
  removeText: {
    fontSize: 20,
    backgroundColor: 'red',
    height: 30,
    width: 100,
    textAlign: 'center',
    marginLeft: 50,
  },
  mainView: {
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: FontFamily.PlaySemiBold,
  },
});

export default FavoriteScreenStyle;
