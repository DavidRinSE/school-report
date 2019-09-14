import React from 'react';
import RadioButton from '../components/RadioButton.js';
import { StyleSheet, View, Text } from 'react-native';

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'a student',
          key: 0,
        },
        {
          title: 'a staff or faculty member',
          key: 1,
        },
        {
          title: 'someone else',
          key: 2,
        },
      ],
      buttonSelected: 'a student',
    };
  }
  render() {
    let buttonChanged = title => {
      this.setState({ buttonSelected: title });
    };
    return (
      <View style={styles.wrapper}>
        <RadioButton items={this.state.items} onChange={buttonChanged} />
        <Text>{this.state.buttonSelected}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  },
});
