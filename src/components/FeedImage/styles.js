import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { IMAGE_WIDTH, IMAGE_HEIGHT } from 'src/constants/imageSizes';

const styles = StyleSheet.create({
  mainView: {
    

  },
  image: {
    width: IMAGE_WIDTH,
    // height: IMAGE_HEIGHT,
    borderRadius: 5,
    borderColor: 'red',
    marginBottom: 8,
  },
  container: {
    height: IMAGE_HEIGHT * .5,
    paddingHorizontal: scale(5),
    paddingVertical: verticalScale(6),
    borderRadius: 5,
    zIndex: 999,

    top: '5%',
    right: '5%',
    position: 'absolute',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  details: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',

    padding: scale(3),
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default styles;
