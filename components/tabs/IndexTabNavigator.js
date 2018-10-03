import React from 'react';
import {
    Platform,
    Image,
    View,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import {TabNavigator, TabBarBottom, TabBarTop} from 'react-navigation';
import Tab1 from '../../components/index/Tab1';
import Tab2 from '../../components/index/Tab2';

import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get("window");

export default TabNavigator(
    {
        "tab1": {
            screen: Tab1,
            navigationOptions: {
                tabBarLabel: 'Tab1',
            }
        },
        "tab2": {
            screen: Tab2,
            navigationOptions: {
                tabBarLabel: 'Tab2',
            }
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        lazy: true,
        swipeEnabled: false,
        tabBarOptions:
            {
                scrollEnabled: true,
                style:
                    {
                        height: height / width > 1.8 ? 0.06 * height : 0.07 * height,
                        backgroundColor: '#ffffff',
                        padding: 0,
                    }
                ,
                tabStyle: {
                    width: 0.5 * width,
                    padding: 0,
                }
                ,
                activeTintColor: '#e6423c', //选中字体颜色
                inactiveTintColor: '#c1c1c1',   //未选中字体颜色
                indicatorStyle:
                    {    //指向器颜色
                        backgroundColor: '#e6423c',
                        height: 3,
                    }
                ,
                pressColor: '#e6423c'
            }
    }
);