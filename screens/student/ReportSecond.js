import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    CheckBox,
    TouchableHighlight,
    Image,
    Button
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const ReportSecond = props => {
    const {inputValue, buttonState, inputArray} = props
    const [checked, setChecked] = useState(false);
    const radioProps = [
        { label: 'Yes', value: 0 },
        { label: 'No', value: 1 },
        { label: "I'm not sure", value: 2 }
    ];
    return (
        <ScrollView>
            <Text style={styles.header}>Make a Report.</Text>
            <Text style={styles.subHeader}>
                Remember, all reports are anonymous
            </Text>
            <View style={styles.inputView}>
                <Text>Describe what's going on</Text>
                <TextInput multiline numberOfLines={8} style={styles.input} />
            </View>
            <View style={styles.inputView}>
                <Text style={{ fontSize: 15 }}>
                    Do you think you or someone else could be in danger?
                </Text>

                <RadioForm
                    style={styles.buttons}
                    radio_props={radioProps}
                    initial={0}
                    onPress={value => setButtonState(value)}
                />
            </View>
            <View style={styles.CheckBox}>
                <CheckBox
                    value={checked}
                    onChange={() => setChecked(!checked)}
                />
                <Text>
                    I understand that intentionally false reporting is unethical, and a crime.
                </Text>
            </View>
            <View style={styles.buttonView}>

            <Button onPress={() => checked ? props.navigation.navigate('End') : null} title="Report"/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        marginTop: 100,
        marginLeft: 50
    },
    subHeader: {
        marginLeft: 50,
        fontSize: 15
    },
    input: {
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 5,
        padding: 5
    },
    inputView: {
        marginLeft: 70,
        marginTop: 60
    },
    CheckBox: {
        marginLeft: 70,
        marginTop: 40
    },
    buttonView: {
        width: 120,
        alignSelf: 'center',
        marginBottom: 10,
    }
});

export default ReportSecond;
