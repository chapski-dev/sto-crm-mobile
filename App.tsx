import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import React, {useState} from 'react';
import {NoConnection} from './src/screens/NoConnection';

function App(): React.JSX.Element {
<<<<<<< HEAD

  const [noInternetConnection, setNoInternetConnection] = useState(false)
=======
  const [noInternetConnection, setNoInternetConnection] = useState(false);
>>>>>>> main

  return (
    <NavigationContainer>
      {noInternetConnection ? <NoConnection /> : <Navigator />}
    </NavigationContainer>
  );
}

export default App;
