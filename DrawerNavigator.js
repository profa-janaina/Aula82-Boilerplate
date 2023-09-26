import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import  TabNavigator  from "./TabNavigator";
import ProfileScreen from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={TabNavigator}/>
            <Drawer.Screen name="Perfil" component={ProfileScreen}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;