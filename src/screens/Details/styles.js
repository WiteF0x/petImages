import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: height * .3,
  },
  content: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
  },
  author: {
    fontSize: scale(21),
    fontWeight: '600',
    color: '#02337C',
  },
  row: {
    width: '100%',
    marginVertical: verticalScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#02337C',
  },
  itemLabel: {
    fontSize: scale(14),
    fontWeight: '500',
    color: '#02337C',
  },
  //#02337C
});

export default styles;
