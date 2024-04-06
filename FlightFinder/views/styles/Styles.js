import { Platform, StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({

    //Log In
    container: {
        resizeMode: "center"
    },
    flex1: {
        flex: 3
    },
    box: {
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: Dimensions.get("screen").width > 700 ? 150 : 20
    },
    //////1stPage\\\\\\
    IconFirstPage: {
        alignSelf: "center",
        position: "absolute",
        top: -200,
    },
    TituloFirstPage: {
        color: '#00358a',
        fontSize: 30,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        paddingTop: 20,
        paddingBottom: 100
    },
    firstPageBtn1: {
        position: "absolute",
        top: 20,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        height: "auto",
        padding: 15,
        backgroundColor: "#00358a"
    },
    firstPageBtn2: {
        position: "absolute",
        top: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        height: "auto",
        padding: 15,
        backgroundColor: "#6097f0"
    },
    firstPageLbl: {
        fontSize: 20,
        fontWeight: Platform.OS === "ios" ? "700" : "bold",
        color: "#ffffff"
    },
    //////Login e Criar registo\\\\\\
    TituloLogin: {
        color: '#00358a',
        fontSize: 30,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        paddingTop: 20,
    },
    LoginEmail: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: "#0c7e7d",
        paddingTop: 40,
    },
    LogInTextBtn: {
        borderRadius: 50,
        justifyContent: "center",
        width: "85%",
        height: "auto",
        paddingVertical: 10,
        paddingLeft: 25,
        backgroundColor: "rgba(239,239,239,255)"
    },
    LoginBtn1: {
        position: "absolute",
        top: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        height: "auto",
        padding: 15,
        backgroundColor: "#00358a"
    },
    LoginFPassword: {
        position: "absolute",
        top: 380,
        alignSelf: "center",
    },
    LoginFPasswordText: {
        fontSize: 15,
        color: "#888888"
    },
    //////Main\\\\\\
    barraTopMain: {
        backgroundColor: '#00358a',
        //backgroundColor: "#6097f0",
        height: 90,
        borderBottomEndRadius:25,
        borderBottomStartRadius:25
    },
    barraTopMainText: {
        position: "absolute",
        left: 40,
        top: 40,
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    },
    mainTopTitulo: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        fontSize: 25,
        fontWeight:'bold',
        color:'#00358a'
    },
    mainTopView: {
        backgroundColor: "white",
        alignSelf: "center",
        height: 400,
        width: '90%',
        borderRadius: 15
    },
    mainTopViewProcura: {
        backgroundColor: "white",
        alignSelf: "center",
        height: 150,
        width: '90%',
        borderRadius: 15
    },
    mainView: {
        backgroundColor: "transparent",
        padding: 100,
    },
    //cheapest\\
    mainbaratolon: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 28,
        fontWeight:'bold',
        color:'#00358a'
    },
    mainbaratolondata: {
        paddingTop:5,
        paddingLeft: 10,
        fontSize: 20,
        fontWeight:'bold',
        color:'#000000'
    },
    mainbaratolondAero: {
        paddingTop: 2,
        paddingLeft: 10,
        fontSize: 25,
        fontWeight:'bold',
        color:'#000000'
    },
    mainbaratolondP: {
        paddingTop: 2,
        paddingLeft: 10,
        fontSize: 20,
        color:'#828282'
       
    },
    mainbaratolondPe: {
        paddingTop: 2,
        paddingLeft: 10,
        fontSize: 25,
        fontWeight:'bold',
        color:'#000000'
    },
});