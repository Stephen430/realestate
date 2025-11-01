import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyPropertiesScreen() {
  const router = useRouter();

  const myProperties = [
    {
      id: 1,
      title: 'Modern Family House',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      status: 'Active',
      views: 1234,
      inquiries: 45,
      posted: '2 weeks ago',
    },
    {
      id: 2,
      title: 'Luxury Penthouse',
      location: 'Manhattan, NY',
      price: '$5,800,000',
      beds: 3,
      baths: 4,
      sqft: '2,800',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      status: 'Active',
      views: 2156,
      inquiries: 78,
      posted: '1 week ago',
    },
    {
      id: 3,
      title: 'Cozy Cottage',
      location: 'Austin, TX',
      price: '$850,000',
      beds: 3,
      baths: 2,
      sqft: '1,800',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      status: 'Pending',
      views: 856,
      inquiries: 23,
      posted: '3 weeks ago',
    },
  ];

  const handleViewPropertyDetails = () => {
    router.push('/Modern-Family-House');
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
        <Text className="text-gray-900 text-xl font-bold">My Properties</Text>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
          <Text className="text-white text-sm font-semibold">+ Add</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Summary */}
      <View className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <View className="flex-row justify-around">
          <View className="items-center">
            <Text className="text-gray-900 text-2xl font-bold">{myProperties.length}</Text>
            <Text className="text-gray-500 text-xs mt-1">Total</Text>
          </View>
          <View className="items-center">
            <Text className="text-green-600 text-2xl font-bold">
              {myProperties.filter(p => p.status === 'Active').length}
            </Text>
            <Text className="text-gray-500 text-xs mt-1">Active</Text>
          </View>
          <View className="items-center">
            <Text className="text-orange-600 text-2xl font-bold">
              {myProperties.filter(p => p.status === 'Pending').length}
            </Text>
            <Text className="text-gray-500 text-xs mt-1">Pending</Text>
          </View>
          <View className="items-center">
            <Text className="text-gray-900 text-2xl font-bold">
              {myProperties.reduce((sum, p) => sum + p.views, 0)}
            </Text>
            <Text className="text-gray-500 text-xs mt-1">Total Views</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="px-6 py-4">
          {myProperties.map((property) => (
            <View
              key={property.id}
              className="bg-white rounded-2xl mb-4 overflow-hidden border border-gray-200 shadow-sm"
            >
              {/* Property Image */}
              <View className="relative">
                <Image
                  source={{ uri: property.image }}
                  className="w-full h-48"
                  resizeMode="cover"
                />
                
                {/* Status Badge */}
                <View className={`absolute top-3 right-3 px-3 py-1.5 rounded-lg ${
                  property.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'
                }`}>
                  <Text className="text-white text-xs font-bold">
                    {property.status}
                  </Text>
                </View>

                {/* Edit Button */}
                <TouchableOpacity className="absolute top-3 left-3 bg-white/90 p-2 rounded-full">
                  <Ionicons name="create-outline" size={20} color="#3b82f6" />
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
                <View className="flex-row items-center mb-3 pt-3 border-t border-gray-100">
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

                {/* Stats */}
                <View className="flex-row items-center justify-between bg-gray-50 rounded-xl p-3">
                  <View className="flex-row items-center">
                    <Ionicons name="eye-outline" size={16} color="#3b82f6" />
                    <Text className="text-gray-700 text-xs ml-1 font-medium">
                      {property.views.toLocaleString()} views
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="chatbubble-outline" size={16} color="#3b82f6" />
                    <Text className="text-gray-700 text-xs ml-1 font-medium">
                      {property.inquiries} inquiries
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="time-outline" size={16} color="#6b7280" />
                    <Text className="text-gray-500 text-xs ml-1">
                      {property.posted}
                    </Text>
                  </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row mt-3 pt-3 border-t border-gray-100">
                  <TouchableOpacity 
                    className="flex-1 bg-blue-50 py-2.5 rounded-lg mr-2"
                    onPress={() => {
                      if (property.id === 1) {
                        handleViewPropertyDetails();
                      }
                    }}
                  >
                    <Text className="text-blue-600 text-center font-semibold text-sm">
                      View Details
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 bg-gray-100 py-2.5 rounded-lg ml-2">
                    <Text className="text-gray-700 text-center font-semibold text-sm">
                      Share
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          {/* Empty State */}
          {myProperties.length === 0 && (
            <View className="items-center py-12">
              <View className="bg-gray-100 rounded-full p-8 mb-4">
                <Ionicons name="home-outline" size={64} color="#9ca3af" />
              </View>
              <Text className="text-gray-900 text-lg font-bold mb-2">
                No Properties Yet
              </Text>
              <Text className="text-gray-500 text-sm text-center mb-6">
                Start listing your properties and manage them here
              </Text>
              <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-xl">
                <Text className="text-white font-semibold">
                  Add Your First Property
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
