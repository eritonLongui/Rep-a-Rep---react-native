import React, { useRef } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@/components/ui/Button";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";

export default function ShareCardScreen() {
  const viewShotRef = useRef<ViewShot>(null);
  const router = useRouter();

  const handleShare = async () => {
    if (viewShotRef.current?.capture) {
      const uri = await viewShotRef.current.capture();
      await Sharing.shareAsync(uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-ink">
      <ViewShot ref={viewShotRef} className="flex-1 bg-white items-center justify-center p-8">
        <Text className="text-4xl font-extrabold text-ink mb-4">REP 001</Text>
        <Text className="text-xl font-bold text-muted">Treino Concluído!</Text>
        <Text className="mt-8 text-brand-blue font-bold">Rep a Rep App</Text>
      </ViewShot>

      <View className="p-6 bg-ink">
        <Button label="Compartilhar" variant="primary" size="lg" onPress={handleShare} />
        <Button label="Voltar" variant="ghost" size="lg" className="bg-white/10 mt-2" onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
}
