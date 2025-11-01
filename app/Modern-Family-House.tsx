import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PropertyDetailsScreen() {
  const router = useRouter();

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
        <Text className="text-gray-900 text-xl font-bold">Property Details</Text>
        <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
          <Ionicons name="share-outline" size={24} color="#1f2937" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Property Image Gallery */}
        <View className="relative">
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' }}
            className="w-full h-80"
            resizeMode="cover"
          />
          
          {/* Status Badge */}
          <View className="absolute top-4 right-4 bg-green-500 px-4 py-2 rounded-xl">
            <Text className="text-white text-sm font-bold">Active</Text>
          </View>

          {/* Image Counter */}
          <View className="absolute bottom-4 right-4 bg-black/70 px-3 py-2 rounded-lg">
            <Text className="text-white text-xs font-semibold">1 / 8</Text>
          </View>

          {/* Edit Button */}
          <TouchableOpacity className="absolute top-4 left-4 bg-white/90 p-2.5 rounded-full">
            <Ionicons name="create-outline" size={22} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        <View className="px-6 py-6">
          {/* Price and Title */}
          <View className="mb-6">
            <Text className="text-blue-600 text-3xl font-bold mb-2">
              $2,500,000
            </Text>
            <Text className="text-gray-900 text-2xl font-bold mb-2">
              Modern Family House
            </Text>
            <View className="flex-row items-center">
              <Ionicons name="location" size={18} color="#6b7280" />
              <Text className="text-gray-600 text-base ml-1">
                Beverly Hills, CA
              </Text>
            </View>
          </View>

          {/* Performance Stats */}
          <View className="bg-gray-50 rounded-2xl p-4 mb-6">
            <Text className="text-gray-900 text-base font-bold mb-3">
              Performance
            </Text>
            <View className="flex-row justify-around">
              <View className="items-center">
                <View className="bg-blue-100 rounded-full p-3 mb-2">
                  <Ionicons name="eye" size={24} color="#3b82f6" />
                </View>
                <Text className="text-gray-900 text-lg font-bold">1,234</Text>
                <Text className="text-gray-500 text-xs mt-1">Views</Text>
              </View>
              <View className="items-center">
                <View className="bg-green-100 rounded-full p-3 mb-2">
                  <Ionicons name="chatbubble" size={24} color="#22c55e" />
                </View>
                <Text className="text-gray-900 text-lg font-bold">45</Text>
                <Text className="text-gray-500 text-xs mt-1">Inquiries</Text>
              </View>
              <View className="items-center">
                <View className="bg-orange-100 rounded-full p-3 mb-2">
                  <Ionicons name="heart" size={24} color="#f97316" />
                </View>
                <Text className="text-gray-900 text-lg font-bold">89</Text>
                <Text className="text-gray-500 text-xs mt-1">Favorites</Text>
              </View>
              <View className="items-center">
                <View className="bg-purple-100 rounded-full p-3 mb-2">
                  <Ionicons name="share-social" size={24} color="#a855f7" />
                </View>
                <Text className="text-gray-900 text-lg font-bold">23</Text>
                <Text className="text-gray-500 text-xs mt-1">Shares</Text>
              </View>
            </View>
          </View>

          {/* Property Features */}
          <View className="mb-6">
            <Text className="text-gray-900 text-base font-bold mb-3">
              Property Features
            </Text>
            <View className="flex-row flex-wrap">
              <View className="bg-white rounded-xl p-4 mr-3 mb-3 border border-gray-200 w-[30%]">
                <Ionicons name="bed" size={28} color="#3b82f6" />
                <Text className="text-gray-900 text-xl font-bold mt-2">4</Text>
                <Text className="text-gray-500 text-xs mt-1">Bedrooms</Text>
              </View>
              <View className="bg-white rounded-xl p-4 mr-3 mb-3 border border-gray-200 w-[30%]">
                <Ionicons name="water" size={28} color="#3b82f6" />
                <Text className="text-gray-900 text-xl font-bold mt-2">3</Text>
                <Text className="text-gray-500 text-xs mt-1">Bathrooms</Text>
              </View>
              <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200 w-[30%]">
                <Ionicons name="resize" size={28} color="#3b82f6" />
                <Text className="text-gray-900 text-xl font-bold mt-2">3,200</Text>
                <Text className="text-gray-500 text-xs mt-1">Sqft</Text>
              </View>
              <View className="bg-white rounded-xl p-4 mr-3 mb-3 border border-gray-200 w-[30%]">
                <Ionicons name="car" size={28} color="#3b82f6" />
                <Text className="text-gray-900 text-xl font-bold mt-2">2</Text>
                <Text className="text-gray-500 text-xs mt-1">Garage</Text>
              </View>
              <View className="bg-white rounded-xl p-4 mr-3 mb-3 border border-gray-200 w-[30%]">
                <Ionicons name="calendar" size={28} color="#3b82f6" />
                <Text className="text-gray-900 text-xl font-bold mt-2">2020</Text>
                <Text className="text-gray-500 text-xs mt-1">Built</Text>
              </View>
              <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200 w-[30%]">
                <Ionicons name="checkbox" size={28} color="#3b82f6" />
                <Text className="text-gray-900 text-xl font-bold mt-2">Yes</Text>
                <Text className="text-gray-500 text-xs mt-1">Furnished</Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View className="mb-6">
            <Text className="text-gray-900 text-base font-bold mb-3">
              Description
            </Text>
            <Text className="text-gray-600 text-sm leading-6">
              Welcome to this stunning modern family house in the heart of Beverly Hills. This beautifully designed 4-bedroom, 3-bathroom home offers the perfect blend of luxury and comfort. 
              {'\n\n'}
              The open-concept living area features floor-to-ceiling windows that flood the space with natural light. The gourmet kitchen is equipped with high-end appliances, custom cabinetry, and a large island perfect for entertaining.
              {'\n\n'}
              The master suite includes a spa-like bathroom and walk-in closet. Additional features include a private backyard with a pool, smart home technology, and energy-efficient systems throughout.
            </Text>
          </View>

          {/* Amenities */}
          <View className="mb-6">
            <Text className="text-gray-900 text-base font-bold mb-3">
              Amenities
            </Text>
            <View className="flex-row flex-wrap">
              <View className="bg-blue-50 rounded-lg px-3 py-2 mr-2 mb-2 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                <Text className="text-blue-700 text-xs font-medium ml-1">Swimming Pool</Text>
              </View>
              <View className="bg-blue-50 rounded-lg px-3 py-2 mr-2 mb-2 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                <Text className="text-blue-700 text-xs font-medium ml-1">Home Gym</Text>
              </View>
              <View className="bg-blue-50 rounded-lg px-3 py-2 mr-2 mb-2 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                <Text className="text-blue-700 text-xs font-medium ml-1">Garden</Text>
              </View>
              <View className="bg-blue-50 rounded-lg px-3 py-2 mr-2 mb-2 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                <Text className="text-blue-700 text-xs font-medium ml-1">Smart Home</Text>
              </View>
              <View className="bg-blue-50 rounded-lg px-3 py-2 mr-2 mb-2 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                <Text className="text-blue-700 text-xs font-medium ml-1">Solar Panels</Text>
              </View>
              <View className="bg-blue-50 rounded-lg px-3 py-2 mr-2 mb-2 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                <Text className="text-blue-700 text-xs font-medium ml-1">Security System</Text>
              </View>
              <View className="bg-blue-50 rounded-lg px-3 py-2 mr-2 mb-2 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                <Text className="text-blue-700 text-xs font-medium ml-1">Central AC</Text>
              </View>
              <View className="bg-blue-50 rounded-lg px-3 py-2 mr-2 mb-2 flex-row items-center">
                <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                <Text className="text-blue-700 text-xs font-medium ml-1">Fireplace</Text>
              </View>
            </View>
          </View>

          {/* Recent Inquiries */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-gray-900 text-base font-bold">
                Recent Inquiries
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-600 text-sm font-semibold">View All</Text>
              </TouchableOpacity>
            </View>

            <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center flex-1">
                  <View className="bg-blue-500 rounded-full w-10 h-10 items-center justify-center mr-3">
                    <Text className="text-white font-bold">JD</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-semibold text-sm">John Doe</Text>
                    <Text className="text-gray-500 text-xs">2 hours ago</Text>
                  </View>
                </View>
                <TouchableOpacity className="bg-blue-50 px-3 py-1.5 rounded-lg">
                  <Text className="text-blue-600 text-xs font-semibold">Reply</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-gray-600 text-sm">
                I&apos;m interested in scheduling a viewing. Is this weekend available?
              </Text>
            </View>

            <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center flex-1">
                  <View className="bg-green-500 rounded-full w-10 h-10 items-center justify-center mr-3">
                    <Text className="text-white font-bold">SM</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-semibold text-sm">Sarah Miller</Text>
                    <Text className="text-gray-500 text-xs">5 hours ago</Text>
                  </View>
                </View>
                <TouchableOpacity className="bg-blue-50 px-3 py-1.5 rounded-lg">
                  <Text className="text-blue-600 text-xs font-semibold">Reply</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-gray-600 text-sm">
                What are the HOA fees for this property?
              </Text>
            </View>

            <View className="bg-white rounded-xl p-4 border border-gray-200">
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center flex-1">
                  <View className="bg-orange-500 rounded-full w-10 h-10 items-center justify-center mr-3">
                    <Text className="text-white font-bold">RJ</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 font-semibold text-sm">Robert Johnson</Text>
                    <Text className="text-gray-500 text-xs">1 day ago</Text>
                  </View>
                </View>
                <TouchableOpacity className="bg-blue-50 px-3 py-1.5 rounded-lg">
                  <Text className="text-blue-600 text-xs font-semibold">Reply</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-gray-600 text-sm">
                Is the property pet-friendly?
              </Text>
            </View>
          </View>

          {/* Listing Information */}
          <View className="mb-6">
            <Text className="text-gray-900 text-base font-bold mb-3">
              Listing Information
            </Text>
            <View className="bg-gray-50 rounded-xl p-4">
              <View className="flex-row justify-between mb-3 pb-3 border-b border-gray-200">
                <Text className="text-gray-600 text-sm">Property ID</Text>
                <Text className="text-gray-900 text-sm font-semibold">#PRO-2024-001</Text>
              </View>
              <View className="flex-row justify-between mb-3 pb-3 border-b border-gray-200">
                <Text className="text-gray-600 text-sm">Listed On</Text>
                <Text className="text-gray-900 text-sm font-semibold">Oct 15, 2024</Text>
              </View>
              <View className="flex-row justify-between mb-3 pb-3 border-b border-gray-200">
                <Text className="text-gray-600 text-sm">Property Type</Text>
                <Text className="text-gray-900 text-sm font-semibold">Single Family</Text>
              </View>
              <View className="flex-row justify-between mb-3 pb-3 border-b border-gray-200">
                <Text className="text-gray-600 text-sm">Status</Text>
                <View className="bg-green-100 px-2 py-1 rounded">
                  <Text className="text-green-700 text-xs font-semibold">Active</Text>
                </View>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600 text-sm">Last Updated</Text>
                <Text className="text-gray-900 text-sm font-semibold">2 hours ago</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="mb-6">
            <View className="flex-row mb-3">
              <TouchableOpacity className="flex-1 bg-blue-500 py-3.5 rounded-xl mr-2">
                <View className="flex-row items-center justify-center">
                  <Ionicons name="create-outline" size={20} color="#ffffff" />
                  <Text className="text-white font-bold ml-2">Edit Listing</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-gray-100 py-3.5 rounded-xl ml-2">
                <View className="flex-row items-center justify-center">
                  <Ionicons name="share-outline" size={20} color="#1f2937" />
                  <Text className="text-gray-900 font-bold ml-2">Share</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex-row">
              <TouchableOpacity className="flex-1 bg-orange-50 py-3.5 rounded-xl mr-2 border border-orange-200">
                <View className="flex-row items-center justify-center">
                  <Ionicons name="pause-circle-outline" size={20} color="#f97316" />
                  <Text className="text-orange-600 font-bold ml-2">Pause Listing</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-red-50 py-3.5 rounded-xl ml-2 border border-red-200">
                <View className="flex-row items-center justify-center">
                  <Ionicons name="trash-outline" size={20} color="#ef4444" />
                  <Text className="text-red-500 font-bold ml-2">Delete</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Warning Banner */}
          <View className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <View className="flex-row items-start">
              <Ionicons name="information-circle" size={20} color="#f59e0b" />
              <Text className="flex-1 text-amber-800 text-xs ml-2 leading-5">
                This property listing is currently active and visible to all users. Make sure to respond to inquiries promptly to increase your chances of a successful sale.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
