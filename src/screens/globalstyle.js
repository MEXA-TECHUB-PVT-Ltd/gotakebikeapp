import React from "react"
import { StyleSheet } from "react-native"
import { fonts } from "../utils/fonts"
export const globalStyel = StyleSheet.create({
    globalcontainer: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor:'#fff',
        justifyContent: 'center'
    },
    tabsContainer:{
        flex:1,
        backgroundColor:'#fff'
    },
    globalTxt:{
        fontSize:15,
        color:'#000',
        fontFamily:fonts.GOTHAM_BOLD
    },
    contentContainer: {
        flex: 1,
        paddingTop: 15,
    },
})