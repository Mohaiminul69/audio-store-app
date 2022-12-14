import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import store from "./src/Redux/Store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import Home from "./src/Screens/Home";
import { presets } from "./src/Components/Text/text.preset";
import Text from "./src/Components/Text/Text";
import FlashMessage from "react-native-flash-message";
import Navigation from "./src/Navigation/Index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export default function App() {
  const [loaded] = useFonts({
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
            <FlashMessage position="top" floating statusBarHeight={30} />
          </SafeAreaProvider>
        </PersistGate>
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
