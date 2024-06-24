import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fonts } from '../utils/fonts';
import Feather from 'react-native-vector-icons/Feather'
import CustomImage from './CustomImage';
import { images } from '../utils/constants';
import Ionicons from 'react-native-vector-icons/Ionicons'
import IconCom from './IconCom';
const TabsHeader = (props) => {
  return (
    <>
      {props.header ?
        <View style={styles.headerContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.locationContainer}>
                <Feather name={"map-pin"} size={20} color={"#fff"} />
                <Text style={styles.locationText}>7 Clover Wy, Singapore 579080</Text>
              </View>
              <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Hello,</Text>
                <Text style={styles.userName}>User Name</Text>
              </View>
            </View>
            <View style={styles.bellView}>
              <CustomImage source={images.bell} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
            </View>
          </View>
        </View> :
        <>
          <View style={styles.falseHeaderView}>
            <IconCom
              onPress={props.onPress}
              icon={<Ionicons name={"chevron-back"} size={24} color={"#fff"} />} />
            <Text style={styles.screenTitle}>{props.screeenHeading}</Text>
            <View />
            <View />
          </View>

        </>


      }

    </>

  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: fonts.HEADER_BG,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 12,
  },
  falseHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 18,
    fontFamily: fonts.GOTHAM_BOLD, color: '#000',
  },

  bellView: {
    height: 30, width: 30, backgroundColor: '#D289FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'column',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    marginRight: 8,
  },
  locationText: {
    fontSize: 13,
    paddingLeft: 5,
    fontFamily: fonts.MONTESERAT_REGULAR,
    color: 'white',
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 14,
    fontFamily: fonts.MONTESERAT_MEDIUM,
    color: 'white',
    marginRight: 4,
  },
  userName: {
    fontSize: 21,
    fontFamily: fonts.MONTESERAT_BOLD,
    color: 'white',
  },
  notificationIcon: {
    fontSize: 24,
    color: 'white',
  },
});

export default TabsHeader;
