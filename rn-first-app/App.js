import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const onDelete = (id) => {
    setCourseGoals(cur => {
      return courseGoals.filter((val, index) => {
        return index !== id;
      });
    });
  };

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { 
        id: courseGoals.length, 
        value: goalTitle 
      }
    ]);
  };

  const changeAddMode = (value) => {
    setIsAddMode(value);
  };

  return (
    <View style={styles.screen}>
      <Button title="OPEN" onPress={changeAddMode.bind(this, true)}/>
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} changeAddMode={changeAddMode}/>
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem onDelete={onDelete} item={itemData.item}/>}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    backgroundColor: 'black'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },

});
