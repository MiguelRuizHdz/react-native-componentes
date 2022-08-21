import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const opacity  = useRef( new Animated.Value(0) ).current;
    const position = useRef( new Animated.Value(0) ).current;

    const fadeIn = () => {
        // Opacidad
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 800,
                useNativeDriver: true //acelerada por hardware
            }
        ).start( () => console.log('animación Terminó')); //para que empiece la animación

    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true //acelerada por hardware
            }
        ).start(); //para que empiece la animación
    }

    const startMovingPosition = ( initPosition: number = -100, duration: number = 300 ) => {

        position.setValue(initPosition);

        // Rebote
        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true, //acelerada por hardware
                // easing: Easing.bounce
            }
        ).start( ); //para que empiece la animación

    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}