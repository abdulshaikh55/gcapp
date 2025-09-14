import { fetchJourney } from '@/app/services/api';
import Header from '@/components/Header';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Journey {
  id: string,
  journey_title: string,
  description: string,
  last_updated: string,
}

const Details = () => {
  const { mapId } = useLocalSearchParams();
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadJourneys = async () => {
      try {
        setLoading(true);
        const id = Array.isArray(mapId) ? mapId[0] : mapId;
        const data = await fetchJourney(id);
        setJourneys(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch journey');
        console.error("Error fetching journey:", err);
      } finally {
        setLoading(false);
      }
    }

    loadJourneys();
  }, [mapId]);

  if (loading) {
    return (
      <SafeAreaView className='flex-1 bg-primary_bg'>
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg text-text_light">Loading..</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-primary_bg">
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg text-red-400">Error: {error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-primary_bg">

      <View className=" rounded-s-sm flex-1 rounded-3xl m-6 mt-0">
        <FlatList
          data={journeys}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<Header title="Journies" style="m-6 mt-10" textStyle="mb-6 text-text_light text-4xl text-center" />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 24,
            paddingTop: 0,
            flexGrow: 1
          }}
          renderItem={({ item, index }) => (
            <View
              style={{ position: 'relative' }}
              className="items-start bg-white/10 rounded-lg px-4 py-2 mb-2 flex-col h-44 justify-between overflow-hidden">
              <Text className='text-text_light font-semibold my-2 text-lg'>{item.journey_title}</Text>
              <Text className='text-light-100 mb-2 text-sm'>{item.description}</Text>
              <TouchableOpacity
                className="bg-white px-6 py-3 rounded-lg min-w-40 items-center self-center mb-2 w-full"
                onPress={() => { }
                  // router.push({
                  //   pathname: "/(tabs)/Maps/Details",
                  //   params: { mapId: item.id },
                  // })
                }
              >
                <Text className="text-buttonText text-base font-bold">View Journey</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Details