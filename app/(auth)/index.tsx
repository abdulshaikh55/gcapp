import { useAuth } from '@/context/AuthContext';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  const { hasOnboarded, isLoggedIn, isLoading } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShouldRedirect(true);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!shouldRedirect) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Preparing app...</Text>
      </View>
    );
  }

  if (!hasOnboarded) {
    return <Redirect href="/(auth)/Onboard" />;
  }

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/Login" />;
  }

  return <Redirect href="/(tabs)" />;
}