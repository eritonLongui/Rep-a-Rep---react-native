import React from "react";
import { View, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { User } from "lucide-react-native";

export interface AvatarProps {
  source?: ImageSourcePropType | string | null;
  size?: "sm" | "md" | "lg" | "xl";
  onPress?: () => void;
  badge?: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  source,
  size = "md",
  onPress,
  badge,
  className = "",
}) => {
  const getSizePixels = () => {
    switch (size) {
      case "sm":
        return 34;
      case "md":
        return 42;
      case "lg":
        return 64;
      case "xl":
        return 86;
      default:
        return 42;
    }
  };

  const dim = getSizePixels();

  const content = (
    <View
      style={{ width: dim, height: dim }}
      className={`rounded-full bg-paper-muted border border-line items-center justify-center overflow-hidden relative ${className}`}
    >
      {source ? (
        <Image
          source={typeof source === "string" ? { uri: source } : source}
          style={{ width: dim, height: dim }}
          className="rounded-full"
          resizeMode="cover"
        />
      ) : (
        <User size={dim * 0.5} color="#6F7280" />
      )}
      {badge && (
        <View className="absolute bottom-0 right-0 z-10">{badge}</View>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};
