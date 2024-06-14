import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../utils/fonts'

const Custombutton = ({ title, onPress,customstyle,customTilestyle,startIcon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,{...customstyle}]}>
            <View style={{right:5}}>
            {startIcon}
            </View>
     
            <Text style={[styles.titleText,{...customTilestyle}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Custombutton

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection:'row',
        width: '100%',
        marginVertical: 4,
        justifyContent: 'center',
        backgroundColor: fonts.PRIMARY_COLOR
    },
    titleText: {
        fontSize: 19,
        fontFamily: fonts.MONTESERAT_SEMIBOLD,
        color: '#fff'
    }
})