import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, ScrollView, View, TextInput, TouchableOpacity,FlatList} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { v4 as uuid } from "uuid";


import styles from "./styles/Styles";

function Home() {

    return (
        <View style={styles.container}>

            <StatusBar style="light" />

            <View style={styles.barraTopMain}>
                <Text style={styles.barraTopMainText}>Flight Finder</Text>
            </View>

            <ScrollView>

                <Text style={styles.mainTopTitulo}>Top Flights</Text>

                <View style={styles.mainTopViewProcura}>
                <View>
                        {/* <Text style={styles.mainbaratolon}>Londres-Reino Unido</Text>*/}
                        <Text style={styles.mainbaratolondata}>01 ago 2021 - 09 ago 2021</Text>
                        <Text style={styles.mainbaratolondAero}>jj<Ionicons name="md-airplane" size={20} color={"black"}/> lll </Text>
                        <Text style={styles.mainbaratolondP}>a partir de <Text style={styles.mainbaratolondPe}>19€</Text></Text>
                    </View>
                   
                </View>

                <Text style={styles.mainTopTitulo}>Cheapest</Text>

                <View style={styles.mainTopView}>
                    <View>
                        <Text style={styles.mainbaratolon}>Londres-Reino Unido</Text>
                        <Text style={styles.mainbaratolondata}>01 ago 2021 - 09 ago 2021</Text>
                        <Text style={styles.mainbaratolondAero}>LIS <Ionicons name="md-airplane" size={20} color={"black"}/> LON </Text>
                        <Text style={styles.mainbaratolondP}>a partir de <Text style={styles.mainbaratolondPe}>19€</Text></Text>
                    </View>
                    <View>
                        <Text style={styles.mainbaratolon}>Bruxelas-Bélgica</Text>
                        <Text style={styles.mainbaratolondata}>27 jul 2021 - 28 jul 2021</Text>
                        <Text style={styles.mainbaratolondAero}>LIS <Ionicons name="md-airplane" size={20} color={"black"}/> BRU </Text>
                        <Text style={styles.mainbaratolondP}>a partir de <Text style={styles.mainbaratolondPe}>27€</Text></Text>
                    </View>
                    <View>
                        <Text style={styles.mainbaratolon}>Paris-França</Text>
                        <Text style={styles.mainbaratolondata}>30 jul 2021 - 17 ago 2021</Text>
                        <Text style={styles.mainbaratolondAero}>LIS <Ionicons name="md-airplane" size={20} color={"black"}/> PAR </Text>
                        <Text style={styles.mainbaratolondP}>a partir de <Text style={styles.mainbaratolondPe}>38€</Text></Text>
                    </View>
                
                </View>

                <View style={styles.mainView}></View>

            </ScrollView>
        </View>
    );
}

function Search({ navigation }) {

    const [partida, setPartida] = useState("")
    const [chegada, setChegada] = useState("")
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (startDate) => {
        setStartDate(startDate.toISOString().split("T")[0]);
        //console.warn("Data Partida: ", startDate);
        hideDatePicker();
    };


    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);

    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };

    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };

    const handleConfirm2 = (endDate) => {
        setEndDate(endDate.toISOString().split("T")[0]);
        //console.warn("Data Chegada: ", endDate);
        hideDatePicker2();
    };


    return (

        <View>
            <StatusBar style="light" />
            <View style={styles.barraTopMain}>
                <Text style={styles.barraTopMainText}>Search</Text>
            </View>

            <View style={{ padding: 25 }}>
            </View>

            <View style={styles.container, { alignContent: 'center', }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 30, color: "#00358a", paddingHorizontal: 15 }} >De:</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', borderRadius: 10, borderWidth: 0.5, borderColor: '#00358a', width: 150, height: "auto", paddingVertical: 5, backgroundColor: "#ebebeb" }}>
                            <TextInput style={{ fontSize: 20, padding: 5 }} value={partida} onChangeText={(text) => setPartida(text)} placeholder="Origem"></TextInput>
                        </TouchableOpacity>
                    </View>

                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 30, color: "#00358a", paddingHorizontal: 5 }} >Para:</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', borderRadius: 10, borderWidth: 0.5, borderColor: '#00358a', width: 150, height: "auto", paddingVertical: 5, backgroundColor: "#ebebeb" }}>
                            <TextInput style={{ fontSize: 20, padding: 5 }} value={chegada} onChangeText={(text) => setChegada(text)} placeholder="Destino"></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={{ padding: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 0.5, borderColor: '#00358a', width: 150, height: 75, padding: 5, backgroundColor: "#ebebeb" }} onPress={showDatePicker}>
                            <Ionicons name="calendar" size={24} color="black" />
                            <Text style={{ fontSize: 20, paddingLeft: 5, fontWeight:'bold' }}>{startDate}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ padding: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 0.5, borderColor: '#00358a', width: 150, height: 75, padding: 5, backgroundColor: "#ebebeb" }} onPress={showDatePicker2}>
                            <Ionicons name="calendar" size={24} color="black" />
                            <Text style={{ fontSize: 20, paddingLeft: 5, fontWeight:'bold' }}>{endDate}</Text>
                        </TouchableOpacity>
                    </View>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible2}
                        mode="date"
                        onConfirm={handleConfirm2}
                        onCancel={hideDatePicker2}
                    />
                </View>


                <View style={{ padding: 10, alignSelf: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: "#00358a", justifyContent: "center", alignItems: "center", marginTop: "10%", width:150, borderRadius: 25, shadowColor: "black", shadowOpacity: 0.50, shadowRadius: 6.65, }} onPress={() => {

                        fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/PT/EUR/pt-PT/${partida}/${chegada}/${startDate}?inboundpartialdate=${endDate}`, {
                            "method": "GET",
                            "headers": {
                                "x-rapidapi-key": "2c919a96d7msh4b3c8f542ec9108p1b1e5fjsn5c0f938ee222",
                                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                            }
                        })
                            .then(response => {
                                {
                                    return response.json();
                                }
                            })
                            .then((json) => { console.log(json); navigation.navigate("Home", { "data" : json }) })
                            .catch(err => {
                                console.error(err);
                            });

                            

                    }} >
                        <Ionicons name="search" style={{ padding: 20 }} size={34} color="white" />
                    </TouchableOpacity>
                </View>
            </View>


        <FlatList
            style={{ width: "100%", height: "auto" }}
            data={data.Quotes}
            renderItem={renderItem}
            keyExtractor={(item) => uuid()}>
        </FlatList>

        </View>
    );
}
const Tab = createBottomTabNavigator();

export default function main({ route }) {
    const [data, setData] = React.useState(typeof route.params != "undefined" ? route.params.data : [])

    useFocusEffect(
      React.useCallback(() => {
        setData(typeof route.params != "undefined" ? route.params.data : [])
      }, [route])
    );

    const renderItem = ({ item }) => {
        let company = "";
        data.Carriers.forEach(carrier => {
          if (carrier.CarrierId == item.OutboundLeg.CarrierIds[0]) {
            console.log(carrier.Name)
            company = carrier.Name;
          }
        })
    

    return (

        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#00358a',
                style: { height: 65, borderRadius: 25, position: "absolute", bottom: "5%", marginRight: "10%", marginLeft: "10%" }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    activeTintColor: '#00358a',
                    inactiveBackgroundColor: 'grey',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-airplane" size={32} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="search" size={32} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
  }}
