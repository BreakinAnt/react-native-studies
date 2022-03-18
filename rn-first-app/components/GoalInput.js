import react, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

export default GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        props.changeAddMode(false);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Courses" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
                <Button title="ADD" onPress={addGoalHandler}/>
                <Button title="CLOSE" color='red' onPress={props.changeAddMode.bind(this, false)}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});