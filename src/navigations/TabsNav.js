import * as React from 'react';
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/appscreens/tabs/Home/Home';
import Search from '../screens/appscreens/tabs/Search/Search';
import Filter from '../screens/appscreens/tabs/Filter/Filter';
import Profile from '../screens/appscreens/tabs/Profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import { fonts } from '../utils/fonts';



const Tab = createBottomTabNavigator();

export default function TabsNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Filter') {
                        iconName = focused ? 'filter' : 'filter-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={25} color={color} />;
                },
                tabBarLabel: ({ focused, color }) => {
                    let label;
                    if (route.name === 'Home') {
                        label = 'Home';
                    } else if (route.name === 'Search') {
                        label = 'Search';
                    } else if (route.name === 'Filter') {
                        label = 'Filter';
                    } else if (route.name === 'Profile') {
                        label = 'Profile';
                    }

                    return (
                        <Text
                            style={{
                                color: focused ? fonts.PRIMARY_COLOR : '#BABDBF',
                                fontFamily: fonts.MONTESERAT_BOLD,
                                marginBottom: 16,
                                fontSize: 13
                            }}>
                            {label}
                        </Text>
                    );
                },
                tabBarActiveTintColor: fonts.PRIMARY_COLOR,
                tabBarInactiveTintColor: '#BABDBF',
                tabBarStyle: {
                    height: 65,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Filter" component={Filter} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}