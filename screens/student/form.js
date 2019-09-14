import React from 'react';
import RadioButton from '../components/RadioButton.js';
import Person from '../components/Person.js';
import {StyleSheet, View, Text} from 'react-native';

export default class Student extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    title: "a student",
                    key: 0,
                },
                {
                    title: "a staff or faculty member",
                    key: 1,
                },
                {
                    title: "someone else",
                    key: 2,
                }
            ],
            buttonSelected: "a student",
            textInputs: {
                0: "",
                1: "",
                2: "",
            },
        }
    }
    render(){
        let buttonChanged = (title) => {
            this.setState({buttonSelected: title})
        }
        let textChanged = (text, index) => {
            let textInputs = this.state.textInputs
            textInputs[index] = text
            this.setState({textInputs: textInputs})
        }
        return (
            <View style={styles.wrapper}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: 20,
    }
})