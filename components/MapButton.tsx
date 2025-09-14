/**
 * Button Component
 *
 * A reusable button component for navigation using Expo Router.
 *
 * @param {Object} props - Component props
 * @param {string} props.screen - The target screen path (without leading slash).
 * @param {boolean} props.root - If true, navigates to the root path ("/{screen}"), otherwise to "/(tabs)/{screen}".
 * @param {string} props.value - The text to display inside the button.
 *
 * @example
 * <Button screen="profile" root={false} value="Go to Profile" />
 *
 * @returns {JSX.Element} TouchableOpacity button that navigates to the specified route.
 */


import { RelativePathString, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  screen?: RelativePathString,
  value: string,
  onPress?: () => void,
}

const MapButton = ({ screen, value, onPress }: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="bg-white px-6 py-3 rounded-lg min-w-40 items-center self-center mb-2 w-full"
      onPress={onPress ? onPress : () => router.push(screen ? screen : '/(tabs)')}
    >
      <Text className="text-buttonText text-base font-bold">{value}</Text>
    </TouchableOpacity>
  )
}

export default MapButton