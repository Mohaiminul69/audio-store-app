import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { store } from "./src/Redux/Store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import Home from "./src/Screens/Home";
import { presets } from "./src/Components/Text/text.preset";
import Text from "./src/Components/Text/Text";
import FlashMessage from "react-native-flash-message";
import Navigation from "./src/Navigation/Index";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [loaded] = useFonts({
    "Manrope-Bold": require("./assets/Fonts/manrope-bold.otf"),
    "Manrope-Regular": require("./assets/Fonts/manrope-regular.otf"),
    "Manrope-Medium": require("./assets/Fonts/manrope-medium.otf"),
  });

  if (!loaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
          <FlashMessage position="top" floating statusBarHeight={30} />
        </SafeAreaProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
