import React from 'react';
import 'react-native-get-random-values';
import {Button} from '@ant-design/react-native';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Style from '../Styles';
import SharePost from './SharePost';

const Post = props => {
  return (
    <View style={styles.card}>
      <View style={styles.backgroundImageContainer}>
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}
          colors={['#4c669f', '#3b5998', '#192f6a']}>
          <View style={styles.innerContainer}>
            <SharePost style={'#fff'} url={props.data.url} />
            <View style={styles.headContainer}>
              <Text style={styles.heading}>{props.data.title}</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.author}>
                Posted by: {props.data.author.displayName}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={props.openContentProp}
                type="ghost"
                size="small"
                style={styles.Button}>
                <Text style={styles.ButtonText}>Read More</Text>
              </Button>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    ...Style.cardBorder,
  },
  backgroundImageContainer: {
    ...Style.cardBorder,
    alignItems: 'center',
  },
  innerContainer: {
    height: '100%',
    width: '100%',
    ...Style.cardBorder,
  },
  headContainer: {
    margin: 10,
  },
  heading: {
    ...Style.fontFamily,
    fontSize: 25,
    color: '#fff',
  },

  card: {
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.83,
    shadowRadius: 10,
    elevation: 50,
    height: 300,
  },

  iconContainer: {
    flexDirection: 'row-reverse',
  },
  cardBody: {
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#33A186',
    height: 50,
    margin: 10,
    width: '80%',
    ...Style.cardBorder,
  },
  ButtonText: {
    color: 'white',
    fontSize: 20,
    ...Style.fontFamily,
  },
  author: {
    fontSize: 15,
    color: '#fff',
    ...Style.fontFamily,
  },
});
export default Post;
