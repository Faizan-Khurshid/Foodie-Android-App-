import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SignUp from "./Screens/SignUp/SignUp";
import Dashboard from "./Screens/Dashboard/Dashboard";
import RestaurantMenu from "./Screens/RestaurantMenu/RestaurantMenu";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#d70f64',
    accent: '#fff',
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openRestaurantMenu: false,
      signUp: true
    }

  }
  onRestaturantTilePress = () => {
    this.setState({
      openRestaurantMenu: true
    })
  }

  render() {
    const { signUp, dashboard, restaurantMenu, openRestaurantMenu } = this.state;
    return (
      <PaperProvider theme={theme}>
        <MyApp /> 
      </PaperProvider>
    );
  }
}

const MyDrawerNavigation = createDrawerNavigator({
  // Home: {
  //   screen: Dashboard
  // },
  'Login / Create An Account': {
    screen: SignUp
  },
})
const MyApp = createAppContainer(MyDrawerNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const drawerStyles = {
  drawer: { shadowColor: '#d70f64', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 },
}
