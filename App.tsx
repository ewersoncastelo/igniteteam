import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";

import theme from "@theme/index";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";
import { Players } from "@screens/Players";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
