import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';

const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    }
]

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={ styles.title }>Opciones de Menú</Text>
            </View>
        )
    }

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8
                }}
            />
        );
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            {/* <Text>HomeScreen</Text>
            <Icon
                name="star-outline"
                size={ 50 }
                color="black"
            /> */}
            <FlatList
                // data a iterar 
                data={ menuItems }
                // Función para renderizar cada uno de los elementos
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } /> }
                // Generar una llave unica para cada uno de los elementos
                keyExtractor={ ( item ) => item.name }
                ListHeaderComponent={ renderListHeader }
                ItemSeparatorComponent={ itemSeparator }
            />
        </View>
    )
}
