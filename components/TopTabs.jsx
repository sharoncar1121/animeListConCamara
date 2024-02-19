import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MasVistos } from './pantallas/MasVistos';
import { Nuevos } from './pantallas/Nuevos';
import { Settings } from './pantallas/Settings';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return <Tab.Navigator style={{marginTop: 40}} >
                <Tab.Screen name="Mas Vistos" component={MasVistos} />
                <Tab.Screen name="Nuevos" component={Nuevos} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
}
