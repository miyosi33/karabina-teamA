import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Review = (props) => {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleReviewChange = (text) => {
    setReview(text);
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    // You can access title and review state variables
  };

  return (
    <View style={styles.reviewContainer}>
      <Text>exported project</Text>
      <View style={styles.reviewReview}>
        <View style={styles.reviewSearchBox}>
          <TextInput
            style={styles.input}
            placeholder="タイトルを入力してください"
            value={title}
            onChangeText={handleTitleChange}
          />
        </View>
        <View style={styles.reviewSearchBox}>
          <TextInput
            style={styles.input}
            placeholder="レビューを入力してください"
            value={review}
            onChangeText={handleReviewChange}
            multiline
          />
        </View>
        <Text style={styles.reviewText6}>
          総合評価
        </Text>
        <View style={styles.reviewHomeIndicator}>

        </View>
        <View style={styles.reviewSearchBox1}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>
              送信
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    // styles for review container
  },
  reviewReview: {
    // styles for review review
  },
  reviewSearchBox: {
    // styles for search box
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  submitButton: {
    // Default styling
  },
  submitButtonText: {
    // Default styling
  },


  
});

export default Review;
