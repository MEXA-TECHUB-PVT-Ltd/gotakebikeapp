import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import { globalStyel } from '../../globalstyle'
import CustomHeader from '../../../components/CustomHeader'

const Manualveri = ({navigation}) => {
    const _handlePress = (result) => {
        if(result == "camera"){
            navigation.navigate("TakeSelfie")
        }
        console.log("Check Result",result)

    }
    return (
        <View style={globalStyel.globalcontainer}>
            <CustomHeader navigation={navigation}/>
            <CustomCard
                imageSource={images.identify}
                onPress={(type) => _handlePress(type)}
                title="Manual Verification"
                description={`We Need to verify your identity \n (Required)`}
                manual={true}
                card={true}
            />
        </View>
    )
}

export default Manualveri

const styles = StyleSheet.create({})