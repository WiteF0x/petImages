import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Header from 'src/components/Header';

import styles from './styles';

const Comments = ({ comments, addComment, onChangeText, commentInput, goBack }) => {

  const renderItem = ({ item, index }) => (
    <View key={item.id} style={styles.commentView}>
      <Text style={styles.comment}>{ item.text }</Text>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.empty}>
      <Text style={styles.emptyLabel}>No Comments :(</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title='Comments' goBack={goBack}/>
      <View style={styles.content}>
        <TextInput
          value={commentInput}
          placeholder='The best image!'
          placeholderTextColor='grey'
          onChangeText={onChangeText}
          multiline
          numberOfLines={5}
          style={styles.input}
        />
        <View style={styles.buttonView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={addComment}
            style={styles.addComment}
          >
            <Text style={styles.addCommentLabel}>Add Comment</Text>
          </TouchableOpacity>
        </View>

        { comments && comments.length > 0
            ? <FlatList
                data={comments}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.flatList}
              />
            : renderEmpty()
        }
      </View>
    </View>
  );
};

export default Comments;
