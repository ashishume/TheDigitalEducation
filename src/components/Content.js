import React, {Component, Fragment} from 'react';
import {StyleSheet, Share, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchContent} from '../Store/Actions/Index';
import {WebView} from 'react-native-webview';
import Style from '../components/Styles';
import SharePost from './UI/SharePost';
class Content extends Component {
  renderShare = url => {
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

  componentDidMount() {
    this.props.fetchContent(this.props.route.params.postId);
  }

  render() {
    const data = this.props.content;
    return (
      <Fragment>
        <View style={styles.container}>
          <Text style={styles.heading}>{data.title}</Text>
          <SharePost url={data.url} style={'#000'} />
        </View>
        <WebView
          source={{html: data.content}}
          style={styles.webView}
          scalesPageToFit={false}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },
  heading: {
    fontSize: 25,
    ...Style.fontFamily,
  },
  webView: {
    height: 10,
    width: '100%',
    alignSelf: 'center',
  },
});
const mapStateToProps = state => {
  return {
    content: state.posts.content,
  };
};
export default connect(
  mapStateToProps,
  {fetchContent},
)(Content);
