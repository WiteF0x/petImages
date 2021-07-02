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
import FavouriteImage from 'src/components/FavouriteImage';

import styles from './styles';

const Feed = ({ feed, deleted, successDelete, successFavourite, openComments, favourites, deleteImage, favouritesPress }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = (props) =>
    <FavouriteImage
      scrollY={scrollY}
      deleted={deleted}
      favourites={favourites}
      deleteImage={deleteImage}
      openComments={openComments}
      successDelete={successDelete}
      favouritesPress={favouritesPress}
      successFavourite={successFavourite}
      { ...props }
    />;

  const renderEmpty = () => (
    <View style={styles.emptyView}>
      <Text style={styles.empty}>Empty</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title='Favourites'/>

      { favourites && favourites.length > 0
          ? <Animated.FlatList
              data={favourites}
              extraData={favourites}
              renderItem={renderItem}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
              contentContainerStyle={styles.flatList}
            />
          : renderEmpty()
      }
    </View>
  );
};

export default Feed;
