import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";

export default function CustomizeProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Personalizar Perfil" />
      <ScrollView className="flex-1 px-6 pt-6">
        <View className="items-center mb-8">
            <View className="w-32 h-32 bg-ink rounded-full border-4 border-brand-purple" />
            <Text className="text-xs font-bold text-muted mt-4 uppercase">Visualização em Tempo Real</Text>
        </View>

        <Text className="text-sm font-bold text-ink mb-4">Escolha um Cenário</Text>
        <View className="flex-row gap-4 mb-8">
           {[1, 2, 3].map(i => (
             <TouchableOpacity key={i} className="w-20 h-20 bg-paper-muted rounded-xl border border-line" />
           ))}
        </View>

        <Button label="Salvar Alterações" variant="primary" size="lg" />
      </ScrollView>
    </SafeAreaView>
  );
}
