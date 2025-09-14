import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface LogoutAlertProps {
  visible: boolean;
  onCancel: () => void;
  onLogout: () => void;
}

const LogoutAlert: React.FC<LogoutAlertProps> = ({ visible, onCancel, onLogout }) => {
  return (
    <Modal visible={visible} transparent animationType="fade" >
      <View className="flex-1 bg-black/60 justify-center items-center px-6">
        <View className="bg-primary_bg rounded-3xl p-6 w-full max-w-md shadow-lg">
          <Text className="text-white font-lato_bold text-2xl mb-3">Are you sure?</Text>
          <Text className="text-text_light font-lato text-base mb-6">
            Do you really want to logout?
          </Text>
          <View className="flex-row justify-end space-x-6">
            <TouchableOpacity
              onPress={onCancel}
              className="px-4 py-2 rounded-full bg-secondary"
            >
              <Text className="text-text_light font-lato text-lg">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onLogout}
              className="px-4 py-2 rounded-full bg-buttonColor"
            >
              <Text className="text-primary_bg font-lato_bold text-lg">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutAlert;
