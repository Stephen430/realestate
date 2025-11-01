import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SavedPropertiesScreen() {
  const router = useRouter();
  const [likedProperties, setLikedProperties] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const savedProperties = [
    {
      id: 1,
      title: 'Modern Villa',
      location: 'Beverly Hills, CA',
      price: '$4,200,000',
      beds: 5,
      baths: 4,
      sqft: '4,500',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      rating: 4.8,
      type: 'For Sale',
      agent: 'Sarah Johnson',
    },
    {
      id: 2,
      title: 'Luxury Apartment',
      location: 'Manhattan, NY',
      price: '$3,500,000',
      beds: 3,
      baths: 3,
      sqft: '2,400',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      rating: 4.9,
      type: 'For Sale',
      agent: 'Michael Chen',
    },
    {
      id: 3,
      title: 'Beach House',
      location: 'Miami Beach, FL',
      price: '$2,800,000',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      rating: 4.7,
      type: 'For Sale',
      agent: 'Emily Rodriguez',
    },
    {
      id: 4,
      title: 'Mountain Cabin',
      location: 'Aspen, CO',
      price: '$1,950,000',
      beds: 3,
      baths: 2,
      sqft: '2,100',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      rating: 4.6,
      type: 'For Sale',
      agent: 'David Wilson',
    },
    {
      id: 5,
      title: 'Downtown Loft',
      location: 'San Francisco, CA',
      price: '$2,200,000',
      beds: 2,
      baths: 2,
      sqft: '1,800',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      rating: 4.5,
      type: 'For Rent',
      agent: 'Lisa Anderson',
    },
    {
      id: 6,
      title: 'Suburban Home',
      location: 'Austin, TX',
      price: '$850,000',
      beds: 4,
      baths: 3,
      sqft: '2,800',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      rating: 4.4,
      type: 'For Sale',
      agent: 'James Martinez',
    },
    {
      id: 7,
      title: 'Penthouse Suite',
      location: 'Chicago, IL',
      price: '$5,500,000',
      beds: 4,
      baths: 4,
      sqft: '3,800',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      rating: 5.0,
      type: 'For Sale',
      agent: 'Patricia White',
    },
    {
      id: 8,
      title: 'Country Estate',
      location: 'Nashville, TN',
      price: '$3,100,000',
      beds: 6,
      baths: 5,
      sqft: '5,200',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      rating: 4.9,
      type: 'For Sale',
      agent: 'Robert Brown',
    },
    {
      id: 9,
      title: 'Lakeside Retreat',
      location: 'Seattle, WA',
      price: '$2,750,000',
      beds: 3,
      baths: 3,
      sqft: '2,600',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800',
      rating: 4.7,
      type: 'For Sale',
      agent: 'Jennifer Davis',
    },
    {
      id: 10,
      title: 'Urban Studio',
      location: 'Brooklyn, NY',
      price: '$1,200,000',
      beds: 1,
      baths: 1,
      sqft: '850',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      rating: 4.3,
      type: 'For Sale',
      agent: 'William Moore',
    },
    {
      id: 11,
      title: 'Historic Mansion',
      location: 'Boston, MA',
      price: '$6,800,000',
      beds: 8,
      baths: 6,
      sqft: '7,500',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      rating: 4.8,
      type: 'For Sale',
      agent: 'Elizabeth Taylor',
    },
    {
      id: 12,
      title: 'Modern Condo',
      location: 'Denver, CO',
      price: '$1,450,000',
      beds: 2,
      baths: 2,
      sqft: '1,400',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800',
      rating: 4.6,
      type: 'For Rent',
      agent: 'Thomas Jackson',
    },
  ];

  const toggleLike = (id: number) => {
    setLikedProperties((prev) =>
      prev.includes(id) ? prev.filter((propId) => propId !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={[]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="bg-gray-100 p-2 rounded-full"
        >
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        <Text className="text-gray-900 text-xl font-bold">Saved Properties</Text>
        <View className="w-10" />
      </View>

      {/* Summary Stats */}
      <View className="px-6 py-4 bg-blue-50 border-b border-blue-100">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-gray-600 text-sm mb-1">Total Saved</Text>
            <Text className="text-gray-900 text-2xl font-bold">{likedProperties.length} Properties</Text>
          </View>
          <View className="bg-blue-500 rounded-full p-3">
            <Ionicons name="heart" size={20} color="#ffffff" />
          </View>
        </View>
      </View>

      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="px-6 py-4">
          {savedProperties.map((property) => (
            <View
              key={property.id}
              className="bg-white rounded-2xl mb-4 overflow-hidden border border-gray-200 shadow-sm"
            >
              {/* Property Image */}
              <View className="relative">
                <Image
                  source={{ uri: property.image }}
                  className="w-full h-52"
                  resizeMode="cover"
                />
                
                {/* Like Button */}
                <TouchableOpacity
                  onPress={() => toggleLike(property.id)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm"
                >
                  <Ionicons
                    name={likedProperties.includes(property.id) ? 'heart' : 'heart-outline'}
                    size={20}
                    color={likedProperties.includes(property.id) ? '#ef4444' : '#6b7280'}
                  />
                </TouchableOpacity>

                {/* Type Badge */}
                <View className="absolute top-3 left-3 bg-blue-500 px-3 py-1.5 rounded-lg">
                  <Text className="text-white text-xs font-bold">
                    {property.type}
                  </Text>
                </View>

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

                {/* Agent Info */}
                <View className="flex-row items-center mt-3 pt-3 border-t border-gray-100">
                  <View className="bg-blue-100 w-8 h-8 rounded-full items-center justify-center">
                    <Ionicons name="person" size={16} color="#3b82f6" />
                  </View>
                  <View className="ml-2 flex-1">
                    <Text className="text-gray-500 text-xs">Agent</Text>
                    <Text className="text-gray-900 text-sm font-semibold">
                      {property.agent}
                    </Text>
                  </View>
                  <View className="flex-row items-center bg-amber-50 px-2 py-1 rounded-lg">
                    <Ionicons name="star" size={14} color="#f59e0b" />
                    <Text className="text-amber-600 text-sm font-semibold ml-1">
                      {property.rating}
                    </Text>
                  </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row mt-3 pt-3 border-t border-gray-100">
                  <TouchableOpacity className="flex-1 bg-blue-500 py-2.5 rounded-lg mr-2">
                    <Text className="text-white text-center font-semibold text-sm">
                      View Details
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 bg-blue-50 py-2.5 rounded-lg ml-2">
                    <Text className="text-blue-600 text-center font-semibold text-sm">
                      Contact Agent
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          {/* Empty State */}
          {savedProperties.length === 0 && (
            <View className="items-center py-12">
              <View className="bg-gray-100 rounded-full p-8 mb-4">
                <Ionicons name="heart-outline" size={64} color="#9ca3af" />
              </View>
              <Text className="text-gray-900 text-lg font-bold mb-2">
                No Saved Properties
              </Text>
              <Text className="text-gray-500 text-sm text-center mb-6">
                Start exploring and save your favorite properties
              </Text>
              <TouchableOpacity 
                className="bg-blue-500 px-6 py-3 rounded-xl"
                onPress={() => router.back()}
              >
                <Text className="text-white font-semibold">
                  Explore Properties
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
