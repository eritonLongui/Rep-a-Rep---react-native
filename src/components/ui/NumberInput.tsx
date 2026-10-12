import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Minus, Plus } from "lucide-react-native";
import * as Haptics from "expo-haptics";

export interface NumberInputProps {
  value: number;
  onChange: (val: number) => void;
  step?: number;
  min?: number;
  max?: number;
  unit?: string;
  label?: string;
  className?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  step = 1,
  min = 0,
  max = 999,
  unit,
  label,
  className = "",
}) => {
  const handleDecrement = () => {
    if (value - step >= min) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onChange(Number((value - step).toFixed(1)));
    }
  };

  const handleIncrement = () => {
    if (value + step <= max) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onChange(Number((value + step).toFixed(1)));
    }
  };

  return (
    <View className={`flex-col ${className}`}>
      {label && <Text className="text-xs font-semibold text-muted mb-1">{label}</Text>}
      <View className="flex-row items-center bg-paper-card border border-line rounded-xl p-1">
        <TouchableOpacity
          onPress={handleDecrement}
          disabled={value <= min}
          className={`w-9 h-9 items-center justify-center rounded-lg bg-paper-muted ${
            value <= min ? "opacity-40" : "active:bg-line"
          }`}
        >
          <Minus size={16} color="#121318" />
        </TouchableOpacity>

        <View className="flex-1 flex-row items-center justify-center px-2">
          <TextInput
            keyboardType="numeric"
            value={String(value)}
            onChangeText={(txt) => {
              const parsed = parseFloat(txt.replace(",", "."));
              if (!isNaN(parsed)) {
                onChange(parsed);
              } else if (txt === "") {
                onChange(0);
              }
            }}
            className="text-base font-bold text-ink text-center min-w-[36px]"
          />
          {unit && <Text className="text-xs font-semibold text-muted ml-0.5">{unit}</Text>}
        </View>

        <TouchableOpacity
          onPress={handleIncrement}
          disabled={value >= max}
          className={`w-9 h-9 items-center justify-center rounded-lg bg-paper-muted ${
            value >= max ? "opacity-40" : "active:bg-line"
          }`}
        >
          <Plus size={16} color="#121318" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
