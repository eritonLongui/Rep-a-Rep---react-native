import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Info } from "lucide-react-native";

export default function ReviewScreen() {
  const router = useRouter();

  const handleSave = () => {
    router.push("/(tabs)/(workout)" as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Revisão do Treino" />
      <ScrollView className="flex-1 px-6 pt-6 pb-8">
        <View className="space-y-6">
          <View>
            <Text className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
              Passo 3 de 3
            </Text>
            <Text className="text-2xl font-extrabold text-ink tracking-tight">
              Tudo pronto para começar!
            </Text>
          </View>

          {/* Info notice */}
          <View className="bg-brand-violet-soft/60 border border-brand-purple/20 rounded-2xl p-4 flex-row space-x-3 items-center">
            <Info size={22} color="#7B4DF7" />
            <Text className="flex-1 text-xs font-medium text-ink leading-relaxed">
              Pequenas edições de exercícios e cargas são livres e não consomem o seu limite mensal de montagens.
            </Text>
          </View>

          {/* Summary Card */}
          <View className="bg-paper-card border border-line rounded-2xl p-5 space-y-4">
            <View className="flex-row items-center justify-between border-b border-line pb-3">
              <Text className="font-extrabold text-ink text-base">Programa A</Text>
              <Text className="text-xs font-bold text-brand-blue uppercase">Upper / Lower</Text>
            </View>
            <View className="space-y-2">
              <Text className="text-xs font-bold text-muted uppercase">Exercícios Inclusos</Text>
              {["Supino Reto com Halteres", "Puxada Frontal Pulley", "Desenvolvimento de Ombro"].map((ex, i) => (
                <View key={i} className="flex-row items-center space-x-2">
                  <CheckCircle2 size={16} color="#20A575" />
                  <Text className="text-sm font-semibold text-ink">{ex}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="mt-8">
          <Button
            label="Salvar e ir para o Treino"
            variant="primary"
            size="lg"
            onPress={handleSave}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
