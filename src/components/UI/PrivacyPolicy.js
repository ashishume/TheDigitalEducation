import React, {Component} from 'react';
import {View, Text, Fragment, Image, StyleSheet} from 'react-native';
import style from '../Styles';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Icon} from '@ant-design/react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
class PrivacyPolicy extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.menuContainer}>
          <View style={styles.leftItem}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon name="arrow-left" size="md" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.rightItem}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/logo.jpg')}
            />
          </View>
        </View>

        <View style={styles.container}>
          <Text>
            <Text style={styles.heading}>Privacy Policy</Text>
            {'\n'}
            <Text style={styles.text}>
              This Privacy Notice explains how, why, and when we collect data
              from you on our app.
              {'\n'}
              Please note that this Privacy Notice only applies to data that we
              collect when you visit our website The Digital Education App. By
              using our website, you signify your acceptance of this policy.
              Your continued use of the app following the posting of changes to
              this policy will be deemed your acceptance of those changes.
            </Text>
            {'\n'}
            {'\n'}
            <Text style={styles.heading}>What data we collect?</Text>
            {'\n'}
            {'\n'}
            <Text style={styles.heading}>App activity:</Text> {'\n'}
            <Text style={styles.text}>
              Data about your browsing activity on our website, Device and
              browser information: This is technical information about the
              device or browser you use to access the Advertiser’s website. For
              example, your device’s IP address, cookie string data and (in the
              case of mobile devices) your device type and mobile device’s
              unique identifier such as the Apple IDFA or Android Advertising ID{' '}
              {'\n'}
            </Text>
            {'\n'}
            <Text style={styles.heading}>Ad Data:</Text>
            <Text style={styles.text}>
              This is data about the online ads we have served (or attempted to
              serve) to you. It includes things like how many times an ad has
              been served to you, what page the ad appeared on, and whether you
              clicked on or otherwise interacted with the ad How we use it?
              {'\n'}
              {'\n'}
              When you visit our app, third-parties, who are our advertising
              partners, may place cookies or tracking pixels on your app for
              targeted advertising purposes.
              {'\n'}
              {'\n'}
              Your choices and opting-out We recognize how important your online
              privacy is to you, so we offer the following options for
              controlling the targeted ads you receive and how we use your data.
              {'\n'}
              {'\n'}
              You can opt out of receiving targeted ads served by us or on our
              behalf by clicking on the close icon that typically appears in the
              corner of the ads we serve or by clicking here. Please note that,
              if you delete your cookies or upgrade your browser after having
              opted out, you will need to opt out again. If you opt-out we may
              collect some data about your online activity for operational
              purposes (such as fraud prevention) but it won’t be used by us for
              the purpose of targeting ads to you
              {'\n'}
              {'\n'}
              While we may link multiple browsers or devices to you, if you opt
              out on a device or browser we will not use data collected after
              you opted out on that device or browser for targeted advertising
              purposes. Therefore, if you use multiple browsers or devices you
              will need to execute this opt out on each browser or device.
            </Text>
            {'\n'}
            {'\n'}
            <Text style={styles.heading}>Changes to this Privacy Notice</Text>
            {'\n'}
            {'\n'}
            <Text style={styles.text}>
              Changes to this Privacy Notice will be posted on this page. If we
              make a material change to our privacy practices, we will provide
              notice on the site or by other means as appropriate. If you have
              any questions regarding our privacy practices, you can contact us
              through Contact Page.
            </Text>
            {'\n'}
            {'\n'}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  text: {
    ...style.fontFamily,
    fontSize: 15,
  },
  heading: {
    ...style.fontFamily,
    fontSize: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOpacity: 1,
    shadowOffset: {
      height: 10,
    },
    elevation: 10,
    shadowRadius: 5,
  },
  leftItem: {marginLeft: 20},
  rightItem: {marginLeft: 300},
  icon: {
    color: '#000',
  },
});
