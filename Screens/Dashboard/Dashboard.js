import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from "../../Components/Header/Header";
import RestaurantTitle from "../../Components/RestaurentTitle/RestaurentTitle";
import images from "../../assets/images";

const restaurants = [
    {
        restaurantName: "McDonalds",
        restaurentCatogery: "Fast Food",
        restaurantDesc: "Today millions of Pakistanis place their trust in McDonald’s to provide them with food of a very high standard, quick service and value for money. So next time you walk into one of our restaurants, please remember, McDonald’s Pakistan is here now, to put a smile on your face, each and every time you visit us.",
        restaurantMainPic: images.mcdonalds,
        restaurantLogo: images.McdonaldLogo
    },
    {
        restaurantName: "Burger Lab",
        restaurentCatogery: "Fast Food",
        restaurantDesc: "A step into BurgerLab is a step into a new world of taste. It is simply the aroma from our kitchens floating in the air that does the pulling both magically and magnetically.",
        restaurantMainPic: images.burgerLab,
        restaurantLogo: images.burgerLabLogo
    },
    {
        restaurantName: "KFC",
        restaurentCatogery: "Fast Food",
        restaurantDesc: "Today millions of Pakistanis place their trust in McDonald’s to provide them with food of a very high standard, quick service and value for money. So next time you walk into one of our restaurants, please remember, McDonald’s Pakistan is here now, to put a smile on your face, each and every time you visit us.",
        restaurantMainPic: images.kfc,
        restaurantLogo: images.kfcLogo
    }
]
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { onRestaurantPress } = this.props;
        return (
            <ScrollView>
                <View>
                    <Header />
                    {restaurants.map((val, index) => {
                        return (
                            <RestaurantTitle key={index} onRestaurantPress={onRestaurantPress} restaurantName={val.restaurantName} restaurentCatogery={val.restaurentCatogery} restaurantDesc={val.restaurantDesc} restaurantMainPic={val.restaurantMainPic} restaurantLogo={val.restaurantLogo} />
                        )
                    })}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});
