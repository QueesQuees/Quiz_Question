import React from 'react';
import {Text, View} from 'react-native';
import styles from './question.styles';
interface Props {
  contentQuestions: string;
  countDown: number;
}
const Question: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.contentQuestions}>
        <Text style={styles.textQuestions}>{props?.contentQuestions}</Text>
      </View>
      <Text style={styles.countDown}>Count down: {props?.countDown}</Text>
    </View>
  );
};

export default Question;
