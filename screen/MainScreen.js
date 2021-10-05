require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.calc.calculator.js");

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CalButton, Display } from './../components';


class MainScreen extends React.Component {

    constructor(props){
        super(props);

        this.state={
            display:"0",
        };

        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
    }

    onNumberPress=(number) => {
        this.calc.addDigit(number);
        this.setState({display: this.calc.getMainDisplay() });
    }

    onPressClear=()=>{
        this.calc.clear();
        this.setState({display: this.calc.getMainDisplay() });
    }
    onPlusMinus=()=>{
        this.calc.negate();
        this.setState({display: this.calc.getMainDisplay() });
    }
    onBinaryOperatorPress=(operator) =>{
        this.calc.addBinaryOperator(operator);
        this.setState({display: this.calc.getMainDisplay() });
    }
    onUnaryOperatorPress=(operator)=>{
        this.calc.addUnaryOperator(operator);
        this.setState({display: this.calc.getMainDisplay() });
    }
    onEqualPress=()=>{
        this.calc.equalsPressed();
        this.setState({display: this.calc.getMainDisplay() });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.displayStyle}>
                    <Display display={this.state.display}/> 
                </View>

                <View style={{paddingHorizontal:10}}>

                    <View style={styles.buttonRow}>
                        <CalButton onPress={this.onPressClear} title="C" color="white" backgroundColor="#383736"/>
                        <CalButton title="()" color="#189e33" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onUnaryOperatorPress(this.oc.PercentOperator)}} title="%" color="#189e33" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onBinaryOperatorPress(this.oc.DivisionOperator)}} title="/" color="#189e33" backgroundColor="#383736"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalButton onPress={()=> {this.onNumberPress("7")}} title="7" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onNumberPress("8")}} title="8" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onNumberPress("9")}} title="9" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onBinaryOperatorPress(this.oc.MultiplicationOperator)}} title="X" color="#189e33" backgroundColor="#383736"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalButton onPress={()=> {this.onNumberPress("4")}} title="4" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onNumberPress("5")}} title="5" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onNumberPress("6")}} title="6" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onBinaryOperatorPress(this.oc.SubtractionOperator)}} title="-" color="#189e33" backgroundColor="#383736"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalButton onPress={()=> {this.onNumberPress("1")}} title="1" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onNumberPress("2")}} title="2" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onNumberPress("3")}} title="3" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onBinaryOperatorPress(this.oc.AdditionOperator)}} title="+" color="#189e33" backgroundColor="#383736"/>
                    </View>

                    <View style={styles.buttonRow}>
                        <CalButton onPress={this.onPlusMinus} title="+/-" color="white" backgroundColor="#383736"/>
                        <CalButton onPress={()=> {this.onNumberPress("0")}} title="0" color="white" backgroundColor="#383736"/>
                        <CalButton title="." color="white" backgroundColor="#383736"/>
                        <CalButton onPress={this.onEqualPress} title="=" color="white" backgroundColor="#189e33"/>
                    </View>
                </View>
                
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{flex:1,backgroundColor:"black",paddingVertical: 30},
    displayStyle:{flex:1,justifyContent: "flex-end"},
    buttonRow:{flexDirection:"row",justifyContent:"space-between"},
})

export default MainScreen;