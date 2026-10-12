import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Avatar } from "@/components/ui/Avatar";
import { NumberInput } from "@/components/ui/NumberInput";
import { Dumbbell, ShieldAlert, Sparkles, Trophy } from "lucide-react-native";

export default function UIComponentsPreviewScreen() {
  const router = useRouter();
  const [selectedChip, setSelectedChip] = React.useState("Full Body");
  const [inputValue, setInputValue] = React.useState(16);

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader title="Design System UI Kit" showBack showAvatar />

      <ScrollView className="flex-1 px-4 py-4 space-y-6">
        {/* Buttons */}
        <View className="bg-paper-card p-4 rounded-2xl border border-line space-y-3">
          <Text className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
            Botões
          </Text>
          <Button label="Botão Primário" variant="primary" />
          <Button label="Botão Secundário" variant="secondary" />
          <Button label="Botão de Alerta" variant="danger" icon={<ShieldAlert size={18} color="#FFF" />} />
          <Button label="Botão Outline" variant="outline" />
          <Button label="Botão Ghost" variant="ghost" />
        </View>

        {/* Chips */}
        <View className="bg-paper-card p-4 rounded-2xl border border-line space-y-3">
          <Text className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
            Chips (Seletores)
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {["Full Body", "Upper / Lower", "Push / Pull / Legs"].map((item) => (
              <Chip
                key={item}
                label={item}
                selected={selectedChip === item}
                onPress={() => setSelectedChip(item)}
              />
            ))}
          </View>
        </View>

        {/* Number Input & Progress */}
        <View className="bg-paper-card p-4 rounded-2xl border border-line space-y-4">
          <Text className="text-xs font-bold text-muted uppercase tracking-widest">
            Entrada de Dados & Progresso
          </Text>
          <NumberInput
            label="Carga (kg)"
            value={inputValue}
            onChange={setInputValue}
            step={2}
            unit="kg"
          />
          <ProgressBar progress={0.65} showPercentage />
        </View>

        {/* Avatars */}
        <View className="bg-paper-card p-4 rounded-2xl border border-line space-y-3">
          <Text className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
            Avatares
          </Text>
          <View className="flex-row items-center space-x-4">
            <Avatar size="sm" />
            <Avatar size="md" />
            <Avatar size="lg" />
            <Avatar size="xl" />
          </View>
        </View>

        {/* Navigation CTA */}
        <View className="py-4">
          <Button
            label="Ir para Tela 01: Boas-vindas"
            variant="primary"
            size="lg"
            icon={<Sparkles size={20} color="#FFF" />}
            onPress={() => router.push("/(auth)/welcome" as any)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
