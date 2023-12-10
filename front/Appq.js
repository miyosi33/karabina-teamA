import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignup from './LoginSignup';
import Login from './Login';
import Signup from './Signup';
import IconMenu from './IconMenu';
import Invitecode from './Invitecode';
import ChatHome from './ChatHome';
import ChatScreen from './ChatScreen';
import History from './History';
import MissionCheck from './MissionCheck';

const Stack = createStackNavigator();

const App: () => React.Node = () => {
  // フォントを読み込む
  const [fontsLoaded] = useFonts({
    SourceHanSans: require("./assets/fonts/SourceHanSans-Normal.otf"),
    NicoKakuv2: require("./assets/fonts/nicokaku_v2.ttf"),
    cinecaption: require("./assets/fonts/cinecaption226.ttf")
  });
  // フォントの読み込みが終わるまで待つ
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Chat'>
        <Stack.Screen name="LoginSignup" component={LoginSignup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="IconMenu" component={IconMenu} options={{ headerShown: false }} />
        <Stack.Screen name="Invitecode" component={Invitecode} options={{ headerShown: false}} />
      <Stack.Screen name="ChatHome" component={ChatHome} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name='History' component={History} options={{ headerShown: false }} />


        {/* 運営側のミッション判定画面 */}
      <Stack.Screen name="MissionCheck" component={MissionCheck} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
