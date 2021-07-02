import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(13),
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 25,
    width: 25,
  },
  focused: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 10,
    color: '#ffffff',
    marginVertical: verticalScale(5),
  },
});

export default styles;
