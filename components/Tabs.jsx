//Iconografia
import Icon from 'react-native-vector-icons/MaterialIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MasVistos } from './pantallas/MasVistos';
import { Nuevos } from './pantallas/Nuevos';
import { Settings } from './pantallas/Settings';
import { Camara } from './pantallas/Camara';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>{
            let nombreIcono

            switch (route.name) {
                case 'MasVistos':
                    nombreIcono = focused ? "favorite" : "favorite-outline"
                    break;

                case 'Nuevos':
                    nombreIcono = focused ? "star" : "star-border"
                    break;
                
                case 'Camara':
                    nombreIcono = focused ? "camera-alt" : "camera-enhance"
                    break;
            
                default:
                    nombreIcono = focused ? "settings" : "settings-applications"
                    break;
            }
            return <Icon name={nombreIcono} size={size} color={color} />
        }
    })}>
                <Tab.Screen name="MasVistos" component={MasVistos} />
                <Tab.Screen name="Nuevos" component={Nuevos} />
                <Tab.Screen name="Camara" component={Camara} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
}
