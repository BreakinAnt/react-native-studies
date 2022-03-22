import { Text, View, StyleSheet } from 'react-native';

const BodyText = props => <Text style={styles.text}>{props.children}</Text>;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans-regular'
    }
});

export default BodyText;