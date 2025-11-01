import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { useEffect, useRef } from "react";
import { Animated, Dimensions, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

function TabButton({ 
  route, 
  isFocused, 
  options, 
  onPress, 
  onLongPress,
  icon,
  label 
}: any) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isFocused) {
      Animated.sequence([
        Animated.spring(scaleAnim, {
          toValue: 1.2,
          useNativeDriver: true,
          damping: 10,
          stiffness: 200,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          damping: 10,
          stiffness: 200,
        }),
      ]).start();
    }
  }, [isFocused, scaleAnim]);

  return (
    <Pressable
      key={route.key}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 items-center justify-center py-1"
    >
      <View
        className={`items-center justify-center rounded-xl px-3 py-1.5 ${
          isFocused ? "bg-blue-50" : ""
        }`}
      >
        {/* Icon */}
        <Animated.View 
          className="mb-0.5"
          style={{ transform: [{ scale: scaleAnim }] }}
        >
          {icon.type === "ionicons" ? (
            <Ionicons
              name={icon.name as any}
              size={22}
              color={isFocused ? "#3b82f6" : "#000000"}
            />
          ) : (
            <MaterialCommunityIcons
              name={icon.name as any}
              size={22}
              color={isFocused ? "#3b82f6" : "#000000"}
            />
          )}
        </Animated.View>

        {/* Label */}
        <Text
          className={`text-[10px] font-semibold ${
            isFocused ? "text-blue-500" : "text-black"
          }`}
          numberOfLines={1}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

export function AnimatedTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const tabWidth = SCREEN_WIDTH / state.routes.length;

  // Animated value for sliding indicator
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate to new position with smooth spring
    Animated.spring(slideAnim, {
      toValue: state.index * tabWidth,
      useNativeDriver: true,
      damping: 18,
      stiffness: 180,
      mass: 0.5,
    }).start();
  }, [state.index, tabWidth, slideAnim]);

  const getIconName = (
    routeName: string,
    focused: boolean
  ): {
    type: "ionicons" | "material";
    name: string;
  } => {
    const icons: Record<
      string,
      { type: "ionicons" | "material"; focused: string; unfocused: string }
    > = {
      index: {
        type: "ionicons",
        focused: "home",
        unfocused: "home-outline",
      },
      search: {
        type: "ionicons",
        focused: "search",
        unfocused: "search-outline",
      },
      favorites: {
        type: "ionicons",
        focused: "heart",
        unfocused: "heart-outline",
      },
      profile: {
        type: "ionicons",
        focused: "person",
        unfocused: "person-outline",
      },
    };

    const icon = icons[routeName] || icons.index;
    return {
      type: icon.type,
      name: focused ? icon.focused : icon.unfocused,
    };
  };

  const getLabel = (routeName: string): string => {
    const labels: Record<string, string> = {
      index: "Home",
      search: "Search",
      favorites: "Favorites",
      profile: "Profile",
    };
    return labels[routeName] || routeName;
  };

  return (
    <SafeAreaView edges={[]} className="absolute bottom-0 left-0 right-0">
      <BlurView
        intensity={80}
        tint="light"
        className="overflow-hidden"
        style={{
          borderTopWidth: 0.5,
          borderTopColor: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Tab Buttons */}
        <View className="flex-row items-center justify-around pt-2 pb-6">
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            const icon = getIconName(route.name, isFocused);
            const label = getLabel(route.name);

            return (
              <TabButton
                key={route.key}
                route={route}
                isFocused={isFocused}
                options={options}
                onPress={onPress}
                onLongPress={onLongPress}
                icon={icon}
                label={label}
              />
            );
          })}
        </View>
      </BlurView>
    </SafeAreaView>
  );
}
