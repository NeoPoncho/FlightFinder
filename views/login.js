import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import styles from "./styles/Styles";
export default function login({ navigation }) {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={[styles.container, styles.flex1]} blurRadius={1}>
            
            <StatusBar style="dark" />

            <View style={styles.flex1}>
            </View>

            <View style={[styles.box, { flex: 5 }]}>
                <View style={styles.IconFirstPage} >
                    <MaterialCommunityIcons name="shield-airplane-outline" size={150} color="#00358a" />
                </View>

                <View style={{ justifyContent: 'flex-start', alignItems: "center" }}>
                    <Text style={styles.TituloLogin}>Login</Text>
                </View>


                <View style={styles.LoginEmail}>
                    <TouchableOpacity style={styles.LogInTextBtn}>
                        <TextInput placeholder="Email"></TextInput>
                    </TouchableOpacity>
                </View>

                <View style={styles.LoginEmail}>
                    <TouchableOpacity style={styles.LogInTextBtn}>
                        <TextInput placeholder="Password" secureTextEntry></TextInput>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'flex-start', alignItems: "center" }}>
                    <TouchableOpacity style={styles.LoginBtn1} onPress={() => navigation.navigate("Procurar")}>
                        <Text style={styles.firstPageLbl}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.LoginFPassword}>
                    <TouchableOpacity>
                        <Text style={styles.LoginFPasswordText}>Forgotten Password?</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </ImageBackground >
    );
}
