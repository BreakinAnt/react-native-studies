import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import colors from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Error', 'Invalid Number.', [{ Text: 'Vish', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = <Card style={styles.summary}>
                <Text>Chosen Number</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button style={styles.button} title="START GAME" onPress={() => props.onStartGame(selectedNumber)}></Button>
            </Card>;
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>  
            <View style={styles.screen}>
                <Text style={styles.title}>Game Screen</Text>
                <Card style={styles.input}>
                    <BodyText>Select a Number</BodyText>
                    <Input blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
                    <View style={styles.buttons}>
                        <View style={styles.button}><Button title="Reset" onPress={() => resetInputHandler()} color={colors.secondary}/></View>
                        <View style={styles.button}><Button title="Confirm" onPress={() => confirmInputHandler()} color={colors.primary}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    input: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    summary: {
        marginTop: 20
    }
});

export default StartGameScreen;