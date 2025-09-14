import AgreementNotice from '@/components/AgreementNotice';
import { useAuth } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';


const Register = () => {
  const { signup, isLoggedIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    await signup(email, password);
    if (isLoggedIn) {
      router.replace('/(tabs)');
    }
  };


  return (
    <View className='flex-1 justify-center items-center' >
      <View className='w-11/12 max-w-md bg-gray-500 p-8 rounded-2xl items-center'>
        <Text className='text-3xl mb-4 text-white'>Signup</Text>
        <Text className='text-xl mb-4 self-start text-white'>Please enter your information</Text>
        <TextInput
          className="w-full bg-white/80 rounded-md px-4 py-2 mb-4 text-black"
          placeholder="Username"
          placeholderTextColor="#666"
          value={username}
          onChangeText={setUsername}
          keyboardType="default"
          autoCapitalize="none"
        />
        <TextInput
          className="w-full bg-white/80 rounded-md px-4 py-2 mb-4 text-black"
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="w-full bg-white/80 rounded-md px-4 py-2 mb-4 text-black"
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          className="w-full bg-white/80 rounded-md px-4 py-2 mb-6 text-black"
          placeholder="Re-enter password"
          placeholderTextColor="#666"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-black w-full py-3 rounded-md items-center"
          onPress={handleSignup}
        >
          <Text className="text-white font-bold text-lg">Sign up</Text>
        </TouchableOpacity>

        <View className="flex-row items-center w-full my-4">
          <View className="flex-1 h-px bg-white" />
          <Text className="mx-2 text-gray-300">or</Text>
          <View className="flex-1 h-px bg-white" />
        </View>

        <TouchableOpacity className='flex flex-row gap-4 mb-5 bg-white w-full rounded-md justify-center py-3'>
          <Ionicons name='logo-google' className='text-black' size={25} />
          <Text className='text-xl'>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex flex-row gap-4 bg-white w-full rounded-md justify-center py-3'>
          <Ionicons name='logo-github' size={25} />
          <Text className='text-xl'>Continue with GitHub</Text>
        </TouchableOpacity>
        <AgreementNotice />
        <View className='flex flex-row gap-2 mt-2'>
          <Text className='text-lg'>Already have an account?</Text>
          <Link className='text-lg font-semibold' href={'/(auth)/Login'}>Login</Link>
        </View>
      </View>
    </View>
  )
}

export default Register