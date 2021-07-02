import { StyleSheet, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  flatList: {
    alignItems: 'center',
    paddingTop: 16,
  },
});

export default styles;
