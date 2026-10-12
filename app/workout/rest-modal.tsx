import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import * as Haptics from "expo-haptics";

export default function RestModalScreen() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const adjust = (amount: number) => {
    Haptics.selectionAsync();
    setSeconds((prev) => Math.max(0, prev + amount));
  };

  return (
    <SafeAreaView className="flex-1 bg-ink">
      <AppHeader title="Descanso Ativo" showBack />
      <View className="flex-1 items-center justify-center px-6">
        <View className="w-56 h-56 rounded-full border-4 border-brand-blue items-center justify-center mb-8">
          <Text className="text-5xl font-extrabold text-white">
            {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
          </Text>
          <Text className="text-xs font-bold text-muted uppercase tracking-widest mt-1">Descansando</Text>
        </View>

        <View className="flex-row space-x-4 mb-8">
          <Button label="- 15s" variant="outline" size="sm" className="border-ink-2 text-white bg-ink-2" onPress={() => adjust(-15)} />
          <Button label="+ 15s" variant="outline" size="sm" className="border-ink-2 text-white bg-ink-2" onPress={() => adjust(15)} />
        </View>

        <Button label="Pular Descanso" variant="primary" size="lg" onPress={() => router.back()} className="w-full" />
      </View>
    </SafeAreaView>
  );
}
