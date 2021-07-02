// favourites, deleted, comments
import AsyncStorage from "@react-native-community/async-storage";

export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

export const getItemFromStorage = async (item) => {
  const list = await AsyncStorage.getItem(item);

  return list ? JSON.parse(list) : item === 'comments' ? {} : [];
};

export const setToStorage = async (value, item) => {
  await AsyncStorage.setItem(item, JSON.stringify(value));
};

export const favouritesAction = async (id) => {
  const favourites = await getItemFromStorage('favourites');

  favourites.includes(id)
    ? setToStorage(favourites?.filter(_ => _ !== id), 'favourites')
    : setToStorage([...favourites, id], 'favourites');
};

export const deleteImage = async (id) => {
  const deleted = await getItemFromStorage('deleted');

  await setToStorage([...deleted, id], 'deleted');
};

export const getComments = async (id) => {
  const comments = await getItemFromStorage('comments');
  const currentComments = comments.hasOwnProperty(id) ? comments[id] : [];

  return currentComments;
};

export const addComment = async (id, comment) => {
  const allComments = await getItemFromStorage('comments');
  const comments = await getComments(id);

  const modifedComments = [comment, ...comments];
  allComments[id] = modifedComments;
  await setToStorage({ ...allComments }, 'comments');
};