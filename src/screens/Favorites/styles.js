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
  emptyView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '25%',
  },
  empty: {
    fontSize: scale(36),
    color: 'grey',
    fontWeight: '700',
  },
});

export default styles;
