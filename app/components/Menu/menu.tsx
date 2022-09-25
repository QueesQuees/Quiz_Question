import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './menu.styles';

interface Props {
  onPress: () => void;
  icon: IconDefinition;
}

const Menu: React.FC<Props> = props => {
  return (
    <View>
      <View style={styles.headerContent}>
        {/* Menu game */}
        <TouchableOpacity onPress={props?.onPress}>
          <FontAwesomeIcon size={30} color="white" icon={props?.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
