import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Root from 'src/screens/Root';
import Feed from 'src/screens/Feed';
import FavoritesScreen from 'src/screens/Favorites';
import Details from 'src/screens/Details';
import Comments from 'src/screens/Comments';

import TabBarIcon from 'src/components/TabBarIcon';

import styles from './styles';

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      gestureEnabled: true,
      headerShown: false,
    },
  },
}, {
  initialRouteName: 'Feed',
});

const Favstack = createStackNavigator({
  FavoritesScreen: {
    screen: FavoritesScreen,
    navigationOptions: {
      gestureEnabled: false,
      headerShown: false,
    },
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      gestureEnabled: true,
      headerShown: false,
    },
  },
});


const AppTabNavigator = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      gestureEnabled: false,
      headerShown: false,
      tabBarIcon: (props) => <TabBarIcon icon='images-outline' title='Feed' { ...props } />,
    },
  },
  Favorites: {
    screen: Favstack,
    navigationOptions: {
      gestureEnabled: false,
      headerShown: false,
      tabBarIcon: (props) => <TabBarIcon title='Favorites' icon='heart' { ...props }/>,
    },
  },
}, {
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
    style: styles.tabs,
  },
});


const appNavigator = createStackNavigator({
  Root: {
    screen: Root,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  Main: {
    screen: AppTabNavigator,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
}, {
  initialRouteName: 'Root',
});


export default createAppContainer(appNavigator);