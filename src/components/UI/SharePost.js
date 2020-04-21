import React from 'react';
import {View, Image, Share, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from '@ant-design/react-native';
const onShareContent = url => {
  Share.share(
    {
      message: `Checkout this awesome post ${url}`,
      url: url,
      title: 'Checkout this awesome post',
    },
    {
      dialogTitle: 'Share this post',
    },
  );
};
const SharePost = props => {
  return (
    <View style={styles.shareContainer}>
      <TouchableOpacity onPress={() => onShareContent(props.url)}>
        <Icon name="share-alt" size="lg" style={{color: props.style}} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  shareContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 20,
  },
  shareButton: {
    height: 20,
    width: 20,
    padding: 13,
  },
});
export default SharePost;
