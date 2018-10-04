import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Picker,
    Platform,
    Alert,
    AlertIOS,
    ToastAndroid,
    NativeModules,
} from 'react-native';
import { MapView } from 'react-native-amap3d';
import Geolocation from 'Geolocation';

export default class Tab1 extends React.Component{

    constructor(props){
        super(props);

        this.state={
            coordinate: {
                latitude: 38.906901,
                longitude: 116.397972,
            }
        }
    }

    componentWillMount(){
        this.getPosition();
    }

    render(){
        return (
            <View style={{flex:1}}>
                <MapView
                    mapType={"navigation"}
                    style={StyleSheet.absoluteFill}
                    locationEnabled
                    locationInterval={10000}
                    distanceFilter={10}
                    onLocation={({nativeEvent}) =>
                        console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
                    showsCompass={true} // 是否显示指南针
                    showsLabels={true} //是否显示文本标签
                    showsZoomControls={true} //是否显示放大缩小按钮
                    showsLocationButton={true} // 是否显示定位按钮
                    showsTraffic={true} //是否显示路况
                    showsScale={true}
                    coordinate={this.state.coordinate}
                />
            </View>
        )
    }

    // noinspection JSAnnotator
    getPosition = () => {
        Geolocation.getCurrentPosition(
            location => {
                //可以获取到的数据
                let result = "速度：" + location.coords.speed +
                    "\n经度：" + location.coords.longitude +
                    "\n纬度：" + location.coords.latitude +
                    "\n准确度：" + location.coords.accuracy +
                    "\n行进方向：" + location.coords.heading +
                    "\n海拔：" + location.coords.altitude +
                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                    "\n时间戳：" + location.timestamp;
               this.setState({
                   coordinate:{
                       latitude: location.coords.latitude,
                       longitude: location.coords.longitude,
                   }
               })
            },
            error => {
                if (Platform.OS === "android") {
                    Alert.alert("定位失败", "GPS功能未打开", [
                        {
                            text: '打开',
                            onPress: () => NativeModules.NewGPSModule.startActivityFromJS("com.myproject.modules.OpenGPSModule", "setting", "打开GPS")
                        },
                        {
                            text: '网络定位',
                            onPress: () => NativeModules.NewGPSModule.getLocalPositionByNetWork("com.myproject.modules.OpenGPSModule",
                                (result) => {
                                    console.log("定位结果:" + result);
                                })
                        },
                        {text: '取消', onPress: () => ToastAndroid.show('取消定位..', ToastAndroid.SHORT)}
                    ])
                } else if (Platform.OS === "ios") {
                    AlertIOS.alert("定位失败", "GPS功能未打开", [
                        {
                            text: '打开',
                            onPress: () => AlertIOS.alert("TODO", "IOS连接")
                        },
                        {text: '取消', onPress: () => ToastAndroid.show('取消定位..', ToastAndroid.SHORT)}
                    ])
                }
            }
        )
    }
}