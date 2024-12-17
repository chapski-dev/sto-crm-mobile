import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import React from "react";

function App(): React.JSX.Element {

  return (
    <NavigationContainer>

      <Navigator />

    </NavigationContainer>

  );
}

export default App;
