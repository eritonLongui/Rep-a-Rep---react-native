import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Avatar } from "./Avatar";

export interface AppHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showAvatar?: boolean;
  userAvatar?: string | null;
  rightAction?: React.ReactNode;
  className?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  showBack = false,
  onBack,
  showAvatar = true,
  userAvatar,
  rightAction,
  className = "",
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  const handleOpenProfile = () => {
    router.push("/profile" as any);
  };

  return (
    <View className={`w-full flex-row items-center justify-between px-4 py-3 bg-paper border-b border-line/40 ${className}`}>
      <View className="flex-row items-center space-x-2 flex-1">
        {showBack && (
          <TouchableOpacity
            onPress={handleBack}
            className="w-10 h-10 items-center justify-center rounded-full bg-paper-card border border-line mr-2 active:bg-paper-muted"
          >
            <ChevronLeft size={22} color="#121318" />
          </TouchableOpacity>
        )}
        {title ? (
          <Text className="text-lg font-extrabold text-ink tracking-tight numberOfLines={1}">
            {title}
          </Text>
        ) : (
          <View className="flex-row items-center">
            <Text className="text-xl font-extrabold text-ink tracking-tight">
              Rep<Text className="text-brand-blue">a</Text>Rep
            </Text>
          </View>
        )}
      </View>

      <View className="flex-row items-center space-x-2">
        {rightAction}
        {showAvatar && (
          <Avatar
            size="sm"
            source={userAvatar}
            onPress={handleOpenProfile}
          />
        )}
      </View>
    </View>
  );
};
