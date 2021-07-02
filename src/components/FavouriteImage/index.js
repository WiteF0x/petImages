import React, { useState, useRef } from 'react';
import {
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { IMAGE_WIDTH, IMAGE_HEIGHT } from 'src/constants/imageSizes';

import styles from './styles';

const FavouriteImage = ({ favouritesPress, successFavourite, openComments, successDelete, deleteImage, favourites, deleted, scrollY, item, index }) => {
  const animated = useRef(new Animated.Value(1)).current;

  const [isHidenMenu, _isHidenMenu] = useState(false);

  const animatedHeight = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, IMAGE_HEIGHT],
  });

  const borderWidth = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 0],
  });

  const imageOpacity = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const inputRange = [
    -1,
    0,
    (IMAGE_HEIGHT + 8) * index,
    (IMAGE_HEIGHT + 8) * (index + 2),
  ];

  const opacityInputRange = [
    -1,
    0,
    (IMAGE_HEIGHT + 8) * index,
    (IMAGE_HEIGHT + 8) * (index + .5),
  ];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });

  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 1, 1, 0],
  });

  const onFavouritePress = () => {
    favouritesPress({ id: item });
    successFavourite(item);
  };

  const onCommentsPress = () => openComments(item);

  return (
    <Animated.View
      key={item}
      style={[
        {
          opacity,
          transform: [{ scale }],
        }
      ]}
    >
      <Animated.Image
        source={{ uri: `https://picsum.photos/id/${item}/${Math.trunc(IMAGE_WIDTH)}/${Math.trunc(IMAGE_HEIGHT)}` }}
        resizeMode='contain'
        style={[
          styles.image,
          {
            opacity: imageOpacity,
            height: animatedHeight,
          }
        ]}
      />
      { !isHidenMenu && (<Animated.View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onFavouritePress}
        >
          <Icon name={favourites?.includes(item) ? 'heart' : 'heart-outline'} size={25} color='green'/>
        </TouchableOpacity>
      </Animated.View>)}

      { !isHidenMenu && (<TouchableOpacity
        activeOpacity={0.7}
        hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
        onPress={onCommentsPress}
        style={styles.details}
      >
        <Icon name='chatbox-ellipses' size={25} color='#02337C'/>
      </TouchableOpacity>)}

    </Animated.View>
  );
};

export default FavouriteImage;
