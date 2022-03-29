import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    'sans-pro-regular': require('./fonts/SourceSansPro-Regular.ttf'),
    'sans-pro-bold': require('./fonts/SourceSansPro-Bold.ttf')
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  const defaultOptions = { headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25'} };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultOptions}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{  title: 'All Categories' }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
