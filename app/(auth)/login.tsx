import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { useUserStore } from "@/stores/useUserStore";
import { Mail, Lock, User, ArrowRight } from "lucide-react-native";

export default function LoginScreen() {
  const router = useRouter();
  const updateUser = useUserStore((s) => s.updateUser);
  const setGuestMode = useUserStore((s) => s.setGuestMode);

  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!email || !password || (isRegister && !name)) {
      Alert.alert("Atenção", "Preencha todos os campos obrigatórios para continuar.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGuestMode(false);
      updateUser({
        name: name || "Atleta Rep",
        isGuest: false,
      });
      router.push("/(auth)/onboarding" as any);
    }, 800);
  };

  const handleSocialAuth = (provider: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGuestMode(false);
      updateUser({
        name: `Atleta ${provider}`,
        isGuest: false,
      });
      router.push("/(auth)/onboarding" as any);
    }, 600);
  };

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader showBack title={isRegister ? "Criar Conta" : "Entrar no Rep a Rep"} />

      <View className="flex-1 px-6 pt-6 justify-between pb-8">
        <View className="space-y-6">
          <View className="flex-row bg-paper-muted p-1 rounded-xl">
            <TouchableOpacity
              onPress={() => setIsRegister(true)}
              className={`flex-1 py-3 rounded-lg items-center ${
                isRegister ? "bg-paper-card shadow-sm" : ""
              }`}
            >
              <Text className={`font-bold text-sm ${isRegister ? "text-ink" : "text-muted"}`}>
                Criar Conta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsRegister(false)}
              className={`flex-1 py-3 rounded-lg items-center ${
                !isRegister ? "bg-paper-card shadow-sm" : ""
              }`}
            >
              <Text className={`font-bold text-sm ${!isRegister ? "text-ink" : "text-muted"}`}>
                Já tenho conta
              </Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-4">
            {isRegister && (
              <View className="space-y-1">
                <Text className="text-xs font-bold text-muted uppercase tracking-widest">Nome</Text>
                <View className="flex-row items-center bg-paper-card border border-line rounded-xl px-4 py-3.5 space-x-3">
                  <User size={18} color="#6F7280" />
                  <TextInput
                    placeholder="Seu nome ou apelido"
                    placeholderTextColor="#9CA3AF"
                    value={name}
                    onChangeText={setName}
                    className="flex-1 text-base font-semibold text-ink"
                  />
                </View>
              </View>
            )}

            <View className="space-y-1">
              <Text className="text-xs font-bold text-muted uppercase tracking-widest">E-mail</Text>
              <View className="flex-row items-center bg-paper-card border border-line rounded-xl px-4 py-3.5 space-x-3">
                <Mail size={18} color="#6F7280" />
                <TextInput
                  placeholder="seu.email@exemplo.com"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                  className="flex-1 text-base font-semibold text-ink"
                />
              </View>
            </View>

            <View className="space-y-1">
              <Text className="text-xs font-bold text-muted uppercase tracking-widest">Senha</Text>
              <View className="flex-row items-center bg-paper-card border border-line rounded-xl px-4 py-3.5 space-x-3">
                <Lock size={18} color="#6F7280" />
                <TextInput
                  placeholder="Sua senha secreta"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  className="flex-1 text-base font-semibold text-ink"
                />
              </View>
            </View>

            <Button
              label={isRegister ? "Cadastrar e Começar" : "Entrar"}
              variant="primary"
              size="lg"
              loading={loading}
              icon={<ArrowRight size={20} color="#FFF" />}
              iconPosition="right"
              onPress={handleSubmit}
              className="mt-2"
            />
          </View>

          <View className="space-y-3 pt-4 border-t border-line/60">
            <Text className="text-xs font-bold text-muted text-center uppercase tracking-widest">
              Ou continue com
            </Text>

            <View className="flex-row space-x-3">
              <TouchableOpacity
                onPress={() => handleSocialAuth("Google")}
                className="flex-1 py-3.5 bg-paper-card border border-line rounded-xl items-center justify-center active:bg-paper-muted"
              >
                <Text className="font-bold text-ink text-sm">Google</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSocialAuth("Apple")}
                className="flex-1 py-3.5 bg-ink text-white rounded-xl items-center justify-center active:bg-ink-2"
              >
                <Text className="font-bold text-white text-sm">Apple</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text className="text-[11px] font-medium text-muted text-center">
          Simulação de autenticação para fins de protótipo de MVP.
        </Text>
      </View>
    </SafeAreaView>
  );
}
