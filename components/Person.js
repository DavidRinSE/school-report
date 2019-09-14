import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Person extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
        }
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <Text>Who is Involved?</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={(text) => this.props.onChange(text, this.props.index)}
                ></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        width: '55%',
        height: 50,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    textInput: {
        width: '100%',
        height: 42,
        borderColor: "gray",
        borderWidth: 1,
    }
})