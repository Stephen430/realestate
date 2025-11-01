import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen() {
  const [priceRange, setPriceRange] = useState('Any');
  const [propertyType, setPropertyType] = useState('All');
  const [bedrooms, setBedrooms] = useState('Any');
  const [bathrooms, setBathrooms] = useState('Any');

  return (
    <SafeAreaView className="flex-1 bg-white" edges={[]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView 
        className="flex-1 pt-12" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Header */}
        <View className="px-6 pt-4 pb-6 border-b border-gray-100">
          <Text className="text-gray-900 text-2xl font-bold mb-2">
            Find Your Property
          </Text>
          <Text className="text-gray-500 text-sm">
            Search by location, type, or price range
          </Text>
        </View>

        {/* Search Input */}
        <View className="px-6 py-6 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-semibold mb-3">
            Location
          </Text>
          <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
            <Ionicons name="search-outline" size={20} color="#6b7280" />
            <TextInput
              placeholder="Enter city, neighborhood, or ZIP code"
              placeholderTextColor="#9ca3af"
              className="flex-1 ml-3 text-gray-900 text-base"
            />
          </View>
        </View>

        {/* Property Type */}
        <View className="px-6 py-6 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-semibold mb-3">
            Property Type
          </Text>
          <View className="flex-row flex-wrap">
            {['All', 'House', 'Apartment', 'Villa', 'Condo', 'Townhouse'].map((type) => (
              <TouchableOpacity
                key={type}
                onPress={() => setPropertyType(type)}
                className={`mr-2 mb-2 px-4 py-2.5 rounded-lg ${
                  propertyType === type
                    ? 'bg-blue-500'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    propertyType === type ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Price Range */}
        <View className="px-6 py-6 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-semibold mb-3">
            Price Range
          </Text>
          <View className="flex-row flex-wrap">
            {['Any', '$0-$500k', '$500k-$1M', '$1M-$2M', '$2M-$5M', '$5M+'].map((price) => (
              <TouchableOpacity
                key={price}
                onPress={() => setPriceRange(price)}
                className={`mr-2 mb-2 px-4 py-2.5 rounded-lg ${
                  priceRange === price
                    ? 'bg-blue-500'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    priceRange === price ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bedrooms */}
        <View className="px-6 py-6 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-semibold mb-3">
            Bedrooms
          </Text>
          <View className="flex-row">
            {['Any', '1', '2', '3', '4', '5+'].map((bed) => (
              <TouchableOpacity
                key={bed}
                onPress={() => setBedrooms(bed)}
                className={`flex-1 mr-2 py-3 rounded-lg ${
                  bedrooms === bed
                    ? 'bg-blue-500'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <Text
                  className={`text-sm font-medium text-center ${
                    bedrooms === bed ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {bed}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bathrooms */}
        <View className="px-6 py-6 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-semibold mb-3">
            Bathrooms
          </Text>
          <View className="flex-row">
            {['Any', '1', '2', '3', '4', '5+'].map((bath) => (
              <TouchableOpacity
                key={bath}
                onPress={() => setBathrooms(bath)}
                className={`flex-1 mr-2 py-3 rounded-lg ${
                  bathrooms === bath
                    ? 'bg-blue-500'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <Text
                  className={`text-sm font-medium text-center ${
                    bathrooms === bath ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {bath}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Additional Features */}
        <View className="px-6 py-6 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-semibold mb-3">
            Features
          </Text>
          <View className="flex-row flex-wrap">
            {['Parking', 'Pool', 'Garden', 'Gym', 'Security', 'Elevator'].map((feature) => (
              <TouchableOpacity
                key={feature}
                className="flex-row items-center mr-4 mb-3 px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200"
              >
                <View className="w-4 h-4 rounded border border-gray-300 mr-2" />
                <Text className="text-gray-700 text-sm font-medium">{feature}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Advanced Options */}
        <View className="px-6 py-6">
          <TouchableOpacity className="flex-row items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200">
            <View className="flex-row items-center">
              <Ionicons name="options-outline" size={20} color="#3b82f6" />
              <Text className="text-blue-500 font-semibold ml-2">More Filters</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View className="px-6 pb-6">
          <TouchableOpacity className="bg-blue-500 py-4 rounded-xl mb-3">
            <Text className="text-white text-center font-bold text-base">Search Properties</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 py-4 rounded-xl border border-gray-200">
            <Text className="text-gray-700 text-center font-semibold text-base">Reset Filters</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Searches */}
        <View className="px-6 pb-8 border-t border-gray-100 pt-6">
          <Text className="text-gray-900 text-lg font-bold mb-4">
            Recent Searches
          </Text>
          {[
            { location: 'Beverly Hills, CA', filter: '$1M - $2M, 3 Beds' },
            { location: 'Manhattan, NY', filter: 'Apartment, 2 Beds' },
            { location: 'Miami Beach, FL', filter: 'Villa, $2M+' },
          ].map((search, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200 mb-2"
            >
              <View className="flex-row items-center flex-1">
                <View className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Ionicons name="time-outline" size={18} color="#3b82f6" />
                </View>
                <View className="flex-1">
                  <Text className="text-gray-900 font-semibold text-sm mb-0.5">
                    {search.location}
                  </Text>
                  <Text className="text-gray-500 text-xs">
                    {search.filter}
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
