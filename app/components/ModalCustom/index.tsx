import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Modal, ModalProps, Pressable, Text, View} from 'react-native';
import styles from './index.styles';

interface Props extends ModalProps {
  onPressPrimary: () => void;
  icon: IconDefinition;
  discription: string;
  textPrimary: string;
}

const ModalCustom: React.FC<Props> = props => {
  return (
    <>
      <Modal
        visible={props?.visible}
        animationType="slide"
        transparent={true}
        style={styles.modalContainer}>
        <View style={styles.topContent} />
        <View style={styles?.modalContent}>
          <FontAwesomeIcon color="#ffd43b" size={50} icon={props?.icon} />
          <Text style={styles.discription}>{props?.discription}</Text>
          <Pressable style={styles.btnPrimary} onPress={props?.onPressPrimary}>
            <Text style={styles.primaryText}>{props?.textPrimary}</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default ModalCustom;
