import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = ({ title, goBack }) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.left}>
        { goBack && (
          <TouchableOpacity
            activeOpacity={0.7}
            hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
            onPress={goBack}
          >
            <Icon name='chevron-back-outline' size={35} color='white'/>
          </TouchableOpacity>
        ) }
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{ title }</Text>
      </View>
      <View style={styles.right}>
      </View>
    </SafeAreaView>
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.func,
};

export default Header;
