import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { useWorkoutStore } from "@/stores/useWorkoutStore";
import { CalendarDays, Play, ArrowRight } from "lucide-react-native";

export default function WorkoutHomeScreen() {
  const router = useRouter();
  const startWorkout = useWorkoutStore((s) => s.startWorkout);

  const handleStart = () => {
    startWorkout();
    router.push("/workout/active" as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader />
      <ScrollView className="flex-1 px-4 pt-4">
        <View className="mb-6">
          <Text className="text-sm font-bold text-muted mb-1">BOM DIA, ATLETA!</Text>
          <Text className="text-2xl font-extrabold text-ink">Treino de hoje</Text>
        </View>

        {/* Daily Workout Card */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleStart}
          className="bg-ink rounded-3xl p-6 shadow-lg mb-6"
        >
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-brand-blue font-bold text-xs uppercase tracking-widest mb-1">
                Upper / Lower
              </Text>
              <Text className="text-white text-xl font-extrabold">Treino A</Text>
            </View>
            <View className="bg-white/10 p-3 rounded-2xl">
              <Play size={24} color="#FFF" fill="#FFF" />
            </View>
          </View>
          
          <Text className="text-muted text-sm font-medium mb-6">
            3 exercícios • ~45 min
          </Text>

          <View className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
             <View className="w-1/3 h-full bg-brand-blue" />
          </View>
        </TouchableOpacity>

        {/* Consistency */}
        <View className="bg-paper-card border border-line rounded-2xl p-5">
           <View className="flex-row items-center space-x-2 mb-4">
             <CalendarDays size={20} color="#3759F9" />
             <Text className="font-bold text-ink">Sua consistência</Text>
           </View>
           <View className="flex-row justify-between">
              {['S','T','Q','Q','S','S','D'].map((d, i) => (
                <View key={i} className={`w-10 h-10 rounded-full items-center justify-center ${i < 3 ? 'bg-brand-blue' : 'bg-paper-muted'}`}>
                  <Text className={`font-bold ${i < 3 ? 'text-white' : 'text-muted'}`}>{d}</Text>
                </View>
              ))}
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
