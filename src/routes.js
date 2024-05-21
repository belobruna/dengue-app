import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Denuncias from './Screens/Denuncias';
import Perfil from './Screens/Perfil';
import Cuidados from './Screens/Cuidados';
import TEMAS from './estilos/temas';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#4B9AE9',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 80,
                },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    let label;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            label = 'Home';
                            break;
                        case 'Denuncias':
                            iconName = focused ? 'megaphone' : 'megaphone-outline';
                            label = 'Denúncias';
                            break;
                        case 'Perfil':
                            iconName = focused ? 'person' : 'person-outline';
                            label = 'Perfil';
                            break;
                        case 'Cuidados':
                            iconName = focused ? 'heart' : 'heart-outline';
                            label = 'Cuidados';
                            break;
                        default:
                            iconName = 'help';
                            label = route.name;
                    }
                    return (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: focused ? '#308DE9' : 'transparent',
                            borderRadius: 15,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            position: 'relative',
                        }}>
                            
                            <Ionicons 
                                name={iconName} 
                                size={32} 
                                color={focused ? '#FF0000' : '#FFFFFF'} 
                            />
                            <Text style={{ color: focused ? '#FF0000' : '#FFFFFF', paddingTop: 3 }}>
                                {label}
                            </Text>
                        </View>
                    );
                },
                tabBarItemStyle: {
                    backgroundColor: '#4B9AE9',
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Tab.Screen name="Cuidados" component={Cuidados} options={{headerShown: false}} />
            <Tab.Screen name="Denuncias" component={Denuncias} options={{headerShown: false}} />
            <Tab.Screen name="Perfil" component={Perfil} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}

export default Routes;