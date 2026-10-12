import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { AppHeader } from "@/components/ui/AppHeader";
import { useWorkoutStore } from "@/stores/useWorkoutStore";
import { TrendingUp, Award, Calendar } from "lucide-react-native";

export default function ProgressScreen() {
  const { history } = useWorkoutStore();

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader title="Evolução" showBack />
      <ScrollView className="flex-1 px-4 pt-6 space-y-6">
        <View className="bg-paper-card p-5 rounded-2xl border border-line">
          <View className="flex-row items-center space-x-2 mb-3">
            <TrendingUp size={22} color="#3759F9" />
            <Text className="text-base font-extrabold text-ink">Histórico de Sessões</Text>
          </View>
          <Text className="text-sm font-medium text-muted mb-4">Total de treinos registrados: {history.length}</Text>
          {history.map((item) => (
            <View key={item.id} className="flex-row justify-between items-center py-3 border-t border-line">
              <View>
                <Text className="font-bold text-ink">{item.title}</Text>
                <Text className="text-xs text-muted">{new Date(item.date).toLocaleDateString()}</Text>
              </View>
              <View className="items-end">
                <Text className="font-bold text-brand-blue">{item.repMilestone}</Text>
                <Text className="text-xs text-muted">{item.totalVolumeKg} kg</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
