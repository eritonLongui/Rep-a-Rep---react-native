import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { useUserStore } from "@/stores/useUserStore";
import { Check, X } from "lucide-react-native";

export default function PlansScreen() {
  const user = useUserStore((s) => s.user);

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Assinaturas" />
      <ScrollView className="flex-1 px-6 pt-6 pb-8">
        <View className="bg-paper-card rounded-2xl border border-line p-6 mb-6">
           <Text className="text-xl font-extrabold text-ink mb-1">Seu Plano: Free</Text>
           <Text className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">
             {user.monthlyBuildsUsed} de 4 montagens utilizadas
           </Text>
           <View className="w-full h-2 bg-line rounded-full overflow-hidden">
             <View style={{ width: `${(user.monthlyBuildsUsed / 4) * 100}%` }} className="h-full bg-brand-blue" />
           </View>
        </View>

        <Text className="text-sm font-bold text-ink mb-4">Upgrade para Premium</Text>
        <View className="bg-ink rounded-2xl p-6 space-y-4">
            <View className="flex-row items-center space-x-3">
              <Check size={20} color="#20A575" />
              <Text className="text-white font-semibold">Montagens ilimitadas</Text>
            </View>
            <View className="flex-row items-center space-x-3">
              <Check size={20} color="#20A575" />
              <Text className="text-white font-semibold">Cenários exclusivos</Text>
            </View>
            <Button label="Assinar Premium" variant="primary" size="lg" className="mt-4" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
