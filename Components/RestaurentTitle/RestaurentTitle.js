import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Subheading, Paragraph } from 'react-native-paper';


export default class RestaurantTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { restaurant, onRestaurantPress } = this.props;
    const { restaurantName, restaurantDesc, restaurantMainPic, restaurantLogo, deliveryPrice, minOrder } = restaurant;
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Card style={styles.card} onPress={() => onRestaurantPress(restaurant)}>
            <Card.Title title={restaurantName}
              left={() => <Avatar.Image size={45} source={restaurantLogo} />}
            />
            <Card.Cover source={restaurantMainPic} />
            <Card.Content>
              <Subheading style={{ fontSize: 16 }}>{restaurantDesc}</Subheading>
              <Paragraph>Rs {minOrder} minimum</Paragraph>
              <Paragraph>Rs {deliveryPrice} Delivery fee</Paragraph>
            </Card.Content>
            <Card.Actions style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity><Button onPress={() => onRestaurantPress(restaurant)}>View</Button></TouchableOpacity>
            </Card.Actions>
          </Card>
        </View>
      </TouchableOpacity>
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
