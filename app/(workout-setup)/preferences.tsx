import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { useWorkoutStore } from "@/stores/useWorkoutStore";

export type WorkoutGoal = "HIPERTROFIA" | "FORCA" | "CONDICIONAMENTO" | "RESISTENCIA";
export type WorkoutFrequency = 2 | 3 | 4 | 5;

export default function PreferencesScreen() {
  const router = useRouter();
  const [goal, setGoal] = useState<WorkoutGoal>("HIPERTROFIA");
  const [frequency, setFrequency] = useState<WorkoutFrequency>(3);
  const [location, setLocation] = useState<"ACADEMIA" | "CASA">("ACADEMIA");

  const handleNext = () => {
    router.push("/(workout-setup)/structure" as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Preferências de Treino" />
      <View className="flex-1 px-6 pt-6 justify-between pb-8">
        <View className="space-y-6">
          <View>
            <Text className="text-xs font-bold text-muted uppercase tracking-widest mb-2">
              Passo 1 de 3
            </Text>
            <Text className="text-2xl font-extrabold text-ink tracking-tight">
              Qual é o seu objetivo principal?
            </Text>
          </View>

          <View className="space-y-3">
            {[
              { id: "HIPERTROFIA", label: "Hipertrofia & Ganho de Massa" },
              { id: "FORCA", label: "Ganho de Força e Performance" },
              { id: "CONDICIONAMENTO", label: "Condicionamento & Saúde Geral" },
              { id: "RESISTENCIA", label: "Resistência Muscular" },
            ].map((item) => (
              <Chip
                key={item.id}
                label={item.label}
                selected={goal === item.id}
                onPress={() => setGoal(item.id as WorkoutGoal)}
                className="py-3.5 px-5 justify-center"
              />
            ))}
          </View>

          <View className="pt-4">
            <Text className="text-sm font-extrabold text-ink mb-2">Frequência Semanal</Text>
            <View className="flex-row space-x-3">
              {[2, 3, 4, 5].map((days) => (
                <Chip
                  key={days}
                  label={`${days}x / sem`}
                  selected={frequency === days}
                  onPress={() => setFrequency(days as WorkoutFrequency)}
                />
              ))}
            </View>
          </View>
        </View>

        <Button label="Avançar para Estrutura" variant="primary" size="lg" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
}
