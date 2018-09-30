import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {Content, Card, CardItem, Text, Right} from 'native-base';
//import {convertIndianCurrency} from "./Utils/CommonUtils";
import * as Animatable from 'react-native-animatable';

export class HomePositionCard extends Component {

    props: {
        name: string,
        quantity: number,
        pnl: number
    };

    static defaultProps = {
        name: 'Maruthi',
        quantity: 2,
        pnl: 222222
    };

    render() {
        return (
            <Animatable.View animation="slideInRight" duration={1500} style={styles.containerStyle}>
                <Card style={{height: 70}}>
                    <CardItem>
                        <View style={styles.columnRowStyle}>
                            <View>
                                <Text style={styles.nameTextStyle}>{this.props.name}({this.props.quantity})</Text>
                            </View>
                            <View>
                            </View>
                            <View>
                                <Text style={styles.textNormalStyle}>{this.props.pnl}</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 10,
        marginRight: 10,
    },
    nameStyle: {
        marginTop: 10,
    },
    nameTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    pnlTextStyle: {
        fontSize: 15,
    },
    columnRowStyle: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

 export default HomePositionCard;
