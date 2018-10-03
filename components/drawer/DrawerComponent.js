import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native';
import {
    Container,
    Content
} from 'native-base';

const {width, height} = Dimensions.get("window");

export default class DrawerComponent extends React.Component{

    render(){
        return (
            <Container>
                <StatusBar translucent={true} backgroundColor={"rgba(0,0,0,0)"} barStyle={"default"}/>
                <Content>
                    <View style={styles.main}>
                        <Text>
                            Drawer
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    main:{
        height: 0.22 * height,
        flexDirection: 'row',
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 3, height: 3},
        backgroundColor: '#3F51B5',
    },
});