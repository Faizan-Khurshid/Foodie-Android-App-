import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default class RestaurantTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { restaurantName, restaurantDesc, restaurentCatogery, restaurantMainPic, restaurantLogo, onRestaurantPress } = this.props;
    return (
      <View style={styles.container}>
        <Card style={styles.card} onPress={onRestaurantPress}>
          <Card.Title title={restaurantName} subtitle={restaurentCatogery}
            left={() => <Avatar.Image size={45} source={restaurantLogo} />}
          />
          <Card.Cover source={restaurantMainPic} />                    
          <Card.Content>
            <Paragraph>{restaurantDesc}</Paragraph>
          </Card.Content>
          <Card.Actions style={{justifyContent: 'flex-end'}}>
            <Button onPress={onRestaurantPress}>View</Button>
          </Card.Actions>
        </Card>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 30,
  },
  card: {
    zIndex: 999
  }
});
