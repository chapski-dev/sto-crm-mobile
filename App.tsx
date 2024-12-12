import { SafeAreaView } from "react-native";
import { Auth } from "./src/screens/Auth";
import { useState } from "react";
import { NoConnection } from "./src/screens/NoConnection";
import React from "react";

function App(): React.JSX.Element {

  const [screenState, setScreenState] = useState('no connection')

  return (
    <SafeAreaView>
      {
        screenState === 'no connection' 
        ?
        <NoConnection />
        :
        <Auth />
      }
    </SafeAreaView>
  );
}

export default App;
