import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Tabs,
    Tab,
    ScrollableTab
} from 'native-base';
import {
    Actions
} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import TabNavigator from 'react-native-tab-navigator';

const {width, height} = Dimensions.get('window');

export default class index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'tab1'
        }
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={true} backgroundColor={"rgba(0,0,0,0)"} barStyle={"default"}/>

                <Header>
                    <Left>
                        <Button transparent
                                onPress={() => Actions.drawerOpen()}>
                            <Icon name={"ios-menu"} style={{color: '#fff', marginTop: 0.015 * height}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={styles.logo}>Defensor</Title>
                    </Body>
                    <Right/>
                </Header>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab1'}
                        title="地图"
                        renderIcon={() => <Icon name="globe" style={{color: '#929292'}}/>}
                        renderSelectedIcon={() => <Icon name="globe" style={{color: '#007aff'}}/>}
                        onPress={() => this.setState({selectedTab: 'tab1'})}>
                        <Tab1/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab2'}
                        title="雷达"
                        renderIcon={() => <Icon name="disc" style={{color: '#929292'}}/>}
                        renderSelectedIcon={() => <Icon name="disc" style={{color: '#007aff'}}/>}
                        onPress={() => this.setState({selectedTab: 'tab2'})}>
                        <Tab2/>
                    </TabNavigator.Item>
                </TabNavigator>
                <TouchableOpacity style={styles.actionTouchable} activeOpacity={0.8}>
                    <View style={styles.actionView}>
                        <Text style={{color: '#fff'}}>启动</Text>
                    </View>
                </TouchableOpacity>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    logo: {
        width: 0.3 * width,
        height: 0.04 * height,
        marginTop: 0.01 * height,
        fontSize: 0.03 * height,
        color: '#fff',
    },
    actionTouchable: {
        width: 0.18 * width,
        height: 0.18 * width,
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: width,
        elevation: 2,
    },
    actionView: {
        width: 0.15 * width,
        height: 0.15 * width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3F51B5',
        borderRadius: width
    }
});