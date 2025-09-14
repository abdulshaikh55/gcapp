import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface ListItemProps {
  iconName: string;
  label: string;
  rightIcon: string;
  onPress?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ iconName, label, rightIcon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between py-4 px-3">
      <View className="flex-row items-center">
        <Ionicons name={iconName as any} color='#FEF5EF' size={30} className="mr-4" />
        <Text className="text-white text-lg">{label}</Text>
      </View>
      <Ionicons name={rightIcon as any} color='#FEF5EF' size={30} className="" />
    </TouchableOpacity>
  )
}

export default ListItem