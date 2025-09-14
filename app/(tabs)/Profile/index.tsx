import Button from '@/components/Button';
import ListItem from '@/components/ListItem';
import LogoutAlert from '@/components/LogoutAlert';
import { useAuth } from '@/context/AuthContext';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProfilePic = require('./../../../assets/images/rick_sanchez.jpg');

const Profile = () => {
  const { logout, userInfo } = useAuth();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const openLogoutModal = () => setLogoutModalVisible(true);
  const closeLogoutModal = () => setLogoutModalVisible(false);

  const handleLogout = () => {
    closeLogoutModal();
    logout();
  }

  return (
    <SafeAreaView className="flex-1 bg-primary_bg">
      <View className="m-6 mt-10 flex-row justify-between border-4 border-frame py-5 px-4 rounded-3xl">
        <View>
          <Text className="text-white text-3xl">Rick Sanchez</Text>
          <Text className="text-white text-sm">{userInfo.arguments}</Text>
          <Text className="text-white text-lg">Travelling Since July 2025</Text>
        </View>
        <Image source={ProfilePic} className='rounded-full h-28 w-28 ' />
      </View>

      <View className='px-4 mx-2'>
        <Button screen={"EditProfile"} root={true} value='Edit Profile' />
      </View>

      <View className='m-6'>
        <View className='h-1 w-full my-2 bg-text_light'></View>
        <ListItem iconName='settings' label='App Settings' rightIcon={'arrow-forward-sharp'} />
        <ListItem iconName='people-circle' label='Classmates' rightIcon={'arrow-forward-sharp'} />
        <ListItem iconName='help-circle' label='Get Help' rightIcon={'arrow-forward-sharp'} />
      </View>

      <TouchableOpacity onPress={openLogoutModal} className="bg-buttonColor px-6 py-3 rounded-full min-w-40 items-center mx-5" >
        <Text className="text-buttonText text-lg font-bold">Logout</Text>
      </TouchableOpacity>
      <LogoutAlert visible={logoutModalVisible}
        onCancel={closeLogoutModal} onLogout={handleLogout} />


    </SafeAreaView>
  )
}

export default Profile