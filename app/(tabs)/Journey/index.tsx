import Header from '@/components/Header';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const User = {
  current_course_id: 3,
  courses_completion: [
    { 1: 25 },
    { 3: 35 },
    { 5: 1 },
    { 7: 100 }
  ],
}

const Journey = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary_bg">
      <View className='mx-6 mt-10'>
        <Text className="mb-6 text-text_light text-4xl text-center">Your Journey</Text>
      </View>

      <View className=" rounded-s-sm flex-1 rounded-3xl mx-6 mt-0">
        <Header title='Your Latest Path' />
        <ScrollView >
          <View className='text-center bg-green-600 px-4 py-8 rounded-full self-center justify-center'>
            <Text className='text-xl color-slate-200 font-lato_bolditalic text-center'>
              CourseName
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Journey