import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import Line from './Line.js';
import Spinner from '../Spinner';


export default class Charts extends Component {

    props: {
        values: Array<number>,
        flag: false,
        strokeColor: String,
        fillColor: String
    };


    render() {
        const {
            values,
            flag,
            strokeColor,
            fillColor
        } = this.props;
        if (flag) {
            return (
                  //console.log("Chart class is call")
                <View style={styles.container}>
                    <Line values={values}/>
                </View>
            );
        }else{
           return <Spinner size="large"/>;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: Dimensions.get('window').width - 4,
        backgroundColor: '#ffffff',
    },
});
