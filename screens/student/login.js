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
          <Image style={styles.imageMain} source={require('../../assets/pike_main.png')} />
          <Text style={styles.title}>Safe schools, safe communities.</Text>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>Student Number</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={studentId => this.setState({ studentId })}
              value={this.state.studentId}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Report')}
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
    marginVertical: 'auto',
    padding: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    color: 'gray',
  },
  inputWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80,
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: '8%',
    color: 'gray',
  },
  description: {
    width: '75%',
    fontSize: 16,
    lineHeight: 22,
  },
  textInput: {
    height: 40,
    width: '85%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 40,
  },

  loginBtnContainer: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    // backgroundColor: '#6558F5',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
  },
  loginBtnText: {
    fontSize: 18,
    color: 'gray',
  },
  emergencyButton: {
    position: 'absolute',
    bottom: 40,
    left: 30,
  },
});
