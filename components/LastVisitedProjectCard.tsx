import React from 'react';
import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native';
import MapButton from './MapButton';
import Progress from './Progress';

interface LastVisitedProjectCardProps {
  icon: ImageSourcePropType,
  name?: string,
  progress?: number,
  tags?: string[],
}

const LastVisitedProjectCard: React.FC<LastVisitedProjectCardProps> = ({ icon, name, progress, tags }) => {
  return (
    <View className="relative items-start bg-white/10 rounded-lg px-4 py-2 mb-2 flex-col h-48 justify-between overflow-hidden">
      <ImageBackground
        source={icon}
        style={{ width: 100, height: 100 }}
        imageStyle={{ opacity: 0.25 }}
        className='absolute top-0 right-0'
      >
      </ImageBackground>

      <Text className='text-text_light font-semibold my-2 text-lg'>{name ? name : "alpha"}</Text>
      <Progress progress={progress ? progress : 0} color='#ffd33d' width={290} height={15} />
      <View className='flex-row my-3 gap-2'>
        {tags?.map(tag => (
          <View
            key={tag}
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 4,
              paddingHorizontal: 6,
              paddingVertical: 2,
              backgroundColor: 'black'
            }}
          >
            <Text className='text-light-200 text-sm'>{tag}</Text>
          </View>
        ))}
      </View>

      <MapButton screen='' root={true} value='Work on Your Project' />

    </View>
  )
}

export default LastVisitedProjectCard