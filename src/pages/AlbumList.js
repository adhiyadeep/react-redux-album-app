import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';
import { getAlbumList } from '../actions/albums.actions'

function AlbumList(props) {
    useEffect(() => {
        props.getAlbumList("albums?_start=0&_limit=20")
    }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginLeft: 20, top: 40 }}>
                <Text style={styles.pageTitle}>Albums</Text>
            </View>

          <View style={styles.container}>
                <FlatList
                    data={props.imageList.data}
                    renderItem={({ item }) => <Item item={item} props={props} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View> 
           
        </SafeAreaView>
    )
}

function Item({ item, props }) {
    return (

        <View style={{ top: 40 }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('PhotoListPage', { itemId: item.id })} style={styles.cardContainer}>
                <View>
                    <Text style={styles.contentText}>{item.id}</Text>
                    <Text numberOfLines={2} style={styles.contentText}>{item.title}</Text>
                </View>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        marginTop: 10
    }, pageTitle: {
        fontSize: 24,
        fontWeight: '700'
    }, cardContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 5,
        height: 100,
        width: '100%',
    }, contentText: {
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15
    }
})


const mapStateToProps = state => ({
    imageList: state.albumReducer.getAlbumList
})

export default connect(
    mapStateToProps,
    { getAlbumList }
)(AlbumList)