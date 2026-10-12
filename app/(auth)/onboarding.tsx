import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { useUserStore } from "@/stores/useUserStore";

export default function OnboardingScreen() {
  const router = useRouter();
  const updateUser = useUserStore((s) => s.updateUser);
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: "", age: "", gender: "", level: "" });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      updateUser({
        name: data.name || "Atleta",
        age: parseInt(data.age) || 25,
        gender: data.gender,
        experienceLevel: data.level as any,
      });
      router.push("/(workout-setup)/preferences" as any);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title={`Passo ${step} de 4`} />
      <View className="flex-1 px-6 pt-6 justify-between pb-8">
        <View>
          {step === 1 && <Text className="text-2xl font-extrabold text-ink">Como prefere ser chamado?</Text>}
          {step === 2 && <Text className="text-2xl font-extrabold text-ink">Qual sua idade?</Text>}
          {step === 3 && <Text className="text-2xl font-extrabold text-ink">Identidade de gênero</Text>}
          {step === 4 && <Text className="text-2xl font-extrabold text-ink">Qual seu nível de treino?</Text>}
          
          <View className="mt-8 space-y-4">
            {step === 4 && (
              <View className="space-y-3">
                {["INICIANTE", "INTERMEDIARIO", "AVANCADO"].map((lvl) => (
                  <Chip
                    key={lvl}
                    label={lvl}
                    selected={data.level === lvl}
                    onPress={() => setData({ ...data, level: lvl })}
                    className="py-4 justify-center"
                  />
                ))}
              </View>
            )}
            {/* Outros passos omitidos para brevidade de protótipo */}
            {step < 4 && (
               <View className="h-40 bg-paper-muted rounded-xl justify-center items-center">
                 <Text className="text-muted font-bold">Input Placeholder (Passo {step})</Text>
               </View>
            )}
          </View>
        </View>

        <Button label="Continuar" variant="primary" size="lg" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
}
