import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import EmergencyButton from '../../components/EmergencyButton';
export default class StudentLogin extends React.Component {
  state = {
    studentId: '',
  };

  render() {
    return (
      <>
        <View style={styles.wrapperMain}>
          <Text style={styles.title}>Freedom High School</Text>
          <Image style={styles.imageMain} source={require('../../assets/high-school.png')} />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>Student ID</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={studentId => this.setState({ studentId })}
              value={this.state.studentId}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('End')}
            style={styles.loginBtnContainer}
          >
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <EmergencyButton style={styles.emergencyButton} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapperMain: {
    flex: 1,
    width: '100%',
    height: '75%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  imageMain: {
    width: 350,
    height: 200,
    marginVertical: 'auto',
    padding: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 26,
    marginTop: 10,
    fontWeight: 'bold',
  },
  inputWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: '10%',
    fontWeight: 'bold',
  },
  description: {
    width: '75%',
    fontSize: 16,
    lineHeight: 22,
  },
  textInput: {
    height: 40,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  loginBtnContainer: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: '#6558F5',
  },
  loginBtnText: {
    color: 'white',
    fontSize: 18,
  },
  emergencyButton: {
    position: 'absolute',
    bottom: 40,
    left: 30,
  },
});
