import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Favourites from './Favorites';
import * as actions from 'src/redux/actions';

import { useAlert } from 'src/utils/AlertProvider';

const FeedScreen = ({ loadData, navigation, favouritesPress, deleteImage, getFeedImages, favourites, deleted, feed }) => {
  const alert = useAlert();

  const successDelete = () => alert.showAlert({ type: 'success', message: 'Photo was successfully deleted!' });

  const successFavourite = (id) => alert.showAlert({ type: 'success', message: `Photo was successfully ${!favourites.includes(id) ? 'added to' : 'removed from'} favourites` })

  const openComments = (id) => navigation.navigate('Comments', { id });

  return (
    <Favourites
      feed={feed}
      deleted={deleted}
      favourites={favourites}
      deleteImage={deleteImage}
      openComments={openComments}
      successDelete={successDelete}
      favouritesPress={favouritesPress}
      successFavourite={successFavourite}
    />
  );
};

const mapStateToProps = (state) => ({
  feed: state.feed.feed,
  deleted: state.deleted.deleted,
  favourites: state.favourites.favourites
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(actions.loadDefaultDataAction()),
  getFeedImages: () => dispatch(actions.getFeedImagesAction()),
  deleteImage: (payload) => dispatch(actions.deleteImageAction(payload)),
  favouritesPress: (payload) => dispatch(actions.favouritesAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
