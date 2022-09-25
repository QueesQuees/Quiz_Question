import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContent: {
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  pointContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  point: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  level: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  imageRank: {
    width: 50,
    height: 50,
  },
  answerContainer: {
    // justifyContent: 'flex-start',
  },
  btnAnswer: {
    backgroundColor: 'rgba(24, 177, 169, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  answer: {
    color: 'white',
  },
  modalAnswerWrong: {
    margin: 0,
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
  },
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
  btnmodalAnswerWrong: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#198754',
    borderRadius: 5,
  },

  modalContentNextLevel: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 35,
    paddingVertical: 25,
  },
});

export default styles;
