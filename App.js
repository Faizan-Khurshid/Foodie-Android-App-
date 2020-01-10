import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SignUp from "./Screens/SignUp/SignUp";
import Dashboard from "./Screens/Dashboard/Dashboard";
import RestaurantMenu from "./Screens/RestaurantMenu/RestaurantMenu";
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
      openRestaurantMenu: false
    }
  }
  onRestaturantTilePress = () => {
    this.setState({
      openRestaurantMenu: true
    })
  }
  render() {
    const { openRestaurantMenu } = this.state;
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {/* <SignUp /> */}
          {!openRestaurantMenu && <Dashboard onRestaurantPress={this.onRestaturantTilePress} />}
          {openRestaurantMenu && <RestaurantMenu />}
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
