import React, { useState, useEffect } from 'react';

import Comments from './Comments';

import * as storage from 'src/utils/storage';
import { useAlert } from 'src/utils/AlertProvider';

const CommentsScreen = ({ navigation }) => {
  const { id } = navigation.state.params;

  const alert = useAlert();

  const [comments, _comments] = useState([]);
  const [commentInput, _commentInput] = useState('');

  useEffect(() => {
    initializeComments();
  }, []);

  const initializeComments = async () => {
    const data = await storage.getComments(id);
    _comments(data);
  };

  const addComment = async () => {
    if (!commentInput || commentInput.trim() === '') {
      alert.showAlert({ type: 'error', message: 'No comment has been added. Please enter a comment!' });
      return;
    };

    const generatedComment = { id: storage.generateId(), text: commentInput };
    await storage.addComment(id, generatedComment);

    _comments([generatedComment, ...comments]);
    _commentInput('');
  };

  const onChangeText = (e) => _commentInput(e);
  
  const goBack = () => navigation.goBack();

  return (
    <Comments
      goBack={goBack}

      comments={comments}
      addComment={addComment}

      commentInput={commentInput}
      onChangeText={onChangeText}
    />
  );
};

export default CommentsScreen;
