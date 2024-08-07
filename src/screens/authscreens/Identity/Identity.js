import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import CustomHeader from '../../../components/CustomHeader'
import { globalStyel } from '../../globalstyle'

const Identity = ({ navigation }) => {
    const [state, setState] = useState({
        checkVerificationType: ""
    })

    const _handlePress = (responce) => {
        if (responce == "singpass") {
            Alert.alert("Payment Sdk Will be Integrated")
        } else if (responce == "manual") {
            navigation.navigate("ManualVerification")
        }


    }
    return (
        <View style={globalStyel.globalcontainer}>
            <CustomHeader navigation={navigation} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <CustomCard
                    imageSource={images.identify}
                    onPress={(type) => _handlePress(type)}
                    title="Identity"
                    description={`We need to verify your identity \n (Required)`}
                    identity={true}
                    card={true}
                />
            </ScrollView>

        </View>
    )
}

export default Identity

