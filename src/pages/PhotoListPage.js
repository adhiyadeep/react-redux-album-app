import React,{useEffect, useState} from 'react'
import { SafeAreaView, Text, StyleSheet, View, TextInput, FlatList } from 'react-native'
import AlbumImageCard from '../components/AlbumImageCard'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getImageList } from '../actions/images.actions'

function PhotoListPage(props) {
    
    const [value, setValue] = React.useState('');
    const  [data,setData] = useState(props.imageList.data);
    
    useEffect(() => {
        props.dispatch(getImageList('album/'+JSON.stringify(props.route.params.itemId )+'/photos?_start=0&_limit=20'));
    },[])


    const filterData = (value) =>{
        console.log(value);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* Header  */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Ionicons style={{ marginRight: 10 }} name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Photos</Text>
                </View>

                {/* Search Bar */}
                <View>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
                        onChangeText={value => setValue(value)}
                        placeholder={"Search by title"}
                        value={value} 
                        onChange={filterData(value)}
                        />
                </View>

                {/* Render Cards */}

                <View style={{ top: 20 }}>
               
                    <FlatList
                        data={props.imageList.data}
                        renderItem={({ item }) => <AlbumImageCard {...item}/>}
                        keyExtractor={(item, index) => index.toString()}
                    /> 
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    }, pageTitle: {
        fontSize: 24,
        fontWeight: '700'
    }
})

const mapStateToProps = state => ({
    imageList: state.albumReducer.getImageList
})
const mapDispatchToProps = dispatch => ({
    dispatch
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotoListPage)