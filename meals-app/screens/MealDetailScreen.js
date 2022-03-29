import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, Image, StyleSheet, ScrollView, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import {  } from "react-native-web";

function MealDetailScreen(props) {
    const navigation = useNavigation();
    const mealId = useRoute().params.mealId;
    const meal = MEALS.find((item) => item.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title
        });
    }, [mealId, navigation]);

    return <View>
        <Image source={{ uri: meal.imageUrl }} style={styles.image}/>
        <ScrollView>
            <Text>{meal.title}</Text>
            
        </ScrollView>
    </View>;
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    }
});