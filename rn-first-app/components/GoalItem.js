import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.item.id)}>
        <View style={styles.listItem}>
            <Text>{props.item.value}</Text>
        </View>
    </TouchableOpacity>
);
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 3,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem;