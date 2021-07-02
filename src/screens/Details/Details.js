import React from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import Header from 'src/components/Header';

import styles from './styles';

const { width, height } = Dimensions.get('window');

const Details = ({ goBack, info }) => {
  return (
    <View style={styles.container}>
      <Header goBack={goBack} title='Details'/>

      <FastImage
        source={{ uri: `https://picsum.photos/id/${info?.id}/${Math.trunc(width)}/${Math.trunc(height * .3)}` }}
        resizeMode='contain'
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.author}>Author: { info?.author }</Text>
        <View style={styles.row}>
          <View style={styles.item}>
            <Text style={styles.itemLabel}>Original width: { info?.width }</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemLabel}>Original height: { info?.height }</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
