import * as React from "react";
import { Image,View, Text, FlatList,  ScrollView} from "react-native";
import { v4 as uuid } from "uuid";
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles/Styles";

export default function ver({ route }) {
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
       
}
return (
    <View>

            <View style={styles.barraTopMain}>
                <Text style={styles.barraTopMainText}>Flight Finder</Text>
            </View>

            <ScrollView>

                <Text style={styles.mainTopTitulo}>Top Flights</Text>

                <View style={styles.mainTopViewProcura}>
                <View>
                        <Text style={styles.mainbaratolon}>{data.Places[1].CityName} - {data.Places[1].CountryName}</Text>
                        <Text style={styles.mainbaratolondAero}>{data.Places[0].IataCode} <Ionicons name="md-airplane" size={20} color={"black"} />{data.Places[1].IataCode}</Text>
                        <Text style={styles.mainbaratolondP}>a partir de <Text style={styles.mainbaratolondPe}>{data.Quotes[0].MinPrice}€</Text></Text>
                        <Text style={styles.mainbaratolondPe}>{data.Carriers[0].Name}</Text>
                    </View>
                   
                </View>

                <Text style={styles.mainTopTitulo}>Cheapest</Text>

                <View style={styles.mainTopView}>
                    <View>
                        <Text style={styles.mainbaratolon}>Londres - Reino Unido</Text>
                        <Text style={styles.mainbaratolondata}>01 ago 2021 - 09 ago 2021</Text>
                        <Text style={styles.mainbaratolondAero}>LIS <Ionicons name="md-airplane" size={20} color={"black"}/> LON </Text>
                        <Text style={styles.mainbaratolondP}>a partir de <Text style={styles.mainbaratolondPe}>19€</Text></Text>
                    </View>
                    <View>
                        <Text style={styles.mainbaratolon}>Bruxelas - Bélgica</Text>
                        <Text style={styles.mainbaratolondata}>27 jul 2021 - 28 jul 2021</Text>
                        <Text style={styles.mainbaratolondAero}>LIS <Ionicons name="md-airplane" size={20} color={"black"}/> BRU </Text>
                        <Text style={styles.mainbaratolondP}>a partir de <Text style={styles.mainbaratolondPe}>27€</Text></Text>
                    </View>
                    <View>
                        <Text style={styles.mainbaratolon}>Paris - França</Text>
                        <Text style={styles.mainbaratolondata}>30 jul 2021 - 17 ago 2021</Text>
                        <Text style={styles.mainbaratolondAero}>LIS <Ionicons name="md-airplane" size={20} color={"black"}/> PAR </Text>
                        <Text style={styles.mainbaratolondP}>a partir de <Text style={styles.mainbaratolondPe}>38€</Text></Text>
                    </View>
                
                </View>

                <View style={styles.mainView}></View>

            </ScrollView>
            <FlatList
        style={{ width: "100%", height: "auto" }}
        data={data.Quotes}
        renderItem={renderItem}
        keyExtractor={(item) => uuid()}
      >
      </FlatList>
            </View>
            );
}