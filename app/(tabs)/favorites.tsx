import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Modal, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FavoritesScreen() {
  const [showSortModal, setShowSortModal] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const favorites = [
    { 
      id: 1, 
      title: 'Modern Villa', 
      location: 'Beverly Hills, CA', 
      price: '$2,500,000', 
      beds: 4, 
      baths: 3, 
      sqft: '3,200',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'
    },
    { 
      id: 2, 
      title: 'Luxury Penthouse', 
      location: 'Manhattan, NY', 
      price: '$4,800,000', 
      beds: 3, 
      baths: 3, 
      sqft: '2,800',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
    },
    { 
      id: 3, 
      title: 'Beach House', 
      location: 'Miami Beach, FL', 
      price: '$3,200,000', 
      beds: 5, 
      baths: 4, 
      sqft: '4,500',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={[]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {/* Header */}
      <View className="px-6 py-4 pt-16 border-b border-gray-100">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-gray-900 text-2xl font-bold">
              Saved Properties
            </Text>
            <Text className="text-gray-500 text-sm mt-1">
              {favorites.length} {favorites.length === 1 ? 'property' : 'properties'} saved
            </Text>
          </View>
          <TouchableOpacity 
            onPress={() => setShowSortModal(true)}
            className="flex-row items-center px-4 py-2 rounded-lg border border-gray-200"
          >
            <Ionicons name="options-outline" size={18} color="#6b7280" />
            <Text className="text-gray-700 text-sm font-medium ml-2">Sort</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingTop: 0, paddingBottom: 80 }}
      >
        {favorites.length > 0 ? (
          <View className="px-6 py-4">
            {favorites.map((property) => (
              <TouchableOpacity
                key={property.id}
                className="bg-white rounded-2xl mb-4 overflow-hidden border border-gray-200"
              >
                {/* Property Image */}
                <View className="relative">
                  <Image
                    source={{ uri: property.image }}
                    className="w-full h-52"
                    resizeMode="cover"
                  />
                  
                  {/* Like Button */}
                  <TouchableOpacity className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm">
                    <Ionicons name="heart" size={20} color="#ef4444" />
                  </TouchableOpacity>

                  {/* Price Badge */}
                  <View className="absolute bottom-3 left-3 bg-white px-3 py-2 rounded-lg shadow-sm">
                    <Text className="text-blue-600 text-xl font-bold">
                      {property.price}
                    </Text>
                  </View>
                </View>

                {/* Property Details */}
                <View className="p-4">
                  <Text className="text-gray-900 text-lg font-bold mb-1">
                    {property.title}
                  </Text>

                  <View className="flex-row items-center mb-3">
                    <Ionicons name="location-outline" size={16} color="#6b7280" />
                    <Text className="text-gray-500 text-sm ml-1">
                      {property.location}
                    </Text>
                  </View>

                  {/* Property Features */}
                  <View className="flex-row items-center pt-3 border-t border-gray-100">
                    <View className="flex-row items-center flex-1">
                      <Ionicons name="bed-outline" size={18} color="#6b7280" />
                      <Text className="text-gray-700 text-sm font-medium ml-1">
                        {property.beds} Beds
                      </Text>
                    </View>
                    <View className="flex-row items-center flex-1">
                      <Ionicons name="water-outline" size={18} color="#6b7280" />
                      <Text className="text-gray-700 text-sm font-medium ml-1">
                        {property.baths} Baths
                      </Text>
                    </View>
                    <View className="flex-row items-center flex-1">
                      <Ionicons name="resize-outline" size={18} color="#6b7280" />
                      <Text className="text-gray-700 text-sm font-medium ml-1">
                        {property.sqft} sqft
                      </Text>
                    </View>
                  </View>

                  {/* Action Buttons */}
                  <View className="flex-row items-center mt-4 pt-4 border-t border-gray-100">
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center py-2.5 mr-2 rounded-lg bg-blue-500">
                      <Ionicons name="call-outline" size={18} color="#ffffff" />
                      <Text className="text-white font-semibold ml-2">Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center py-2.5 ml-2 rounded-lg border border-gray-200">
                      <Ionicons name="share-outline" size={18} color="#6b7280" />
                      <Text className="text-gray-700 font-semibold ml-2">Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View className="items-center justify-center flex-1 py-20 px-6">
            <View className="bg-gray-100 rounded-full p-8 mb-6">
              <Ionicons name="heart-outline" size={56} color="#9ca3af" />
            </View>
            <Text className="text-gray-900 text-2xl font-bold mb-2 text-center">
              No Saved Properties
            </Text>
            <Text className="text-gray-500 text-center text-base mb-6 px-4">
              Browse properties and tap the heart icon to save your favorites here
            </Text>
            <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-xl">
              <Text className="text-white font-semibold text-base">Browse Properties</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Sort Modal */}
      <Modal
        visible={showSortModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowSortModal(false)}
      >
        <View className="flex-1 justify-end">
          <TouchableOpacity activeOpacity={1} className="bg-white rounded-t-3xl">
            {/* Modal Header */}
            <View className="px-6 py-4 border-b border-gray-100">
              <View className="flex-row justify-between items-center">
                <Text className="text-gray-900 text-xl font-bold">Sort By</Text>
                <TouchableOpacity 
                  onPress={() => setShowSortModal(false)}
                  className="bg-gray-100 p-2 rounded-full"
                >
                  <Ionicons name="close" size={20} color="#1f2937" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Sort Options */}
            <View className="px-6 py-4">
              {/* Newest First */}
              <TouchableOpacity
                onPress={() => {
                  setSortBy('newest');
                  setShowSortModal(false);
                }}
                className="flex-row items-center justify-between py-4 border-b border-gray-100"
              >
                <View className="flex-row items-center flex-1">
                  <View className="bg-blue-100 p-2.5 rounded-lg">
                    <Ionicons name="time" size={20} color="#3b82f6" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      Newest First
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      Recently saved properties
                    </Text>
                  </View>
                </View>
                {sortBy === 'newest' && (
                  <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                )}
              </TouchableOpacity>

              {/* Oldest First */}
              <TouchableOpacity
                onPress={() => {
                  setSortBy('oldest');
                  setShowSortModal(false);
                }}
                className="flex-row items-center justify-between py-4 border-b border-gray-100"
              >
                <View className="flex-row items-center flex-1">
                  <View className="bg-purple-100 p-2.5 rounded-lg">
                    <Ionicons name="time-outline" size={20} color="#a855f7" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      Oldest First
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      First saved properties
                    </Text>
                  </View>
                </View>
                {sortBy === 'oldest' && (
                  <Ionicons name="checkmark-circle" size={24} color="#a855f7" />
                )}
              </TouchableOpacity>

              {/* Price: Low to High */}
              <TouchableOpacity
                onPress={() => {
                  setSortBy('price-low');
                  setShowSortModal(false);
                }}
                className="flex-row items-center justify-between py-4 border-b border-gray-100"
              >
                <View className="flex-row items-center flex-1">
                  <View className="bg-green-100 p-2.5 rounded-lg">
                    <Ionicons name="arrow-up" size={20} color="#22c55e" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      Price: Low to High
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      Lowest price first
                    </Text>
                  </View>
                </View>
                {sortBy === 'price-low' && (
                  <Ionicons name="checkmark-circle" size={24} color="#22c55e" />
                )}
              </TouchableOpacity>

              {/* Price: High to Low */}
              <TouchableOpacity
                onPress={() => {
                  setSortBy('price-high');
                  setShowSortModal(false);
                }}
                className="flex-row items-center justify-between py-4 border-b border-gray-100"
              >
                <View className="flex-row items-center flex-1">
                  <View className="bg-orange-100 p-2.5 rounded-lg">
                    <Ionicons name="arrow-down" size={20} color="#f97316" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      Price: High to Low
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      Highest price first
                    </Text>
                  </View>
                </View>
                {sortBy === 'price-high' && (
                  <Ionicons name="checkmark-circle" size={24} color="#f97316" />
                )}
              </TouchableOpacity>

              {/* Property Name: A-Z */}
              <TouchableOpacity
                onPress={() => {
                  setSortBy('name-asc');
                  setShowSortModal(false);
                }}
                className="flex-row items-center justify-between py-4 border-b border-gray-100"
              >
                <View className="flex-row items-center flex-1">
                  <View className="bg-cyan-100 p-2.5 rounded-lg">
                    <Ionicons name="text" size={20} color="#06b6d4" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      Name: A-Z
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      Alphabetical order
                    </Text>
                  </View>
                </View>
                {sortBy === 'name-asc' && (
                  <Ionicons name="checkmark-circle" size={24} color="#06b6d4" />
                )}
              </TouchableOpacity>

              {/* Property Name: Z-A */}
              <TouchableOpacity
                onPress={() => {
                  setSortBy('name-desc');
                  setShowSortModal(false);
                }}
                className="flex-row items-center justify-between py-4 border-b border-gray-100"
              >
                <View className="flex-row items-center flex-1">
                  <View className="bg-indigo-100 p-2.5 rounded-lg">
                    <Ionicons name="text-outline" size={20} color="#6366f1" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      Name: Z-A
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      Reverse alphabetical
                    </Text>
                  </View>
                </View>
                {sortBy === 'name-desc' && (
                  <Ionicons name="checkmark-circle" size={24} color="#6366f1" />
                )}
              </TouchableOpacity>

              {/* Area: Largest First */}
              <TouchableOpacity
                onPress={() => {
                  setSortBy('area-large');
                  setShowSortModal(false);
                }}
                className="flex-row items-center justify-between py-4 border-b border-gray-100"
              >
                <View className="flex-row items-center flex-1">
                  <View className="bg-rose-100 p-2.5 rounded-lg">
                    <Ionicons name="expand" size={20} color="#f43f5e" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      Area: Largest First
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      Largest square footage
                    </Text>
                  </View>
                </View>
                {sortBy === 'area-large' && (
                  <Ionicons name="checkmark-circle" size={24} color="#f43f5e" />
                )}
              </TouchableOpacity>

              {/* Area: Smallest First */}
              <TouchableOpacity
                onPress={() => {
                  setSortBy('area-small');
                  setShowSortModal(false);
                }}
                className="flex-row items-center justify-between py-4 mb-4"
              >
                <View className="flex-row items-center flex-1">
                  <View className="bg-amber-100 p-2.5 rounded-lg">
                    <Ionicons name="contract" size={20} color="#f59e0b" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-gray-900 text-base font-semibold mb-1">
                      Area: Smallest First
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      Smallest square footage
                    </Text>
                  </View>
                </View>
                {sortBy === 'area-small' && (
                  <Ionicons name="checkmark-circle" size={24} color="#f59e0b" />
                )}
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
