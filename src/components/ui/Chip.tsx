import React from "react";
import { TouchableOpacity, Text } from "react-native";
import * as Haptics from "expo-haptics";

export interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  icon?: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onPress,
  icon,
  size = "md",
  className = "",
}) => {
  const handlePress = () => {
    Haptics.selectionAsync();
    if (onPress) onPress();
  };

  const baseStyle = selected
    ? "bg-ink border-ink text-white"
    : "bg-paper-card border-line text-muted active:bg-paper-muted";

  const sizeStyle = size === "sm" ? "px-3 py-1.5 rounded-full text-xs" : "px-4 py-2.5 rounded-full text-sm";

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      className={`flex-row items-center border ${baseStyle} ${sizeStyle} ${className}`}
    >
      {icon && <TouchableOpacity className="mr-1.5">{icon}</TouchableOpacity>}
      <Text
        className={`font-semibold ${
          selected ? "text-white font-bold" : "text-ink"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
