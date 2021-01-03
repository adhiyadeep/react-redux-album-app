
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlbumList from '../pages/AlbumList';
import PhotoListPage from '../pages/PhotoListPage';
import WishList from '../pages/WishList';
import Ionicons from 'react-native-vector-icons/Ionicons';

enableScreens();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function tabBar() {
  return (
    <Tab.Navigator
              tabBarOptions={{
                activeTintColor: 'orange',
                inactiveTintColor: 'gray',
                swipeEnabled:true,
                animationEnabled:true,
                style: {
                  backgroundColor: '#222222', // Bottom Tab Color 
                }
              }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'AlbumList') {
                     iconName = focused
                      ? 'menu'
                      : 'menu-outline';
                  } else if (route.name === 'WishList') {
                    iconName = focused ? 'heart' : 'heart-outline';
                  }
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}>
            <Tab.Screen name="AlbumList" component={AlbumList} 
            options={{ unmountOnBlur: true,title:"Albums" }}
        
            />
            <Tab.Screen name="WishList" component={WishList} />
          </Tab.Navigator>
  );
}

function Routes() {
  return (
  
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
       
        <Stack.Screen name="tabBar" component={tabBar} />
        <Stack.Screen name="PhotoListPage" component={PhotoListPage} />
      </Stack.Navigator>
  );
}





export default Routes
