import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component{
render(){
    return(
            <View style={{backgroundColor: '#292929', width: '100%', 
            height: 350, borderRadius: 15, margin: 15}}>
              <Text style={{paddingTop: 15 ,color: '#FFF', fontSize: 28, 
              textAlign: 'center'}}>Seja Bem-Vindo!</Text>
              <Button title='Sair' onPress={ this.props.fechar }/>
            </View>
    );
  }
}
