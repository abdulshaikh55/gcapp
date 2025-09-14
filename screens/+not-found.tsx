import { View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View className='flex-1 bg-primary justify-center items-center'>
        <Link href={'/(tabs)'} className='text-2xl underline text-white'>Go back to Home</Link>
      </View>
    </>
  )
}

export default NotFoundScreen