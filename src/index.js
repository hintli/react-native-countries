import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Home from './screens/Home';

class App extends Component {
    render() {
        return(
            <View style={{flex : 1}}>
                <Home />
            </View>
        )
    }
}

export default App;