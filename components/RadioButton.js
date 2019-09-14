import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
/*
    [
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
    ]
*/
export default class RadioButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }
    }

    render(){
        let itemWrapper = []
        this.props.items.forEach(item => {
            itemWrapper.push(
                <View key={item.key} style={styles.buttonContainer}>
                    <Text>{item.title}</Text>
                    <TouchableOpacity 
                        style={styles.circle}
                        onPress={() => {
                                this.setState({value: item.key})
                                this.props.onChange(item.title)
                            }
                        }
                    >
                        {(this.state.value === item.key) ? <View style={styles.checkedCircle}></View> : <View></View>}
                    </TouchableOpacity>
                </View>
            )
        });

        return (
            <View >
                {itemWrapper}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#794F9B',
    },
})