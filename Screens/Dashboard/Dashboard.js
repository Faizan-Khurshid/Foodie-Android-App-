import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from "../../Components/Header/Header";
import RestaurantTitle from "../../Components/RestaurentTitle/RestaurentTitle";
import images from "../../assets/images";
import RestaurantMenu from "../../Screens/RestaurantMenu/RestaurantMenu";

const restaurants = [
    {
        restaurantName: "McDonalds",
        restaurentCatogery: "Fast Food",
        restaurantDesc: "A step into BurgerLab is a step into a new world of taste. It is simply the aroma from our kitchens floating in the air that does the pulling both magically and magnetically.",
        restaurantMainPic: images.mcdonalds,
        restaurantLogo: images.McdonaldLogo,
        minOrder: "49",
        deliveryPrice:'29'
    },
    {
        restaurantName: "Burger Lab",
        restaurentCatogery: "Fast Food",
        restaurantDesc: "A step into BurgerLab is a step into a new world of taste. It is simply the aroma from our kitchens floating in the air that does the pulling both magically and magnetically.",
        restaurantMainPic: images.burgerLab,
        restaurantLogo: images.burgerLabLogo,
        minOrder: '99',
        deliveryPrice:'49'
    },
    {
        restaurantName: "KFC",
        restaurentCatogery: "Fast Food",
        restaurantDesc: "Today millions of Pakistanis place their trust in McDonald’s to provide them with food of a very high standard, quick service and value for money. So next time you walk into one of our restaurants, please remember, McDonald’s Pakistan is here now, to put a smile on your face, each and every time you visit us.",
        restaurantMainPic: images.kfc,
        restaurantLogo: images.kfcLogo,
        minOrder: '149',
        deliveryPrice: '49'
    }
]
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    onRestaurantPress = () => {
        this.setState({
            openRestaturentMenu: true
        })
    }
    openDashboard = () => {
        this.setState({
            openRestaturentMenu: false
        })
    }
    render() {
        const { openRestaturentMenu } = this.state;
        return (
            <ScrollView>
                <View>
                    <Header actions={{search: !openRestaturentMenu}} navigation={this.props.navigation} noMenuIcon={openRestaturentMenu} onPrevIconPress={this.openDashboard}/>
                    {!openRestaturentMenu && restaurants.map((val, index) => {
                        return (
                            <RestaurantTitle key={index} onRestaurantPress={restaurant => this.onRestaurantPress(restaurant)} restaurant={val}  />
                        )
                    })}
                    {openRestaturentMenu && <RestaurantMenu />}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});
