import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
// import Page4 from './Page4';
const MenuItem = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <Image source={imageSource} style={styles.imageButton} />
    </TouchableOpacity>
  );
};


const Menu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handlePress1 = () => {
    setActiveButton(1);
  };

  const handlePress2 = () => {
    setActiveButton(2);
  };

  const handlePress3 = () => {
    setActiveButton(3);
  };

  const handlePress4 = () => {
    setActiveButton(4);
  };

  return (
    <View style={styles.container}>
      {activeButton === 1 && <Page1 />}
      {activeButton === 2 && <Page2 />}
      {activeButton === 3 && <Page3 />}
      {activeButton === 4 && <Page4 />}

      <View style={styles.menuBar}>
        <MenuItem onPress={handlePress1} imageSource={require('./assets/button1.png')} />
        <MenuItem onPress={handlePress2} imageSource={require('./assets/button2.png')} />
        <MenuItem onPress={handlePress3} imageSource={require('./assets/button3.png')} />
        <MenuItem onPress={handlePress4} imageSource={require('./assets/button4.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imageButton: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Menu;
