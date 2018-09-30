import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
} from 'react-native';
import {
    Divider
} from 'react-native-elements'
import HomePositionsCard from "./HomePositionCard";

const screen = Dimensions.get('window');
const data = [
    {
        title: 'Complain',
        isDivider: false
    },
    {
        title: 'Request',
        isDivider: true
    },
    {
        title: 'Feedback',
        isDivider: true
    },
    {
        title: 'Report',
        isDivider: true
    }
];


class PositionListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
            positions: 1,
        };
    }

    renderDivider = (rowData) => {
        if (rowData.isDivider) {
            return (
                <Divider style={styles.dividerStyle}/>
            )
        }
    };

    renderArrowIcon = (rowData) => {
        if (rowData.title === 'Futures') {

        }
    };

    renderPositionList = () => {
        return (
            <View>
                <HomePositionsCard name={'Ganguly'} quantity={2} pnl={8896940211}/>
                <HomePositionsCard name={'Sachin'} quantity={1} pnl={8896940211}/>
                <HomePositionsCard name={'Sehwag'} quantity={3} pnl={8896940211}/>
            </View>
        )
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <FlatList
                        horizontal
                        data={this.state.data}
                        renderItem={({item: rowData}) => {
                            return (
                                <View style={styles.childContainer}>
                                    {this.renderDivider(rowData)}
                                    <Text style={styles.textStyle}>{rowData.title}</Text>
                                </View>
                            );
                        }}
                        keyExtractor={(item, index) => index}/>
                </View>
                {this.renderPositionList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
        container: {
            height: 30,
            marginTop: 10,
        },
        childContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: screen.width / 4,
            height: 50
        },
        textStyle: {
            flex: 1,
            alignItems: 'center',
            marginLeft: screen.width / 15,
            justifyContent: 'center',
        },
        dividerStyle: {
            width: 1,
            height: 20,
            backgroundColor: '#d0d0d0',
        },
    }
);
export default PositionListComponent;
