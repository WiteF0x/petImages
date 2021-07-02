import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

const Root = ({ navigation }) => {
  useEffect(() => {
    redirect();
  }, []);

  const redirect = () => navigation.navigate('Main');

  return (
    <View style={styles.container}>
      <ActivityIndicator size='small' color='#CECED2'/>
    </View>
  );
};

export default Root;
