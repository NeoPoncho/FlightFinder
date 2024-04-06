import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput,Image} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';


import styles from "./styles/Styles";
export default function Procurar({ navigation }) {

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
                            .then((json) => { console.log(json); navigation.navigate("Ver", { "data" : json }) })
                            .catch(err => {
                                console.error(err);
                            });

                            

                    }} >
                        <Ionicons name="search" style={{ padding: 20 }} size={34} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

       </View>
    );}