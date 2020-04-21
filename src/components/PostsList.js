import React, {Component, Fragment} from 'react';
import {
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchPosts} from '../Store/Actions/Index';
import Post from './UI/Post';
import {Button, Flex, WhiteSpace, WingBlank} from '@ant-design/react-native';
import Style from './Styles';
class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderContent = postId => {
    this.props.navigation.navigate('Content', {postId});
  };

  renderPostList = () => {
    if (this.props.posts.posts) {
      return this.props.posts.posts.map(value => {
        return (
          <Post
            data={value}
            openContentProp={() => this.renderContent(value.id)}
            key={value.id}
          />
        );
      });
    } else {
      return <Text style={styles.alternateText}>No Posts Found</Text>;
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.headingContainer}>
          <Image source={require('../assets/notepad.png')} />
          <Text style={styles.heading}>Posts</Text>
        </View>
        <WingBlank style={styles.container}>{this.renderPostList()}</WingBlank>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  alternateText: {
    ...Style.fontFamily,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 10,
    padding: 10,
  },
  heading: {
    ...Style.fontFamily,
    fontSize: 30,
  },
  container: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};
export default connect(
  mapStateToProps,
  {fetchPosts},
)(PostsList);
