import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './index.styles';

interface Props {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

const ListOfAnswers: React.FC<Props> = props => {
  return (
    <View>
      <View>
        <Text style={styles.answer}>{props?.answer1}</Text>
        <Text style={styles.answer}>{props?.answer2}</Text>
      </View>
      <View>
        <Text style={styles.answer}>{props?.answer3}</Text>
        <Text style={styles.answer}>{props?.answer4}</Text>
      </View>
    </View>
  );
};

export default ListOfAnswers;
