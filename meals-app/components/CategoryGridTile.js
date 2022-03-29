import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function CategoryGridTile({title, color, id}) {
    const navigation = useNavigation();

    return (
        <View style={styles.gridItem}>
            <Pressable style={
                  ({ pressed }) => [{ flex: 1 }, pressed ? {opacity: 0.7} : null]
                } 
                android_ripple={{ color: '#ccc' }}
                onPress={() => navigation.navigate('MealsOverview', { categoryId: id })} 
                >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>)
    ;
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 3,
        overflow: 'hidden'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'sans-pro-bold',
        fontSize: 18
    }
});