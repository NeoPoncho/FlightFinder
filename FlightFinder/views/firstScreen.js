import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import styles from "./styles/Styles";
export default function firstScreen({ navigation }) {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={[styles.container, styles.flex1]} blurRadius={1} >
            
            <StatusBar style="dark" />

            <View style={styles.flex1}>
            </View>

            <View style={[styles.box, { flex: 5 }]}>
                <View style={styles.IconFirstPage} >
                    <MaterialCommunityIcons name="shield-airplane-outline" size={150} color="#00358a" />
                </View>

                <View style={{ justifyContent: 'flex-start', alignItems: "center" }}>
                    <Text style={styles.TituloFirstPage}>Welcome to FlightFinder</Text>
                </View>

                <View style={{ justifyContent: 'flex-start', alignItems: "center" }}>
                    <TouchableOpacity style={styles.firstPageBtn1} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.firstPageLbl}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'flex-start', alignItems: "center" }}>
                    <TouchableOpacity style={styles.firstPageBtn2} onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.firstPageLbl}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ImageBackground >
    );
}
