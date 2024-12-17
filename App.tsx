import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import React, { useState } from "react";
import { NoConnection } from './src/screens/NoConnection';

function App(): React.JSX.Element {

  const [screenState, setScreenState] = useState(true)

  return (
    <NavigationContainer>

      {
        screenState ?
        <NoConnection /> :
        <Navigator />
      }

    </NavigationContainer>

  );
}

export default App;
