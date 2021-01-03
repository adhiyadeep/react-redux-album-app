import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux'
import Routes from './components/Routes'

export class Main extends Component {


    render() {
        return (
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        )
    }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, null)(Main)
