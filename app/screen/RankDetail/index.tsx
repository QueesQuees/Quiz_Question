import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Menu from '../../components/Menu/menu';
import Screen from '../../components/Screen';

function RankDetail({navigation}: any) {
  return (
    <Screen>
      <Menu onPress={() => navigation.goBack()} icon={faAngleLeft} />
    </Screen>
  );
}

export default RankDetail;
