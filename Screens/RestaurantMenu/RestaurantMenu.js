import * as React from 'react';
import { View, ScrollView } from "react-native";
import Header from "../../Components/Header/Header";
import MenuTile from "../../Components/MenuTile/MenuTile";
import images from "../../assets/images";

const restaurantMenu = [
    {
        menuName: "QUADRA RELOADED",
        menuCatogery: "Fast Food",
        menuDesc: "4 smashed beef patties with melted cheese topped with crispy onion rings, grilled mushrooms, smoke and BBQ sauces.",
        menuMainPic: images.mcdonalds
    },
    {
        menuName: "THE DOPPLER",
        menuCatogery: "Fast Food",
        menuDesc: "Double crispy chicken topped with cheese, mayo, chilli garlic sauce and lettuce.",
        menuMainPic: images.burgerLab
    },
    {
        menuName: "SIGNATURE BOX",
        menuCatogery: "Fast Food",
        menuDesc: "2 Pc Hot & Crispy Chicken, 1 Regular Fries, 1 Regular Drink & 1 Coleslaw",
        menuMainPic: images.kfc
    }
]

class MyComponent extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Header />
                    {restaurantMenu.map((val, index) => {
                        return (
                            <MenuTile key={index} menuName={val.menuName} menuCatogery={val.menuCatogery} menuDesc={val.menuDesc} menuMainPic={val.menuMainPic} />
                        )
                    })}
                </View>
            </ScrollView>
        );
    }
}

export default MyComponent;