import React, {useState} from 'react';
import * as Page from "../pages"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions // optional
} from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Ionicons';
const Tabs = AnimatedTabBarNavigator();

const BottomTab = ({ navigation, route }) => {
  const { user: initialUser = {}, onUpdate = () => {} } = route.params || {};
  const [user, setUser] = useState(initialUser);

  const handleUserUpdate = (updatedUser) => {
    setUser(updatedUser);
    onUpdate(updatedUser);
  };
  
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Beranda') {
            iconName = 'home';
          } else if (route.name === 'Profil') {
            iconName = 'person';
          } else if (route.name === 'Diskusi') {
            iconName = 'chatbox';
          }

          return <Icon name={iconName} size={size ? size : 24} color={focused ? color : 'white'} />;
        },
        tabBarActiveTintColor: '#FF9E1F',
        tabBarInactiveTintColor: '#222222',
      })}
      appearance={{tabBarBackground:"#4F2305"}}
    >
      <Tabs.Screen name="Beranda">
        {props => <Page.Home {...props} user={user} onUpdate={handleUserUpdate} />}
      </Tabs.Screen>
      <Tabs.Screen name="Diskusi">
        {props => <Page.Discuss {...props} user={user} onUpdate={handleUserUpdate} />}
      </Tabs.Screen>
      <Tabs.Screen name="Profil">
        {props => <Page.Auth.Profile {...props} user={user} onUpdate={handleUserUpdate} />}
      </Tabs.Screen>
      {/* Add more tabs here if needed */}
    </Tabs.Navigator>
  );
};

const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={Page.SplashScreen} />
        <Stack.Screen name="Login" component={Page.Auth.Login} />
        <Stack.Screen name="Register" component={Page.Auth.Register} />
        <Stack.Screen name="Profile" component={Page.Auth.Profile} />
        <Stack.Screen name="EditProfile" component={Page.Auth.EditProfile} />
        {/* MainApp */}
        <Stack.Screen name="MainApp" component={BottomTab} />

        {/* MainMenu */}
        <Stack.Screen name="Materi" component={Page.MainMenu.Materi} />
        <Stack.Screen name="ScanGames" component={Page.MainMenu.Games.Scan} />
        <Stack.Screen name="TaskGames" component={Page.MainMenu.Games.Task} />
        <Stack.Screen name="Soal" component={Page.MainMenu.Soal} />
        <Stack.Screen name="Rapor" component={Page.MainMenu.Rapor} />

        {/* AbiltyTest */}
        <Stack.Screen name="AbilityTest" component={Page.AbiltyTest.Test} />
        <Stack.Screen name="AbilityScore" component={Page.AbiltyTest.Score} />
        <Stack.Screen name="AbilityResult" component={Page.AbiltyTest.Result} />

      </Stack.Navigator>
  );
};



export default Navigation;
