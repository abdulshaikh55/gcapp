import React from "react";
import { TextInput, View, Keyboard, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';


interface SearchBarProps {
  clicked: boolean,
  searchPhrase: string,
  setSearchPhrase: (text: string) => void,
  setClicked: (value: boolean) => void,
}

const SearchBar: React.FC<SearchBarProps> = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <View className="justify-start items-center flex-row w-11/12 m-4">
      <View className={clicked
        ? "flex-row w-4/5 bg-[#d9dbda] rounded-3xl items-center justify-evenly p-2"
        : "flex-row w-full bg-[#d9dbda] rounded-3xl items-center p-2"
      }>
        <Ionicons name="search" size={22} color={"black"} className="ml-1" />

        <TextInput
          className="text-lg ml-2 w-11/12"
          placeholder="Search..."
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />

        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>

      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;
