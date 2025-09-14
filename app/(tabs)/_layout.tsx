import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: "#011936",
      },
      headerShown: false,
      headerShadowVisible: false,
      headerTintColor: '#FEF5EF',
      tabBarItemStyle: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8,
      },
      tabBarStyle: {
        backgroundColor: "#122a47",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginHorizontal: 40,
        marginBottom: 36,
        position: "absolute",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ffd33d",
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Maps"
        options={{
          title: 'Maps',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'map' : 'map-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Journey"
        options={{
          title: 'Journey',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'boat' : 'boat-outline'} color={color} size={24} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="Leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'bonfire' : 'bonfire-outline'} color={color} size={24} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'id-card' : 'id-card-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  )
}