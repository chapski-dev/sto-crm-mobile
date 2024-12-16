import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import { SafeAreaView } from "react-native";
import { Auth } from "./src/screens/Auth";
import { useState } from "react";
import { NoConnection } from "./src/screens/NoConnection";
import React from "react";

function App(): React.JSX.Element {

  const [screenState, setScreenState] = useState('no connection')

  return (
    <NavigationContainer>
      <SafeAreaView>
        {
          screenState === 'no connection' 
          ?
          <NoConnection />
          :
          <Auth />
        }
      </SafeAreaView>

      <Navigator />
    </NavigationContainer>

  );
}

export default App;
