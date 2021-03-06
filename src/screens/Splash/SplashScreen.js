import * as React from 'react';
import { View, Easing, Text, Animated } from 'react-native';
import StyleSheet from './SplashStyle';

let SplashScreen = ({ navigation }) => {

    let styleSheet = StyleSheet.getStyles({
        logoStyle: {
            spin: spin
        }
    });

    navigateAfterTimeout(navigation);

    return (
        <View style={styleSheet.mainContainer}>
            <View style={styleSheet.logoContainer}>
                <Animated.Image style={styleSheet.logoStyle} source={require('../../images/newSplash.png')} />
            </View>
        </View>
    );
}

let spinValue = new Animated.Value(0);

const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
});

function animateLogo() {
    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();
}

function navigateAfterTimeout(navigator) {
    setTimeout(
        function () {
            navigator.navigate('login');
        }
            .bind(this),
        5000
    );
}

// animateLogo();

export default SplashScreen;