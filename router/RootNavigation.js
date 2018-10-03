import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    Alert,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    NativeModules,
    BackHandler,
    DeviceEventEmitter,
    NetInfo,
} from 'react-native';
import {
    Router,
    Scene,
    Modal,
    Drawer,
    Stack,
    Actions,
    Tabs
} from 'react-native-router-flux';
import {
    Icon
} from 'native-base';
import {
    Provider
} from 'react-redux';
import Toast from "react-native-root-toast";
import configureStore from '../stores/redux/index';
import {inject} from "mobx-react";
import {observer} from "mobx-react/native";
import {observable, computed, action} from 'mobx';
import {StackNavigator} from 'react-navigation';
import index from '../components/index/index';
import DrawerComponent from "../components/drawer/DrawerComponent";

0

const store = configureStore();
const isIOS = Platform.OS === "ios";
const getSceneStyle = () => ({
    backgroundColor: '#efeff4',
    shadowOpacity: 1,
    shadowRadius: 3,
});
const {width, height} = Dimensions.get("window");

export default class RootNavigation extends React.Component {

    // noinspection JSAnnotator
    lastBackPressed: number;

    render(){
        const MenuIcon = (
            <Icon style={{color: "#666"}} name={"menu"}/>
        );
        return (
            <Provider store={store}>
                <Router getSceneStyle={getSceneStyle} backAndroidHandler={() => this.onBackAndroid()}>
                    <Modal>
                        <Stack key="root" hideNavBar>
                            <Drawer hideNavBar={true}
                                    key="drawer"
                                    contentComponent={DrawerComponent}
                                    drawerWidth={0.82 * width}>
                                <Stack
                                    hideNavBar
                                    key="drawerStack"
                                    titleStyle={{alignSelf: 'center'}}>
                                    <Scene
                                        hideNavBar={true}
                                        key="index"
                                        title="index"
                                        component={index}
                                    />
                                </Stack>
                            </Drawer>

                        </Stack>
                    </Modal>
                </Router>
            </Provider>
        )
    }

    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            // BackHandler.exitApp();//退出整个应用
            if(!isIOS){
                // NativeModules.userController.exitApp();
            }else {
                BackHandler.exitApp();
            }
            return true;
        } else {
            // Actions.pop();
        }

        this.lastBackPressed = Date.now();
        Toast.show('再次点击退出应用', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });
        return true;
    }
}