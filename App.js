import React, {PureComponent} from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import {Text} from 'native-base'
import * as Animatable from 'react-native-animatable';
import PositionListComponent from './PositionListComponent';
import chart from './Graph/Chart.js'
import MonthReport from './MonthReport.js'
import LandingHeader from './LandingHeader.js'
import Graph from './Graph.js'
import {
    clickChangeProductList
} from "./HomeActions"
// import {connect} from "react-redux";

const data = [
    {
        imageUrl: "https://eyesnears.co/rwa/uploads/chat_module/chat_image/21_chat_image-1538115474.png",
        title: "Whats New"
    },
    {
        imageUrl: "https://eyesnears.co/rwa/uploads/chat_module/chat_image/19_chat_image-1538116750.png",
        title: "IctrlBiz"
    },
    {
        imageUrl: "https://eyesnears.co/rwa/uploads/chat_module/chat_image/21_chat_image-1538115474.png",
        title: "Upcoming Events"
    },
    {
        imageUrl: "https://eyesnears.co/rwa/uploads/chat_module/chat_image/19_chat_image-1538116750.png",
        title: "Latest Achievemets"
    },
    {
        imageUrl: "https://eyesnears.co/rwa/uploads/chat_module/chat_image/21_chat_image-1538115474.png",
        title: "Noida News"
    },
    {
        imageUrl: "https://eyesnears.co/rwa/uploads/chat_module/chat_image/19_chat_image-1538116750.png",
        title: "Diwali Celebration"
    },
    {
        imageUrl: "https://eyesnears.co/rwa/uploads/chat_module/chat_image/21_chat_image-1538115474.png",
        title: "Parking"
    }

];

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }
    clickFlatList=(i)=>{
      console.log('the item is clicked',i)
    }
    clickChangeProductList = (item) => {
          console.log(item.title);
          this.props.clickChangeProductList(item.title)
      };

      render() {
        console.log(this.props.selected_product, "Ashwani");
        return (

            <View style={styles.container}>
            <LandingHeader/>
            <Graph/>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({item}) => {
                      //  console.log(this.props.selected_product === item.title,"Ashwani");
                        return (
                            <Animatable.View animation="slideInRight" duration={1500}
                                             style={[styles.inActive, this.props.selected_product === item.title ? styles.active : {}]}
                            >
                                <TouchableWithoutFeedback
                                    onPress={() => this.clickFlatList(item)}>
                                    <View style={{ flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'}}>
                                        <Text style={styles.nameTextStyle}>{item.title}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </Animatable.View>
                        );
                    }}
                    keyExtractor={(item, index) => index}
                />
                <PositionListComponent/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
paddingBottom: 12,
        marginLeft: 8,
      //  marginTop: 200,
        marginRight: 8,
        opacity: .8
    },
    inActive: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderColor: '#d9d9d9',
        margin : 8,
        borderRadius: 16,
        backgroundColor: '#d9d9d9'
    },
    active: {
        borderColor: '#FFFFFF',
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        backgroundColor: '#FFFFFF'
    },
});

export default App;
