import React, {Component} from 'react';
import {Header, Left, Body, Right, Button, Title} from 'native-base';
import {Image, StyleSheet} from 'react-native';

export default class LandingHeader extends Component {

    render() {
       console.log('Landing Header');
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Image source={require('./Images/test_pb.png')}
                               style={styles.leftLogo}/>
                    </Button>
                    </Left>
                <Body>
                <Title>Demo App</Title>
                </Body>
                <Right>
                    {/*<Button transparent>*/}
                    {/*<Image source={require('../assets/images/notification_unselect.png')}*/}
                    {/*style={styles.leftLogo}/>*/}
                    {/*</Button>*/}
                </Right>
            </Header>
        );
    }
}
const styles = StyleSheet.create({
    leftLogo: {
        height: 22,
        width: 22
    },
    rightLogo: {
        height: 18,
        width: 18
    }
});
