import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue } from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // TabBar
  'house.fill': 'home',
  'magnifyingglass': 'search',
  'heart.fill': 'favorite',
  'heart': 'favorite-border',
  'person.fill': 'person',
  
  // Home Screen
  'location.fill': 'location-on',
  'bell.fill': 'notifications',
  'chevron.down': 'keyboard-arrow-down',
  'slider.horizontal.3': 'tune',
  'bed.double.fill': 'bed',
  'shower.fill': 'shower',
  'square.fill': 'square-foot',
  
  // Search Screen
  'clock.fill': 'schedule',
  'chevron.right': 'chevron-right',
  
  // Profile Screen
  'person.circle': 'account-circle',
  'house.circle': 'home',
  'bell.circle': 'notifications',
  'creditcard.circle': 'credit-card',
  'lock.circle': 'lock',
  'questionmark.circle': 'help',
  'moon.circle': 'dark-mode',
  'globe': 'language',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: any;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
