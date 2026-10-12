import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { AppHeader } from "@/components/ui/AppHeader";
import { Trophy, Heart, Share2, Users } from "lucide-react-native";

export default function CommunityFeedScreen() {
  const posts = [
    { id: "1", author: "Mariana Costa", action: "concluiu o desafio de 12 treinos", time: "Há 2h", likes: 14 },
    { id: "2", author: "Carlos Lima", action: "atingiu o marco REP 050", time: "Há 5h", likes: 28 },
  ];

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader />
      <ScrollView className="flex-1 px-4 pt-4 space-y-4">
        {/* Challenge Banner */}
        <View className="bg-brand-blue rounded-3xl p-6 text-white mb-2">
           <Text className="text-white/80 font-bold text-xs uppercase tracking-widest mb-1">Desafio Oficial</Text>
           <Text className="text-white text-xl font-extrabold mb-3">12 Treinos em 30 Dias</Text>
           <TouchableOpacity className="bg-white px-4 py-2.5 rounded-xl self-start">
             <Text className="text-brand-blue font-bold text-sm">Ver Detalhes</Text>
           </TouchableOpacity>
        </View>

        <Text className="text-xs font-bold text-muted uppercase tracking-widest mb-2">Feed da Comunidade</Text>

        {posts.map((post) => (
          <View key={post.id} className="bg-paper-card border border-line rounded-2xl p-4 space-y-3">
             <View className="flex-row items-center justify-between">
               <View className="flex-row items-center space-x-3">
                 <View className="w-10 h-10 rounded-full bg-paper-muted items-center justify-center">
                   <Users size={20} color="#6F7280" />
                 </View>
                 <View>
                   <Text className="font-bold text-ink">{post.author}</Text>
                   <Text className="text-xs text-muted">{post.time}</Text>
                 </View>
               </View>
             </View>

             <Text className="text-sm font-semibold text-ink">{post.action}</Text>

             <View className="flex-row space-x-6 pt-2 border-t border-line">
               <TouchableOpacity className="flex-row items-center space-x-1">
                 <Heart size={18} color="#6F7280" />
                 <Text className="text-xs font-bold text-muted">{post.likes}</Text>
               </TouchableOpacity>
               <TouchableOpacity className="flex-row items-center space-x-1">
                 <Share2 size={18} color="#6F7280" />
                 <Text className="text-xs font-bold text-muted">Compartilhar</Text>
               </TouchableOpacity>
             </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
