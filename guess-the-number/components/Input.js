import react from "react";
import { TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Input = props => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        backgroundColor: colors.lightBg
    }
});

export default Input;
