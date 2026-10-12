import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";

export default function CreateChallengeScreen() {
  const router = useRouter();
  const [title, setTitle] = useState("");

  const handleCreate = () => {
    if (!title) {
      Alert.alert("Atenção", "Insira um nome para o desafio.");
      return;
    }
    Alert.alert("Sucesso", "Desafio criado com sucesso!", [{ text: "OK", onPress: () => router.back() }]);
  };

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Criar Desafio" />
      <View className="flex-1 px-6 pt-6 justify-between pb-8">
        <View className="space-y-4">
          <Text className="text-2xl font-extrabold text-ink">Novo Desafio com Amigos</Text>
          <Text className="text-xs font-bold text-muted uppercase tracking-widest">Plano Free: até 10 participantes</Text>
          
          <View className="space-y-2">
            <Text className="text-xs font-bold text-muted uppercase">Nome do Desafio</Text>
            <TextInput
              placeholder="Ex: Foco no Verão"
              value={title}
              onChangeText={setTitle}
              className="bg-paper-card border border-line rounded-xl p-4 text-base font-semibold text-ink"
            />
          </View>
        </View>

        <Button label="Criar e Convidar" variant="primary" size="lg" onPress={handleCreate} />
      </View>
    </SafeAreaView>
  );
}
