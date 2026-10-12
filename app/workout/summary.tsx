import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { useWorkoutStore } from "@/stores/useWorkoutStore";
import { Trophy, Clock, BarChart3, Share2 } from "lucide-react-native";

export default function SummaryScreen() {
  const router = useRouter();
  const { history } = useWorkoutStore();
  const lastWorkout = history[0];

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader title="Treino Concluído" />
      <View className="flex-1 px-6 pt-6 justify-center">
        <View className="items-center mb-8">
           <View className="w-24 h-24 bg-success-soft rounded-full items-center justify-center mb-4">
              <Trophy size={48} color="#20A575" />
           </View>
           <Text className="text-3xl font-extrabold text-ink">{lastWorkout.repMilestone}</Text>
           <Text className="text-muted font-semibold">Novo marco alcançado!</Text>
        </View>

        <View className="flex-row justify-between mb-8 bg-paper-card border border-line p-5 rounded-2xl">
           <View className="items-center">
             <Clock size={24} color="#3759F9" className="mb-2" />
             <Text className="text-lg font-extrabold text-ink">{lastWorkout.durationMinutes}m</Text>
             <Text className="text-xs font-bold text-muted">Duração</Text>
           </View>
           <View className="items-center">
             <BarChart3 size={24} color="#7B4DF7" className="mb-2" />
             <Text className="text-lg font-extrabold text-ink">{lastWorkout.totalVolumeKg}</Text>
             <Text className="text-xs font-bold text-muted">Volume (kg)</Text>
           </View>
        </View>

        <Button 
          label="Compartilhar Conquista" 
          variant="primary" 
          size="lg" 
          icon={<Share2 size={20} color="#FFF" />}
          onPress={() => router.push("/workout/share-card" as any)} 
        />
        <Button 
          label="Voltar à Home" 
          variant="ghost" 
          size="lg" 
          onPress={() => router.push("/(tabs)/(workout)" as any)}
          className="mt-2"
        />
      </View>
    </SafeAreaView>
  );
}
