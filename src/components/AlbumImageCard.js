import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AlbumImageCard(props) {
    
    const [data, setData] = useState(props);

    return (
        <>
            <View style={styles.cardContainer}>
                <View>
                    <View style={{ alignContent: 'flex-end' }}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: data.url
                            }} />
                        <Ionicons onPress={() => updateIsFav(data,setData)} style={{ position: 'absolute', left: '90%', top: 10, zIndex: 1, }} name="heart" size={24} color={data.isFav == true ? "orange" : "white"} />
                    </View>

                    <Text style={styles.contentText} numberOfLines={1} ellipsizeMode='tail'>{data.title}</Text>
                </View>
            </View>
        </>
    )
}

const updateIsFav = (data,setData) => {
    const updateisFav = data.isFav == true ? data.isFav = false :data.isFav = true
    setData({...data},data.isFav = updateisFav)
}
const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 5,
        height: 200,
        width: '100%',
    }, contentText: {
        fontWeight: '700',
        fontSize: 14,
        marginLeft: 15,
    }, image: {
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})
