import { useRouter } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Onboard = () => {
  const router = useRouter();

  const handleOnDone = () => {
    router.replace('/(auth)/Login'); // Redirect to login screen
  };

  return (
    <Onboarding
      onDone={handleOnDone}
      skipToPage={2}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/images/circle.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fe6e58',
          image: <Image source={require('../../assets/images/square.png')} />,
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#999',
          image: <Image source={require('../../assets/images/triangle.png')} />,
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );
};

export default Onboard;