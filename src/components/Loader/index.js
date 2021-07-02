import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import * as actions from 'src/redux/actions';
import styles from './styles';

const Loading = ({ loader, stop }) => {
  const timer = useRef(null);

  useEffect(() => {
    if (loader.isVisible) {
      clear()

      timer.current = setTimeout(() => {
        stop();
        clearTimeout(timer.current)
      }, 7000);
    } else {
      clear();
    }
  }, [loader]);

  const clear = () => {
    if (timer && timer.current) {
      clearTimeout(timer.current);
    };
  }

  return (
    <Modal isVisible={loader.isVisible}>
      <View style={styles.container}>
        <ActivityIndicator size='large'/>
        <Text style={styles.label}>{ loader.label }</Text>
      </View>
    </Modal>
  );
};

Loading.propTypes = {
  stop: PropTypes.func,
  loader: PropTypes.object,
};

const mapStateToProps = (state) => ({
  loader: state.loader,
});

const mapDispatchToProps = (dispatch) => ({
  stop: () => dispatch(actions.stopLoaderAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
