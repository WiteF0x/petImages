import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    padding: '5%',
  },
  input: {
    width: width * .9,
    height: 135,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#02337C',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingHorizontal: '5%',
    color: 'black',
    fontSize: scale(14),
    marginBottom: verticalScale(25),
  },
  buttonView: {
    width: width * .9,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  addComment: {
    height: 35,
    paddingHorizontal: scale(7),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#02337C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(16),
  },
  addCommentLabel: {
    fontSize: scale(14),
    color: '#02337C',
  },
  commentView: {
    width: width * .9,
    borderRadius: 10,
    padding: '7%',
    backgroundColor: 'rgba(2, 51, 124, 0.7)',
    marginBottom: verticalScale(13),
  },
  comment: {
    fontSize: scale(14),
    color: '#ffffff',
    fontStyle: 'italic',
  },
  flatList: {
    width: width * .9,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    marginTop: verticalScale(45),
  },
  emptyLabel: {
    fontSize: scale(36),
    color: 'grey',
    fontWeight: '700',
  },
});

export default styles;

