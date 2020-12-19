import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./components/MainScreen";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					title: "Discount Calculator",
					headerStyle: {
						backgroundColor: "grey",
					},
					headerTintColor: "white",
				}}
			>
				<Stack.Screen name="Main" component={MainScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
