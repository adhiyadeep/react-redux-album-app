import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import AlbumImageCard from '../components/AlbumImageCard'

function WishList() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <View style={{ top: 20 }}>
                <Text style={styles.pageTitle}>Wishlist</Text>
            </View>

             <View style={{ top: 40 }}>
               <AlbumImageCard/>
               <AlbumImageCard/>
               <AlbumImageCard/>
           
            </View> 

            {/* <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
                <Text style={styles.noItemText}>No Item's in wishlist</Text>
            </View> */}

        </View>
    </SafeAreaView>
    )
}

export default WishList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    }, pageTitle: {
        fontSize: 24,
        fontWeight: '700'
    },noItemText:{
        fontSize: 24,
        fontWeight: '700',
        textAlign:'center'
    }
})
