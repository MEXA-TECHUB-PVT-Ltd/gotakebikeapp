import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import { globalStyel } from '../../globalstyle'
import CustomHeader from '../../../components/CustomHeader'

const Complete = ({ navigation }) => {
    const [state, setState] = useState({
        value: '',
    })


    const _handlePress = (res) => {
        if (res == "complete") {
            navigation.navigate("Idenitity")
        }

    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
            <View style={globalStyel.globalcontainer}>
            <CustomHeader navigation={navigation}/>
                <CustomCard
                    imageSource={images.user}
                    onPress={(type) => _handlePress(type)}
                    title="Complete Profile"
                    description={`Please let us know \n more About your self`}
                    completeProfile={true}
                    card={true}

                />



            </View>
        </ScrollView>
    )
}

export default Complete
