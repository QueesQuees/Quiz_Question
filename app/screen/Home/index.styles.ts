import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textColorWhite: {
    color: 'white',
  },
  bodyContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bodyContentName: {
    alignItems: 'center',
  },
  gameName: {
    fontSize: 40,
    fontWeight: '600',
  },
  underlined: {
    height: 6,
    backgroundColor: '#5F6F94',
    width: 200,
    marginVertical: 10,
  },
  guide: {
    textAlign: 'center',
  },
  btnPlay: {
    borderColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: 'rgba(95, 111, 148, 0.5)',
  },
  textPlay: {
    fontSize: 25,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pleaseNote: {
    fontSize: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default styles;
