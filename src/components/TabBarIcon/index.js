import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';

import styles from './styles';

const TabBarIcon = ({ icon, focused, title, tintColor }) => {

  // const titleStyle = useMemo(() => [styles.title, { color: tintColor }], [tintColor]);
  const titleStyle = [styles.title, { color: tintColor }];

  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={scale(25)}
        color={`rgba(255, 255, 255, ${focused ? 1 : 0.3})`}
      />
      <Text style={titleStyle}>{ title }</Text>
      {/* {focused && (<View style={styles.focused} />)} */}
    </View>
  );
};

TabBarIcon.propTypes = {
  icon: PropTypes.any,
  focused: PropTypes.bool,
  tintColor: PropTypes.string,
};

export default TabBarIcon;
