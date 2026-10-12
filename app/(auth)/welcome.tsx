import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "@/components/ui/Button";
import { useUserStore } from "@/stores/useUserStore";
import { ArrowRight, ShieldCheck } from "lucide-react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  const setGuestMode = useUserStore((s) => s.setGuestMode);

  const handleStartGuest = () => {
    setGuestMode(true);
    router.push("/(workout-setup)/preferences" as any);
  };

  const handleLogin = () => {
    setGuestMode(false);
    router.push("/(auth)/login" as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-ink">
      <View className="flex-1 px-6 pt-10 pb-8 justify-between">
        {/* Header / Logo */}
        <View className="items-center mt-4">
          <View className="flex-row items-center space-x-1 mb-2">
            <Text className="text-3xl font-extrabold text-white tracking-tight">
              Rep<Text className="text-brand-blue">a</Text>Rep
            </Text>
          </View>
          <Text className="text-xs font-bold text-brand-purple uppercase tracking-eyebrow">
            Sua evolução, uma rep de cada vez
          </Text>
        </View>

        {/* Orbit Rings Graphic */}
        <View className="items-center justify-center my-8 relative">
          <View className="w-64 h-64 rounded-full border-2 border-brand-blue/30 items-center justify-center">
            <View className="w-48 h-48 rounded-full border-2 border-brand-purple/40 items-center justify-center">
              <View className="w-32 h-32 rounded-full bg-brand-blue/20 items-center justify-center border border-brand-blue/60">
                <Text className="text-4xl font-extrabold text-white">
                  REP
                </Text>
                <Text className="text-xs font-semibold text-brand-blue">
                  001
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Value Prop */}
        <View className="space-y-2 text-center mb-6">
          <Text className="text-2xl font-extrabold text-white text-center tracking-tight">
            Treino descomplicado para o seu progresso pessoal
          </Text>
          <Text className="text-sm font-medium text-muted text-center leading-relaxed">
            Monte seus treinos, registre suas cargas facilmente e acompanhe seus marcos sem comparações tóxicas.
          </Text>
        </View>

        {/* Actions */}
        <View className="space-y-3">
          <Button
            label="Criar conta ou Entrar"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} color="#FFF" />}
            iconPosition="right"
            onPress={handleLogin}
          />

          <Button
            label="Experimentar sem conta (Visitante)"
            variant="outline"
            size="md"
            className="border-ink-2 text-white bg-ink-2/60"
            onPress={handleStartGuest}
          />

          {/* Terms notice */}
          <View className="flex-row items-center justify-center space-x-1 pt-2">
            <ShieldCheck size={14} color="#6F7280" />
            <Text className="text-[11px] font-medium text-muted text-center">
              Ao continuar você aceita os Termos & Aviso de Saúde
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
