import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import * as Haptics from "expo-haptics";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  label: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  enableHaptics?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  label,
  loading = false,
  icon,
  iconPosition = "left",
  enableHaptics = true,
  disabled,
  onPress,
  className = "",
  ...props
}) => {
  const handlePress = (e: any) => {
    if (enableHaptics) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    if (onPress) onPress(e);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-brand-blue active:bg-brand-blue-dark text-white";
      case "secondary":
        return "bg-ink text-white active:bg-ink-2";
      case "ghost":
        return "bg-transparent text-ink active:bg-paper-muted";
      case "danger":
        return "bg-danger text-white active:bg-red-700";
      case "outline":
        return "bg-transparent border border-line text-ink active:bg-paper";
      default:
        return "bg-brand-blue text-white";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3 py-2 rounded-lg text-xs font-semibold";
      case "md":
        return "px-5 py-3.5 rounded-xl text-sm font-bold";
      case "lg":
        return "px-6 py-4 rounded-2xl text-base font-extrabold";
      default:
        return "px-5 py-3.5 rounded-xl text-sm font-bold";
    }
  };

  const getTextColor = () => {
    if (variant === "ghost" || variant === "outline") return "text-ink";
    return "text-white";
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={handlePress}
      className={`flex-row items-center justify-center space-x-2 ${getVariantStyles()} ${getSizeStyles()} ${
        disabled ? "opacity-50" : ""
      } ${className}`}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "ghost" || variant === "outline" ? "#121318" : "#FFFFFF"}
        />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          <Text className={`font-bold ${getTextColor()} text-center`}>
            {label}
          </Text>
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </TouchableOpacity>
  );
};
