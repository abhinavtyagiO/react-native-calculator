import React from 'react';
import { StyleSheet,View, Text, TouchableOpacity } from 'react-native';

export default class CalButton extends React.Component{

    static defaultProps = {
        onPress: function(){},
        title: "",
        color: "white",
        backgroundColor: "grey"
    }

    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={[
                styles.container, 
                {backgroundColor:this.props.backgroundColor},
                ]}>
                <Text style={[styles.text,{color: this.props.color}]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    container: {alignItems:"center",justifyContent:"center",width: 75,height: 75, borderRadius: 40,margin:7},
    text: {fontSize: 30}, 
});
