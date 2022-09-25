import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import Screen from '../../components/Screen';
import styles from './index.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <Screen>
      <View style={styles.bodyContent}>
        {/* game name */}
        <View style={styles.bodyContentName}>
          <Text style={[styles.gameName, styles.textColorWhite]}>
            Memory race
          </Text>
          <View style={styles.underlined} />
          {/* Guide gameplay */}
          <Text style={[styles.guide, styles.textColorWhite]}>
            You will have to answer all the questions correctly in order to win.
            With 4 milestones are 10, 50, 100 and 500. With every wrong answer
            you will have to start from the beginning. Thank you for liking our
            game
          </Text>
        </View>

        {/* button play game */}
        <View>
          <TouchableOpacity
            style={styles.btnPlay}
            onPress={() =>
              navigate('PlayGame', {names: ['Brent', 'Satya', 'Michaś']})
            }>
            <Text style={[styles.textPlay, styles.textColorWhite]}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Footer */}
      <Text style={[styles.textColorWhite, styles.pleaseNote]}>
        Please note. If you answer incorrectly 3 times, you will be shown an ad
        for 30 seconds. You can buy the premium version{' '}
        <Text
          style={{color: 'blue'}}
          onPress={() => Linking.openURL('http://google.com')}>
          {/* Linking the premium version */}
          here
        </Text>{' '}
        to bypass this. Thanks for your interest in our game.
      </Text>
      <View style={styles.footerContent}>
        <FontAwesomeIcon color="white" icon={faCopyright} />
        <Text style={[styles.textColorWhite]}>Author: by Quees, 2022. </Text>
      </View>
      {/* Menu modal */}
    </Screen>
  );
};

export default HomeScreen;
