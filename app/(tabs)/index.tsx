import courses from "@/assets/data/courses";
import projects from '@/assets/data/projects';
import LastVisitedCourseCard from "@/components/LastVisitedCourseCard";
import LastVisitedProjectCard from "@/components/LastVisitedProjectCard";
import SearchBar from "@/components/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const banner = require("@/assets/images/banner.png");

const currentCourseId: number = 3;

interface ValueCardProps {
  iconName: string;
  title: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ iconName, title }) => (
  <View className="flex-col border-2 border-frame bg-white/10 h-36 w-36 rounded-md items-center justify-center gap-2">
    <Ionicons name={iconName as any} color="#ffd33d" size={36} />
    <Text className="text-text_light">{title}</Text>
  </View>
);

export default function Index() {
  const lastVisited = courses[currentCourseId];
  const project = projects[0];
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  return (
    <SafeAreaView className="flex-1 bg-primary_bg">
      <View className="mx-6">
        <View className="items-center mt-6">
          <SearchBar
            clicked={clicked}
            setClicked={setClicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
        </View>
        <Text className="text-text_light text-2xl mt-3 font-lato_bold">Hello, Rick!</Text>

        <View className="mt-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 12 }}
          >
            <ValueCard iconName="medal" title="Your XP" />
            <ValueCard iconName="hammer" title="Projects" />
            <ValueCard iconName="nuclear" title="Insights" />
            <ValueCard iconName="trophy" title="Achievements" />
            <ValueCard iconName="people" title="Community" />
          </ScrollView>
        </View>

        {/* User's last visited course */}
        <View>
          <Text className="font-semibold text-gray-300 text-lg my-3 mt-6">
            Continue where you left off
          </Text>
          <LastVisitedCourseCard
            name={lastVisited.name}
            icon={lastVisited.icon}
            progress={0.35}
          />
          <View className="my-2"></View>
          <LastVisitedProjectCard
            name={project.name}
            icon={project.icon}
            progress={project.progress}
            tags={project.technologies}
          />
        </View>

        {/* Rewards Banner */}
        <View className="w-full h-40 my-4 rounded-xl overflow-hidden">
          <Image
            source={banner}
            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
