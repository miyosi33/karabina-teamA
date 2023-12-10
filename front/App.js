import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Menu from './Menu';


function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Menu />
    </NavigationContainer>
    </View>
  );
}

export default App;

