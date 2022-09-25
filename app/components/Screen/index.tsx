import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  View,
} from 'react-native';
import {ScreenProps} from './props';
import styles from './index.styles';
import Menu from '../Menu/menu';

const Screen: React.FC<ScreenProps> = ({statusBar, children}) => {
  return (
    <>
      <View style={styles.flex1}>
        <KeyboardAvoidingView style={styles.flex1}>
          <StatusBar
            barStyle={statusBar || 'light-content'}
            translucent
            backgroundColor={'transparent'}
            animated
          />
          <ImageBackground
            source={require('../../access/background/earth.jpg')}
            style={styles.flex1}>
            <View style={styles.content}>
              <Menu />
              {/* <ScrollView
              ref={scrollViewRef}
              nestedScrollEnabled
              refreshControl={
                refreshControl ? (
                  <RefreshControl {...refreshControl} />
                ) : undefined
              }
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              style={styles.content}
              contentContainerStyle={{}}> */}
              {children}
              {/* </ScrollView> */}
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Screen;
