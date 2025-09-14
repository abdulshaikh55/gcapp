import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import leaderBoard from '@/assets/data/leaderboard';
import Header from '@/components/Header';

const Leaderboard = () => {
  const first = leaderBoard[0];
  const second = leaderBoard[1];
  const third = leaderBoard[2];
  const rest = leaderBoard.slice(3);

  const renderTopThree = () => (
    <View className="m-6 mt-10">
      <Header title="Leaderboard" textStyle="mb-6 text-text_light text-4xl text-center" />
      <View className="flex-row justify-center items-end h-72 w-full">
        {/* Second Place */}
        <View className="items-center mx-2">
          <View className="bg-gray-300 w-20 h-44 rounded-t-full rounded-b-md items-center justify-between">
            <View>
              <Image source={{ uri: second.img_url }} className="w-16 h-16 rounded-full mt-2" />
              <Text className="text-lg font-bold  text-center">{second.xp}XP</Text>
            </View>
            <Text className="text-lg font-bold mt-2">2</Text>
          </View>
          <Text className="text-xl font-semibold mt-2 text-text_light">{second.name}</Text>
        </View>
        {/* First Place */}
        <View className="items-center mx-2">
          <View className="bg-yellow-400 w-24 h-52 rounded-t-full rounded-b-md items-center justify-between">
            <View>
              <Image source={{ uri: first.img_url }} className="w-20 h-20 rounded-full mt-2" />
              <Text className="text-lg font-bold  text-center">{first.xp}XP</Text>
            </View>
            <Text className="text-xl font-extrabold mt-2">1</Text>
          </View>
          <Text className="text-xl font-semibold mt-2 text-text_light">{first.name}</Text>
        </View>
        {/* Third Place */}
        <View className="items-center mx-2">
          <View className="bg-orange-400 w-20 h-36 rounded-t-full rounded-b-md items-center justify-between">
            <View>
              <Image source={{ uri: third.img_url }} className="w-16 h-16 rounded-full mt-2" />
              <Text className="text-lg font-bold  text-center">{third.xp}XP</Text>
            </View>
            <Text className="text-lg font-bold mt-2">3</Text>
          </View>
          <Text className="text-xl font-semibold mt-2 text-text_light">{third.name}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary_bg">
      <View className=" rounded-s-sm flex-1 rounded-3xl m-6 mt-0">
        <FlatList
          data={rest}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={renderTopThree}
          contentContainerStyle={{ paddingTop: 0, paddingBottom: 24, flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View className="flex-row items-center bg-white/10 rounded-xl px-4 py-2 mb-2">
              {/* Profile Pic */}
              <Image
                source={{ uri: item.img_url }}
                className="w-12 h-12 rounded-full mr-4"
              />
              {/* Name and XP */}
              <View className="flex-1">
                <Text className="text-base font-semibold text-text_light">{item.name}</Text>
                <Text className="text-xs text-text_light/70">XP: {item.xp}</Text>
              </View>
              {/* Rank */}
              <Text className="text-lg font-bold text-text_light">{index + 4}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Leaderboard