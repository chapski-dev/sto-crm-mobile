import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import React, { useState } from "react";
import { NoConnection } from './src/screens/NoConnection';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {

  const [noInternetConnection, setNoInternetConnection] = useState(false)

  return (
    <NavigationContainer>
      {noInternetConnection ?<NoConnection /> :<Navigator />}
      <Toast />
    </NavigationContainer>
  );
}

export default App;
