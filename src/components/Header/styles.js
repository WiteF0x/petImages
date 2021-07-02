import { StyleSheet, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: height * .11,
    backgroundColor: '#02337C',
  },
  safeArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  left: {
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  center: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default styles;
