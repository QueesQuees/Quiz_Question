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
    borderRadius: 50,
    marginLeft: 20,
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
});

export default styles;
