import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#f1f1f1',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: scale(18),
    marginTop: verticalScale(32),
  },
});

export default styles;
