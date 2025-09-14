import Header from '@/components/Header'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchMap } from '../../services/api'

interface Map {
  id: number;
  map_title: string;
}

const Maps = () => {
  const [maps, setMaps] = useState<Map[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadMaps = async () => {
      try {
        setLoading(true);
        const data = await fetchMap();
        setMaps(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch maps');
        console.error("Error fetching maps:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMaps();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-primary_bg">
        <View className="flex-1 justify-center items-center">
          <Text className="text-text_light text-lg">Loading maps...</Text>
        </View>
      </SafeAreaView>
    );
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
          data={maps}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<Header title="Maps" style="m-6 mt-10" textStyle="mb-6 text-text_light text-4xl text-center" />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 0, paddingBottom: 24, flexGrow: 1 }}
          renderItem={({ item, index }) => (
            <View style={{ position: 'relative' }} className="items-start bg-white/10 rounded-lg px-4 py-2 mb-2 flex-col h-40 justify-between overflow-hidden">
              <Text className='text-text_light font-semibold my-2 text-lg'>{item.map_title}</Text>
              <TouchableOpacity
                className="bg-white px-6 py-3 rounded-lg min-w-40 items-center self-center mb-2 w-full"
                onPress={() =>
                  router.push({
                    pathname: "/(tabs)/Maps/Details",
                    params: { mapId: item.id },
                  })
                }
              >
                <Text className="text-buttonText text-base font-bold">View Journies</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Maps