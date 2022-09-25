import React, {useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './menu.styles';

const Menu: React.FC = () => {
  const [onpenMenu, setOpenMenu] = useState(false);
  return (
    <View>
      <View style={styles.headerContent}>
        {/* Menu game */}
        <TouchableOpacity onPress={() => setOpenMenu(true)}>
          <FontAwesomeIcon size={30} color="white" icon={faBars} />
        </TouchableOpacity>
      </View>
      <Modal visible={onpenMenu}>
        <View>
          <TouchableOpacity onPress={() => setOpenMenu(false)}>
            <FontAwesomeIcon size={30} icon={faTimesCircle} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Menu;
