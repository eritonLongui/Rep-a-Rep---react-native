import React from "react";
import { View, Text, SafeAreaView, ScrollView, Switch } from "react-native";
import { AppHeader } from "@/components/ui/AppHeader";
import { ShieldAlert, Bell, Lock } from "lucide-react-native";

export default function SettingsScreen() {
  const [notif, setNotif] = React.useState(true);

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title="Configurações & Termos" />
      <ScrollView className="flex-1 px-6 pt-6 space-y-6">
        <View className="bg-paper-card p-5 rounded-2xl border border-line flex-row items-center justify-between">
           <View className="flex-row items-center space-x-3">
             <Bell size={20} color="#3759F9" />
             <Text className="font-bold text-ink">Notificações e Lembretes</Text>
           </View>
           <Switch value={notif} onValueChange={setNotif} />
        </View>

        {/* Health Disclaimer */}
        <View className="bg-brand-violet-soft/60 border border-brand-purple/20 p-5 rounded-2xl space-y-2">
           <View className="flex-row items-center space-x-2">
             <ShieldAlert size={20} color="#7B4DF7" />
             <Text className="font-extrabold text-ink">Aviso de Responsabilidade em Saúde</Text>
           </View>
           <Text className="text-xs font-medium text-ink leading-relaxed">
             O Rep a Rep é uma ferramenta de organização e acompanhamento de treinos. Ele não substitui a orientação individualizada de um profissional de educação física ou avaliação médica.
           </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
