import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { AppHeader } from "@/components/ui/AppHeader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Trophy, Users } from "lucide-react-native";

export default function ChallengeDetailScreen() {
  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Desafio Oficial" />
      <ScrollView className="flex-1 px-6 pt-6">
        <View className="bg-paper-card rounded-2xl border border-line p-6 mb-6">
          <Text className="text-2xl font-extrabold text-ink mb-2">12 Treinos em 30 Dias</Text>
          <Text className="text-muted text-sm mb-4">Alcance sua consistência com nossa comunidade oficial.</Text>
          
          <View className="flex-row items-center justify-between mb-4">
             <View className="items-center">
                <Text className="text-2xl font-extrabold text-brand-blue">8</Text>
                <Text className="text-xs font-bold text-muted uppercase">Treinos</Text>
             </View>
             <View className="items-center">
                <Text className="text-2xl font-extrabold text-brand-purple">12</Text>
                <Text className="text-xs font-bold text-muted uppercase">Meta</Text>
             </View>
          </View>
          
          <ProgressBar progress={8/12} showPercentage />
        </View>

        <View className="flex-row items-center space-x-3 bg-paper-card p-4 rounded-xl border border-line">
           <Users size={24} color="#6F7280" />
           <Text className="font-bold text-ink">452 participantes ativos</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
