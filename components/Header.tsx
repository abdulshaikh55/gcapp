import React from 'react';
import { View, Text } from 'react-native';

interface HeaderProps {
  title?: string;
  style?: any;
  textStyle?: any;
}

const Header: React.FC<HeaderProps> = ({ title = 'Your Courses', style, textStyle }) => {
  return (
    <View className={style ? style : 'my-5'}>
      <Text className={textStyle ? textStyle : 'text-text_light text-2xl text-start font-bold'}>
        {title}
      </Text>
    </View>
  );
};

export default Header;