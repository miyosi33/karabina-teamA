// App.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ onPress }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={onPress} />
    </View>
  );
}

function DetailsScreen({ goBack }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {/* <Button title="Go back" onPress={goBack} /> */}
    </View>
  );
}

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const handlePress = () => {
    setShowDetails(true);
  };

  const handleGoBack = () => {
    setShowDetails(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {showDetails ? (
        <DetailsScreen goBack={handleGoBack} />
      ) : (
        <HomeScreen onPress={handlePress} />
      )}
    </View>
  );
}

export default App;
