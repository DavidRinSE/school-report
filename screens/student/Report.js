import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const Report = props => {
  const [buttonState, setButtonState] = useState(0);
  const [inputValue, setInputValues] = useState('name');
  const [inputArray, setInputArray] = useState([0, 1]);

  const radioProps = [
    { label: 'student', value: 0 },
    { label: 'staff or faculty member', value: 1 },
    { label: 'someone else', value: 2 },
  ];

  const handleTextChange = (text, key) => {
    setInputValues({
      [key]: text,
    });
  };

  const handleButtonPress = () => {
    setInputArray([...inputArray, inputArray.length]);
  };

  return (
    <ScrollView>
      <Text style={styles.header}>Make a Report.</Text>
      <Text style={styles.subHeader}>Remember, all reports are anonymous</Text>
      <Text style={styles.selectorHeader}>I'd like to report as a:</Text>
      <RadioForm
        style={styles.buttons}
        radio_props={radioProps}
        initial={0}
        onPress={value => setButtonState(value)}
      />
      <View style={styles.inputView}>
        {inputArray.map(i => {
          return (
            <View style={styles.inputWrapper} key={i}>
              <Text style={styles.inputLabel}>Who is involved?</Text>
              <TextInput onChangeText={handleTextChange} style={styles.input} placeholder="name" />
            </View>
          );
        })}

        <TouchableHighlight onPress={handleButtonPress}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 200,
              alignItems: 'center',
            }}
          >
            <Image style={styles.addButton} source={require('../../assets/add.png')} />
            <Text
              style={{
                color: 'purple',
                marginTop: 18,
                marginLeft: 4,
              }}
            >
              add another person
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={{
          width: 120,
          display: 'flex',
          marginTop: 30,
          marginBottom: 30,
          alignSelf: 'center',
        }}
      >
        <Button
          title="Report"
          color="purple"
          // onPress={() => }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginTop: 100,
    marginLeft: 50,
  },
  subHeader: {
    marginLeft: 50,
    fontSize: 15,
  },
  selectorHeader: {
    marginTop: 70,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 20,
    marginLeft: 70,
  },
  input: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 1,
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
  },
  inputView: {
    marginLeft: 70,
    marginTop: 60,
  },
  inputWrapper: {
    marginTop: 5,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButton: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
});

export default Report;


function uploadForm(state){
    let ddoc = {
      _id: '_design/studentform',
      indexes: {
        form: state
      }
    };
    
    db.insert(ddoc, (err, result) => {
      if(err){
        console.warn(err)
      }
      console.log(result)
    })
  }