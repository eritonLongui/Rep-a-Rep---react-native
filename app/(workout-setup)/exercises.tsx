import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { Dumbbell, ArrowRight } from "lucide-react-native";

export default function ExercisesScreen() {
  const router = useRouter();

  const categories = [
    { name: "AGACHAR (Inferiores)", exercises: ["Agachamento Livre", "Leg Press", "Hack Squat"] },
    { name: "EMPURRAR (Peito/Ombro/Tríceps)", exercises: ["Supino Reto", "Desenvolvimento Halteres", "Supino Inclinado"] },
    { name: "PUXAR (Costas/Bíceps)", exercises: ["Puxada Frontal", "Remada Curvada", "Remada Baixa"] },
  ];

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Seleção de Exercícios" />
      <ScrollView className="flex-1 px-6 pt-6 pb-8">
        <Text className="text-2xl font-extrabold text-ink tracking-tight mb-6">
          Personalize sua rotina
        </Text>

        {categories.map((cat, idx) => (
          <View key={idx} className="mb-6">
            <Text className="text-xs font-bold text-muted uppercase tracking-widest mb-3">
              {cat.name}
            </Text>
            <View className="space-y-2">
              {cat.exercises.map((ex, exIdx) => (
                <TouchableOpacity
                  key={exIdx}
                  className="bg-paper-card border border-line rounded-xl p-4 flex-row items-center justify-between active:bg-paper-muted"
                >
                  <View className="flex-row items-center space-x-3">
                    <Dumbbell size={20} color="#3759F9" />
                    <Text className="font-semibold text-ink">{ex}</Text>
                  </View>
                  <ArrowRight size={16} color="#9CA3AF" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <View className="py-8">
          <Button
            label="Revisar e Salvar Treino"
            variant="primary"
            size="lg"
            onPress={() => router.push("/(workout-setup)/review" as any)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
