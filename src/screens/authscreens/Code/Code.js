import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomCard from '../../../components/CustomCard'
import { images } from '../../../utils/constants'
import CustomHeader from '../../../components/CustomHeader'

const Code = ({navigation}) => {
    const [state, setState] = useState({
        value:'',
    })


    const _handlePress = (res) => {
        if (res == "verify") {
          navigation.navigate("Complete")
        }

    }

    return (
        <View style={styles.container}>
            <CustomHeader navigation={navigation}/>
            <CustomCard
                imageSource={images.opticon}
                onPress={(type) => _handlePress(type)}
                title="Verification"
                description={`Enter a 4 digit number that \n was sent to + (1) 555 678 2810`}
                codeScreen={true}
                card={true}
                codeState={state.value}
                setValue={(value) => setState({ ...state, value })}

            />
    
        </View>
    )
}

export default Code

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center'
    },
})