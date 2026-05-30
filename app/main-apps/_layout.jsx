import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { StatusBar } from 'react-native'

export default function TabLayout() {
  return (
    <>
        <StatusBar style="auto" barStyle={"dark-content"} hidden={false} />
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#49745e",
                tabBarInactiveTintColor: "gray",
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "white",
                    borderTopWidth: 2,
                    borderTopColor: "#3a5d4a",
                    height: 50,
                    paddingBottom: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600"
                }
            }}
        >
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name='home' size={size} color={color}/>
                 )
            }} />
            <Tabs.Screen name="explore" options={{
                title: "Explore",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name='search' size={size} color={color}/>
                 )
            }} />
            <Tabs.Screen name="settings" options={{
                title: "Settings",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name='cog' size={size} color={color}/>
                 )
            }} />
        </Tabs>
    </>
  )
}
