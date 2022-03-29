import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen() {
    const navigation = useNavigation();
    const categoryId = useRoute().params.categoryId;

    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    });

    const categoryTitle = CATEGORIES.find((item) => item.id === categoryId).title;

    useLayoutEffect(() => {     
        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation])

    function renderMealItem(data) {
        return <View>
            <MealItem meal={data.item}/>
        </View>;
    };

    return (<View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}></FlatList>
        </View>);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});