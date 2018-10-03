import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions
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
import TabNavigator from '../../components/tabs/IndexTabNavigator';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const {width,height} = Dimensions.get('window');

export default class index extends React.Component {

    render(){
        return (
            <Container>
                <StatusBar translucent={true} backgroundColor={"rgba(0,0,0,0)"} barStyle={"default"}/>
                <Content>
                    <Header>
                        <Left style={{marginTop: 0.01 * height}}>
                            <Button transparent style={{justifyContent: 'center', alignItems: 'center'}}
                                    onPress={() => Actions.drawerOpen()}>
                                <Icon name={"ios-menu"}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.logo}>Defensor</Title>
                        </Body>
                        <Right/>
                    </Header>

                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    logo:{
        width: 0.3 * width,
        height: 0.04 * height,
        marginTop: 0.01 * height,
        fontSize: 0.03 * height,
        color: '#fff',
    },
});