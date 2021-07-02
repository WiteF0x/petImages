import React, { useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from 'src/components/Header';
import FeedImage from 'src/components/FeedImage';

import styles from './styles';

const Feed = ({ feed, deleted, openDetails, successDelete, successFavourite, favourites, deleteImage, favouritesPress }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = (props) =>
    <FeedImage
      scrollY={scrollY}
      deleted={deleted}
      favourites={favourites}
      deleteImage={deleteImage}
      openDetails={openDetails}
      successDelete={successDelete}
      favouritesPress={favouritesPress}
      successFavourite={successFavourite}
      { ...props }
    />

  return (
    <View style={styles.container}>
      <Header title='Feed'/>

      <Animated.FlatList
        data={feed}
        extraData={deleted}
        renderItem={renderItem}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

export default Feed;
