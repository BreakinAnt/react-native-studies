import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function MealItem({ meal }) {
    const navigation = useNavigation();

    return <View style={styles.item}>
        <Pressable android_ripple={{ color: '#ccc' }} onPress={() => navigation.navigate('MealDetail', {mealId: meal.id})}>
            <View>
                <Image source={{ uri: meal.imageUrl }} style={styles.image}/>
                <Text style={styles.title}>{meal.title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{meal.duration}</Text>
                <Text style={styles.detailItem}>{meal.complexity}</Text>
                <Text style={styles.detailItem}>{meal.affordability}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    item: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        textAlign: 'center',
        fontFamily: 'sans-pro-bold',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});

export default MealItem;