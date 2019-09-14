import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class StudentLogin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapperMain}>
        <Text style={styles.title}>Freedom High School</Text>
        <Image style={styles.imageMain} source={require('../../assets/kyle.png')} />
        {/* Link to Make a report */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperMain: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageMain: {
    width: 100,
    height: 100,
    margin: 'auto',
  },
  title: {
    fontSize: 26,
    alignSelf: 'flex-start',
  },
});
