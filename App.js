import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { store } from "./src/Redux/Store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import Home from "./src/Screens/Home";
import { presets } from "./src/Components/Text/text.preset";
import Text from "./src/Components/Text/Text";

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
        <Text preset="h3" style={{ marginTop: 80 }}>
          Hello
        </Text>
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
