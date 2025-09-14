import { supabase } from "@/lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Session } from "@supabase/supabase-js";
import { router } from "expo-router";
import React, { createContext, MutableRefObject, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";

interface AuthContextData {
  isLoggedIn: boolean;
  hasOnboarded: boolean;
  isLoading: boolean;
  token: MutableRefObject<string | null>;
  completeOnboarding: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  userInfo: () => Promise<Session | null>;
}

const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  hasOnboarded: false,
  isLoading: true,
  token: { current: null },
  completeOnboarding: async () => { },
  signup: async () => { },
  login: async () => { },
  logout: async () => { },
  userInfo: async () => null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tokenRef = useRef<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const HAS_ONBOARDED_KEY = "hasOnboarded";

  useEffect(() => {
    async function loadAuthState() {
      try {
        const onboardValue = await AsyncStorage.getItem(HAS_ONBOARDED_KEY);
        const token = await AsyncStorage.getItem('@token');
        tokenRef.current = token;

        setHasOnboarded(onboardValue === 'true');
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error("Error loading auth state: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAuthState();
  }, []);

  const completeOnboarding = useCallback(async () => {
    setHasOnboarded(true);
    await AsyncStorage.setItem(HAS_ONBOARDED_KEY, "true");
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert(error.message);
        setIsLoggedIn(false);
        tokenRef.current = null;
        await AsyncStorage.removeItem('@token');
      } else if (data.session) {
        setIsLoggedIn(true);
        tokenRef.current = data.session.access_token;
        await AsyncStorage.setItem('@token', data.session.access_token);
      }
    } catch (err) {
      Alert.alert("An error occurred during login.");
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        Alert.alert(error.message);
      } else if (!data.session) {
        Alert.alert('Please check your inbox for email verification!');
      } else {
        setIsLoggedIn(true);
        tokenRef.current = data.session.access_token;
        await AsyncStorage.setItem('@token', data.session.access_token);
      }
    } catch (err) {
      Alert.alert("An error occurred during signup.");
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await supabase.auth.signOut();
      await AsyncStorage.removeItem('@token');
      tokenRef.current = null;
      setIsLoggedIn(false);
      router.replace('/(auth)/Login');
    } catch (err) {
      Alert.alert("An error occurred during logout.");
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  }, []);

  const userInfo = useCallback(async (): Promise<Session | null> => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        return null;
      }
      return data.session;
    } catch (err) {
      console.error(err)
      return null;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        hasOnboarded,
        isLoading,
        completeOnboarding,
        login,
        token: tokenRef,
        signup,
        logout,
        userInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);