import React from "react";
import { View, Text } from "react-native";

export interface ProgressBarProps {
  progress: number; // 0 to 1
  height?: number;
  showPercentage?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 8,
  showPercentage = false,
  className = "",
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  const percentageText = `${Math.round(clampedProgress * 100)}%`;

  return (
    <View className={`w-full ${className}`}>
      {showPercentage && (
        <View className="flex-row justify-between mb-1.5">
          <Text className="text-xs font-bold text-muted">Progresso</Text>
          <Text className="text-xs font-bold text-brand-blue">{percentageText}</Text>
        </View>
      )}
      <View
        style={{ height }}
        className="w-full bg-line rounded-full overflow-hidden"
      >
        <View
          style={{
            width: `${clampedProgress * 100}%`,
            height: "100%",
          }}
          className="bg-brand-blue rounded-full"
        />
      </View>
    </View>
  );
};
