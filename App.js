import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import AppContainer from "./src/navigator";
import {StatusBar} from'react-native';
import { colors } from "./src/assets/colors/colors";

const App = () => {
  return(
   <>
   <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.Primary_Blue} translucent={true} />
    <AppContainer />
   </NavigationContainer>
   </>
  )
}

export default App;