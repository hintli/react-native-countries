import React from 'react';
import {View,Text} from 'react-native';
import {headerStyles} from './styles'
import PropTypes from 'prop-types'

class Header extends React.Component {
    render() {
        return (
            <View style={headerStyles.container}>
                <Text style={headerStyles.subTitle}>Hangi Ülkeyi Merak Ediyorsunuz?</Text>
                <View style={headerStyles.line}/>
                <Text style={headerStyles.title}>Countries</Text>
            </View>
        )
    }
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

Header.defaultProps = {
    title : "deneme"
}


export default Header;