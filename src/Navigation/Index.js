import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Headphones from "../Screens/Headphones";
import ProductDetails from "../Screens/ProductDetails";
import Earphones from "../Screens/Earphones";
import Speakers from "../Screens/Speakers";
import Cart from "../Screens/Cart";
import Cheakout from "../Screens/Cheakout";

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const HeadphonesStack = createNativeStackNavigator();

function HeadphonesStackScreen() {
  return (
    <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphonesStack.Screen name="Headphones" component={Headphones} />
      <HeadphonesStack.Screen name="Details" component={ProductDetails} />
    </HeadphonesStack.Navigator>
  );
}

const EarphonesStack = createNativeStackNavigator();

function EarphonesStackScreen() {
  return (
    <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphonesStack.Screen name="Earphones" component={Earphones} />
      <EarphonesStack.Screen name="Details" component={ProductDetails} />
    </EarphonesStack.Navigator>
  );
}
const SpeakersStack = createNativeStackNavigator();

function SpeakersStackScreen() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={ProductDetails} />
    </SpeakersStack.Navigator>
  );
}
const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Cheakout} />
    </CartStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          options={{ title: "Home" }}
          name="HomeTab"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{ title: "Headphones" }}
          name="HeadphonesTab"
          component={HeadphonesStackScreen}
        />
        <Tab.Screen
          options={{ title: "Earphones" }}
          name="EarphonesTab"
          component={EarphonesStackScreen}
        />
        <Tab.Screen
          options={{ title: "Speakers" }}
          name="SpeakersTab"
          component={SpeakersStackScreen}
        />
        <Tab.Screen
          options={{ title: "Cart" }}
          name="CartTab"
          component={CartStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
