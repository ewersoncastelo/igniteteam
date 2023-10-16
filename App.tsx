import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";

import theme from "@theme/index";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups title="Hello World" /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
