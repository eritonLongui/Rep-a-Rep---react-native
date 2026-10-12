import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components/ui/AppHeader";
import { useWorkoutStore } from "@/stores/useWorkoutStore";
import { NumberInput } from "@/components/ui/NumberInput";
import { Timer, Check, ChevronRight } from "lucide-react-native";
import * as Haptics from "expo-haptics";

export default function ActiveWorkoutScreen() {
  const router = useRouter();
  const { activeWorkout, updateSet, finishWorkout } = useWorkoutStore();

  if (!activeWorkout) return null;

  const activeExercise = activeWorkout.exercises[activeWorkout.currentExerciseIndex];

  const toggleSetCompleted = (setIndex: number) => {
    const set = activeExercise.sets[setIndex];
    Haptics.selectionAsync();
    updateSet(activeWorkout.currentExerciseIndex, setIndex, { completed: !set.completed });
  };

  const handleFinish = () => {
    finishWorkout();
    router.push("/workout/summary" as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-paper">
      <AppHeader
        showBack
        title={activeExercise.name}
        rightAction={
          <TouchableOpacity onPress={() => router.push("/workout/rest-modal" as any)} className="bg-paper-muted p-2 rounded-full">
            <Timer size={20} color="#121318" />
          </TouchableOpacity>
        }
      />
      
      <View className="flex-1 px-4 pt-6">
        <View className="flex-row items-center justify-between mb-6 bg-paper-card p-4 rounded-xl border border-line">
           <Text className="text-sm font-bold text-muted uppercase">Anterior</Text>
           <Text className="text-sm font-bold text-ink">
             {activeExercise.previousRecord 
               ? `${activeExercise.previousRecord.weight}kg x ${activeExercise.previousRecord.reps}` 
               : "N/A"}
           </Text>
        </View>

        <FlatList
          data={activeExercise.sets}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View className={`mb-3 p-4 rounded-xl border flex-row items-center ${item.completed ? 'bg-success-soft border-success' : 'bg-paper-card border-line'}`}>
              <Text className="w-8 font-bold text-ink mr-4">#{index + 1}</Text>
              <View className="flex-1 flex-row space-x-4">
                <NumberInput value={item.weight} onChange={(val) => updateSet(activeWorkout.currentExerciseIndex, index, { weight: val })} unit="kg" />
                <NumberInput value={item.reps} onChange={(val) => updateSet(activeWorkout.currentExerciseIndex, index, { reps: val })} unit="rep" />
              </View>
              <TouchableOpacity onPress={() => toggleSetCompleted(index)} className={`ml-4 w-12 h-12 rounded-xl items-center justify-center ${item.completed ? 'bg-success' : 'bg-line'}`}>
                <Check size={24} color="#FFF" />
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity onPress={handleFinish} className="mt-4 bg-brand-blue p-4 rounded-2xl items-center">
            <Text className="text-white font-extrabold text-lg">Finalizar Treino</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
