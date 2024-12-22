import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import React, { useState } from "react";
import { NoConnection } from './src/screens/NoConnection';
import { ProfileScreen } from './src/screens/ProfileScreen';

function App(): React.JSX.Element {

  const [noInternetConnection, setNoInternetConnection] = useState(false)

  return (
    <NavigationContainer>

      {
        noInternetConnection ?
        <NoConnection /> :
        <Navigator />
      }

    </NavigationContainer>

  );
}

export default App;
