import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
  },
  topContent: {flex: 2},
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 35,
    paddingVertical: 25,
  },
  discription: {color: '#000', textAlign: 'center'},
  btnPrimary: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#198754',
    borderRadius: 5,
  },
  primaryText: {color: '#fff', fontSize: 20, textAlign: 'center'},
});

export default styles;
