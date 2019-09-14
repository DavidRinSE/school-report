import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { red } from 'ansi-colors';

export default class End extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <Text style={styles.header}>Thank You for Speaking Up.</Text>
                <View style={styles.subtextWrap}>
                    <Text style={styles.subtext}>Your report will be investigated as soon as possible.</Text>
                    <Text style={styles.subtext}>If you have any more issues, you can contact your school officer directly or speak to your grade-level counselor.</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.props.onPress}><Text>Close</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignContent: "flex-start",
    },
    header: {
        paddingTop: 75,
        paddingLeft: 15,
        fontSize: 45,
        textAlign: "left",
    },
    subtext: {
        paddingBottom: 20,
        fontSize: 20,
    },
    subtextWrap: {
        width: "75%",
        alignSelf: "center",
    },
    button: {
        alignSelf: "center",
        marginBottom: 100,
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "lightblue",
    }
})