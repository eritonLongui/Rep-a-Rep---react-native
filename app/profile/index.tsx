import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Avatar } from "@/components/ui/Avatar";
import { useUserStore } from "@/stores/useUserStore";
import { Trophy, TrendingUp, Users, Settings, Shield, ChevronRight } from "lucide-react-native";

export default function ProfileScreen() {
  const router = useRouter();
  const user = useUserStore((s) => s.user);

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Meu Perfil" />
      <ScrollView className="flex-1 px-6 pt-6 space-y-6">
        {/* User Card */}
        <View className="bg-paper-card p-6 rounded-3xl border border-line items-center">
          <Avatar size="xl" className="mb-4" />
          <Text className="text-xl font-extrabold text-ink">{user.name}</Text>
          <Text className="text-xs font-bold text-brand-blue mt-1 uppercase tracking-widest">
            {user.repMilestone}
          </Text>
        </View>

        {/* Shortcuts */}
        <View className="bg-paper-card rounded-2xl border border-line overflow-hidden">
          {[
            { title: "Evolução & Gráficos", icon: TrendingUp, route: "/profile/progress" },
            { title: "Personalização de Perfil", icon: Trophy, route: "/profile/customize" },
            { title: "Planos e Limites", icon: Shield, route: "/profile/plans" },
            { title: "Configurações e Termos", icon: Settings, route: "/profile/settings" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => router.push(item.route as any)}
                className="flex-row items-center justify-between p-4 border-b border-line last:border-0 active:bg-paper-muted"
              >
                <View className="flex-row items-center space-x-3">
                  <View className="w-10 h-10 rounded-xl bg-paper-muted items-center justify-center">
                    <Icon size={20} color="#3759F9" />
                  </View>
                  <Text className="font-bold text-ink">{item.title}</Text>
                </View>
                <ChevronRight size={18} color="#9CA3AF" />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
