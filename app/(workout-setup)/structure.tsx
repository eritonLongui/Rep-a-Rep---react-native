import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { useUserStore } from "@/stores/useUserStore";
import { useWorkoutStore } from "@/stores/useWorkoutStore";
import { Layers, CheckCircle2, AlertCircle } from "lucide-react-native";

export default function StructureScreen() {
  const router = useRouter();
  const canBuild = useUserStore((s) => s.canBuildNewProgram);
  const incrementBuild = useUserStore((s) => s.incrementBuildCount);
  const [selectedStructure, setSelectedStructure] = useState("upper-lower");

  const structures = [
    {
      id: "full-body",
      title: "Full Body (Corpo Inteiro)",
      description: "Ideal para iniciar com 2 a 3 treinos por semana. Trabalha o corpo todo em cada sessão.",
      days: "3 dias / sem",
    },
    {
      id: "upper-lower",
      title: "Upper / Lower (Superior e Inferior)",
      description: "Alterna entre treinos de membros superiores e inferiores. Excelente para consistência.",
      days: "4 dias / sem",
    },
    {
      id: "ppl",
      title: "Push / Pull / Legs (Empurrar / Puxar / Pernas)",
      description: "Divisão clássica e altamente eficiente para ganho de massa e hipertrofia.",
      days: "3 a 5 dias / sem",
    },
  ];

  const handleSelect = () => {
    const check = canBuild();
    if (!check.allowed) {
      Alert.alert(
        "Limite Mensal Atingido",
        check.reason || "Você atingiu o limite do plano Free.",
        [{ text: "Entendi", onPress: () => router.push("/profile/plans" as any) }]
      );
      return;
    }

    incrementBuild();
    router.push("/(workout-setup)/exercises" as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Escolha da Estrutura" />
      <View className="flex-1 px-6 pt-6 justify-between pb-8">
        <View className="space-y-4">
          <View>
            <Text className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
              Passo 2 de 3
            </Text>
            <Text className="text-2xl font-extrabold text-ink tracking-tight">
              Como deseja dividir sua rotina?
            </Text>
          </View>

          <View className="space-y-3">
            {structures.map((item) => {
              const isSelected = selectedStructure === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  onPress={() => setSelectedStructure(item.id)}
                  className={`p-4 rounded-2xl border ${
                    isSelected
                      ? "bg-paper-card border-brand-blue shadow-sm"
                      : "bg-paper-card border-line"
                  }`}
                >
                  <View className="flex-row items-center justify-between mb-1">
                    <Text className="text-base font-bold text-ink">{item.title}</Text>
                    {isSelected && <CheckCircle2 size={20} color="#3759F9" />}
                  </View>
                  <Text className="text-xs font-medium text-muted mb-2 leading-relaxed">
                    {item.description}
                  </Text>
                  <View className="self-start bg-paper-muted px-2.5 py-1 rounded-full">
                    <Text className="text-[11px] font-bold text-ink">{item.days}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <Button
          label="Continuar para Exercícios"
          variant="primary"
          size="lg"
          onPress={handleSelect}
        />
      </View>
    </SafeAreaView>
  );
}
