import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Modal, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedProperties, setLikedProperties] = useState<number[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('Los Angeles, CA');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showAllFeaturedModal, setShowAllFeaturedModal] = useState(false);
  const [showAllNearbyModal, setShowAllNearbyModal] = useState(false);
  const [showPropertyDetailModal, setShowPropertyDetailModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [priceRange, setPriceRange] = useState('Any');
  const [bedrooms, setBedrooms] = useState('Any');
  const [propertyType, setPropertyType] = useState('All');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const notifications = [
    {
      id: 1,
      title: 'New Property Added',
      message: 'A new luxury villa in Beverly Hills matches your preferences',
      time: '2 hours ago',
      read: false,
      icon: 'home',
    },
    {
      id: 2,
      title: 'Price Drop Alert',
      message: 'Modern Penthouse price reduced by $200,000',
      time: '5 hours ago',
      read: false,
      icon: 'trending-down',
    },
    {
      id: 3,
      title: 'Viewing Scheduled',
      message: 'Your property viewing is confirmed for tomorrow at 2 PM',
      time: '1 day ago',
      read: true,
      icon: 'calendar',
    },
    {
      id: 4,
      title: 'New Message',
      message: 'Sarah Johnson sent you a message about Beach House',
      time: '2 days ago',
      read: true,
      icon: 'chatbubble',
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const locations = [
    'Los Angeles, CA',
    'Beverly Hills, CA',
    'Manhattan, NY',
    'Miami Beach, FL',
    'San Francisco, CA',
    'Chicago, IL',
    'Austin, TX',
    'Seattle, WA',
  ];

  const categories = [
    { id: 'all', name: 'All', icon: 'apps' },
    { id: 'house', name: 'House', icon: 'home' },
    { id: 'apartment', name: 'Apartment', icon: 'business' },
    { id: 'villa', name: 'Villa', icon: 'home-outline' },
  ];

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Villa',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      rating: 4.8,
      type: 'Featured',
      agent: 'Sarah Johnson',
      category: 'Villa',
    },
    {
      id: 2,
      title: 'Luxury Penthouse',
      location: 'Manhattan, NY',
      price: '$4,800,000',
      beds: 3,
      baths: 3,
      sqft: '2,800',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      rating: 4.9,
      type: 'Hot Deal',
      agent: 'Mike Chen',
      category: 'Apartment',
    },
    {
      id: 3,
      title: 'Beach House',
      location: 'Miami Beach, FL',
      price: '$3,200,000',
      beds: 5,
      baths: 4,
      sqft: '4,500',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      rating: 4.7,
      type: 'New',
      agent: 'Emily Davis',
      category: 'House',
    },
    {
      id: 6,
      title: 'Urban Apartment',
      location: 'San Francisco, CA',
      price: '$1,200,000',
      beds: 2,
      baths: 2,
      sqft: '1,400',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      rating: 4.6,
      type: 'Featured',
      agent: 'David Lee',
      category: 'Apartment',
    },
    {
      id: 7,
      title: 'Country House',
      location: 'Austin, TX',
      price: '$890,000',
      beds: 4,
      baths: 3,
      sqft: '2,900',
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800',
      rating: 4.5,
      type: 'New',
      agent: 'Lisa Brown',
      category: 'House',
    },
    {
      id: 8,
      title: 'Hillside Villa',
      location: 'Malibu, CA',
      price: '$5,500,000',
      beds: 6,
      baths: 5,
      sqft: '5,200',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
      rating: 4.9,
      type: 'Featured',
      agent: 'Robert Wilson',
      category: 'Villa',
    },
  ];

  const nearbyProperties = [
    {
      id: 4,
      title: 'Cozy Studio',
      location: 'Downtown LA',
      price: '$850,000',
      beds: 1,
      baths: 1,
      sqft: '650',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
      category: 'Apartment',
    },
    {
      id: 5,
      title: 'Family Home',
      location: 'Santa Monica',
      price: '$1,950,000',
      beds: 4,
      baths: 2,
      sqft: '2,400',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
      category: 'House',
    },
  ];

  // Filter properties based on selected category
  const filteredFeaturedProperties = selectedCategory === 'All' 
    ? featuredProperties 
    : featuredProperties.filter(property => property.category === selectedCategory);

  const filteredNearbyProperties = selectedCategory === 'All'
    ? nearbyProperties
    : nearbyProperties.filter(property => property.category === selectedCategory);

  const toggleLike = (id: number) => {
    setLikedProperties((prev) =>
      prev.includes(id) ? prev.filter((propId) => propId !== id) : [...prev, id]
    );
  };

  const openPropertyDetail = (property: any) => {
    setSelectedProperty(property);
    setShowPropertyDetailModal(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={[]}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <ScrollView 
        className="flex-1 pt-12" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Header */}
        <View className="px-6 pt-4 pb-6 bg-white">
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-gray-500 text-sm">Location</Text>
              <TouchableOpacity 
                className="flex-row items-center mt-1"
                onPress={() => setShowLocationModal(true)}
              >
                <Ionicons name="location" size={18} color="#3b82f6" />
                <Text className="text-gray-900 text-lg font-bold ml-1">
                  {selectedLocation}
                </Text>
                <Ionicons name="chevron-down" size={18} color="#6b7280" className="ml-1" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity 
              className="bg-gray-100 p-3 rounded-full relative"
              onPress={() => setShowNotificationModal(true)}
            >
              <Ionicons name="notifications-outline" size={24} color="#1f2937" />
              {unreadCount > 0 && (
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                  <Text className="text-white text-xs font-bold">{unreadCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
            <Ionicons name="search" size={20} color="#9ca3af" />
            <TextInput
              placeholder="Search properties, location..."
              placeholderTextColor="#9ca3af"
              className="flex-1 ml-3 text-gray-900 text-base"
            />
            <TouchableOpacity 
              className="bg-blue-500 p-2 rounded-lg"
              onPress={() => setShowFilterModal(true)}
            >
              <Ionicons name="options-outline" size={18} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View className="px-6 mb-6 bg-white py-6">
          <Text className="text-gray-900 text-lg font-bold mb-3">
            Property Type
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => setSelectedCategory(category.name)}
                className={`mr-3 px-4 py-2.5 rounded-lg flex-row items-center ${
                  selectedCategory === category.name
                    ? 'bg-blue-500'
                    : 'bg-gray-100'
                }`}
              >
                <Ionicons
                  name={category.icon as any}
                  size={16}
                  color={selectedCategory === category.name ? '#ffffff' : '#6b7280'}
                />
                <Text
                  className={`ml-2 text-sm font-semibold ${
                    selectedCategory === category.name
                      ? 'text-white'
                      : 'text-gray-700'
                  }`}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Properties */}
        <View className="px-6 mb-6 bg-white pt-6 pb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-gray-900 text-xl font-bold">
              Featured Properties
            </Text>
            <TouchableOpacity onPress={() => setShowAllFeaturedModal(true)}>
              <Text className="text-blue-500 text-sm font-semibold">See All</Text>
            </TouchableOpacity>
          </View>

          {filteredFeaturedProperties.length > 0 ? (
            filteredFeaturedProperties.map((property) => (
            <TouchableOpacity
              key={property.id}
              className="bg-white rounded-2xl mb-4 overflow-hidden border border-gray-200"
              onPress={() => openPropertyDetail(property)}
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
              </View>
            </TouchableOpacity>
          ))
          ) : (
            <View className="items-center py-8">
              <View className="bg-gray-100 rounded-full p-6 mb-3">
                <Ionicons name="home-outline" size={48} color="#9ca3af" />
              </View>
              <Text className="text-gray-500 text-base">No properties found</Text>
              <Text className="text-gray-400 text-sm mt-1">Try selecting a different category</Text>
            </View>
          )}
        </View>

        {/* Nearby Properties */}
        <View className="px-6 pb-6 bg-white pt-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-gray-900 text-xl font-bold">
              Nearby Properties
            </Text>
            <TouchableOpacity onPress={() => setShowAllNearbyModal(true)}>
              <Text className="text-blue-500 text-sm font-semibold">View All</Text>
            </TouchableOpacity>
          </View>

          {filteredNearbyProperties.length > 0 ? (
            filteredNearbyProperties.map((property) => (
            <TouchableOpacity
              key={property.id}
              className="bg-white rounded-xl mb-3 overflow-hidden flex-row border border-gray-200"
              onPress={() => openPropertyDetail(property)}
            >
              {/* Property Image */}
              <Image
                source={{ uri: property.image }}
                className="w-28 h-28"
                resizeMode="cover"
              />

              {/* Property Details */}
              <View className="flex-1 p-3 justify-between">
                <View>
                  <Text className="text-gray-900 text-base font-bold mb-1" numberOfLines={1}>
                    {property.title}
                  </Text>
                  <View className="flex-row items-center">
                    <Ionicons name="location-outline" size={14} color="#6b7280" />
                    <Text className="text-gray-500 text-xs ml-1" numberOfLines={1}>
                      {property.location}
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-blue-600 text-base font-bold">
                    {property.price}
                  </Text>
                  <View className="flex-row items-center">
                    <Ionicons name="bed-outline" size={14} color="#6b7280" />
                    <Text className="text-gray-600 text-xs ml-1 mr-2">
                      {property.beds}
                    </Text>
                    <Ionicons name="water-outline" size={14} color="#6b7280" />
                    <Text className="text-gray-600 text-xs ml-1">
                      {property.baths}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Like Button */}
              <TouchableOpacity
                onPress={() => toggleLike(property.id)}
                className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm"
              >
                <Ionicons
                  name={likedProperties.includes(property.id) ? 'heart' : 'heart-outline'}
                  size={16}
                  color={likedProperties.includes(property.id) ? '#ef4444' : '#6b7280'}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))
          ) : (
            <View className="items-center py-8">
              <View className="bg-gray-100 rounded-full p-6 mb-3">
                <Ionicons name="location-outline" size={48} color="#9ca3af" />
              </View>
              <Text className="text-gray-500 text-base">No nearby properties</Text>
              <Text className="text-gray-400 text-sm mt-1">Try selecting a different category</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Location Selection Modal */}
      <Modal
        visible={showLocationModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowLocationModal(false)}
      >
        <View className="flex-1 justify-end">
          <View className="bg-white rounded-t-3xl">
            {/* Modal Header */}
            <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
              <Text className="text-gray-900 text-xl font-bold">Select Location</Text>
              <TouchableOpacity 
                onPress={() => setShowLocationModal(false)}
                className="bg-gray-100 p-2 rounded-full"
              >
                <Ionicons name="close" size={20} color="#1f2937" />
              </TouchableOpacity>
            </View>

            {/* Location List */}
            <ScrollView className="max-h-96" showsVerticalScrollIndicator={false}>
              <View className="px-6 py-4">
                {locations.map((location, index) => (
                  <TouchableOpacity
                    key={index}
                    className={`flex-row items-center justify-between py-4 border-b border-gray-100 ${
                      selectedLocation === location ? 'bg-blue-50 px-4 rounded-lg' : ''
                    }`}
                    onPress={() => {
                      setSelectedLocation(location);
                      setShowLocationModal(false);
                    }}
                  >
                    <View className="flex-row items-center flex-1">
                      <View className={`p-2 rounded-lg ${
                        selectedLocation === location ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <Ionicons 
                          name="location" 
                          size={20} 
                          color={selectedLocation === location ? '#3b82f6' : '#6b7280'} 
                        />
                      </View>
                      <Text className={`ml-3 text-base ${
                        selectedLocation === location 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-900 font-medium'
                      }`}>
                        {location}
                      </Text>
                    </View>
                    {selectedLocation === location && (
                      <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Notification Modal */}
      <Modal
        visible={showNotificationModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowNotificationModal(false)}
      >
        <View className="flex-1 justify-end">
          <View className="bg-white rounded-t-3xl" style={{ maxHeight: '90%' }}>
            {/* Modal Header */}
            <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
              <View>
                <Text className="text-gray-900 text-xl font-bold">Notifications</Text>
                {unreadCount > 0 && (
                  <Text className="text-gray-500 text-sm mt-0.5">
                    {unreadCount} unread {unreadCount === 1 ? 'notification' : 'notifications'}
                  </Text>
                )}
              </View>
              <TouchableOpacity 
                onPress={() => setShowNotificationModal(false)}
                className="bg-gray-100 p-2 rounded-full"
              >
                <Ionicons name="close" size={20} color="#1f2937" />
              </TouchableOpacity>
            </View>

            {/* Notification List */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="px-6 py-4">
                {notifications.map((notification) => (
                  <TouchableOpacity
                    key={notification.id}
                    className={`flex-row items-start py-4 border-b border-gray-100 ${
                      !notification.read ? 'bg-blue-50 px-4 rounded-lg mb-2' : ''
                    }`}
                  >
                    <View className={`p-2.5 rounded-full ${
                      !notification.read ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <Ionicons 
                        name={notification.icon as any} 
                        size={20} 
                        color={!notification.read ? '#3b82f6' : '#6b7280'} 
                      />
                    </View>
                    <View className="flex-1 ml-3">
                      <View className="flex-row items-center justify-between mb-1">
                        <Text className={`text-base font-semibold ${
                          !notification.read ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {notification.title}
                        </Text>
                        {!notification.read && (
                          <View className="bg-blue-500 w-2 h-2 rounded-full" />
                        )}
                      </View>
                      <Text className="text-gray-600 text-sm mb-1">
                        {notification.message}
                      </Text>
                      <Text className="text-gray-400 text-xs">
                        {notification.time}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              
              {/* Mark all as read button */}
              {unreadCount > 0 && (
                <View className="px-6 pb-4">
                  <TouchableOpacity className="bg-blue-500 py-3 rounded-xl">
                    <Text className="text-white text-center font-semibold">
                      Mark All as Read
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* All Nearby Properties Modal */}
      <Modal
        visible={showAllNearbyModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAllNearbyModal(false)}
      >
        <View className="flex-1 justify-end">
          <View className="bg-white rounded-t-3xl" style={{ maxHeight: '95%' }}>
            {/* Modal Header */}
            <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
              <View>
                <Text className="text-gray-900 text-xl font-bold">Nearby Properties</Text>
                <Text className="text-gray-500 text-sm mt-0.5">
                  {filteredNearbyProperties.length} {filteredNearbyProperties.length === 1 ? 'property' : 'properties'}
                </Text>
              </View>
              <TouchableOpacity 
                onPress={() => setShowAllNearbyModal(false)}
                className="bg-gray-100 p-2 rounded-full"
              >
                <Ionicons name="close" size={20} color="#1f2937" />
              </TouchableOpacity>
            </View>

            {/* Properties List */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="px-6 py-4">
                {filteredNearbyProperties.map((property) => (
                  <TouchableOpacity
                    key={property.id}
                    className="bg-white rounded-xl mb-3 overflow-hidden border border-gray-200"
                    onPress={() => openPropertyDetail(property)}
                  >
                    {/* Property Image */}
                    <View className="relative">
                      <Image
                        source={{ uri: property.image }}
                        className="w-full h-48"
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
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* All Featured Properties Modal */}
      <Modal
        visible={showAllFeaturedModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAllFeaturedModal(false)}
      >
        <View className="flex-1 justify-end">
          <View className="bg-white rounded-t-3xl" style={{ maxHeight: '95%' }}>
            {/* Modal Header */}
            <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
              <View>
                <Text className="text-gray-900 text-xl font-bold">Featured Properties</Text>
                <Text className="text-gray-500 text-sm mt-0.5">
                  {filteredFeaturedProperties.length} {filteredFeaturedProperties.length === 1 ? 'property' : 'properties'}
                </Text>
              </View>
              <TouchableOpacity 
                onPress={() => setShowAllFeaturedModal(false)}
                className="bg-gray-100 p-2 rounded-full"
              >
                <Ionicons name="close" size={20} color="#1f2937" />
              </TouchableOpacity>
            </View>

            {/* Properties Grid */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="px-6 py-4">
                {filteredFeaturedProperties.map((property) => (
                  <TouchableOpacity
                    key={property.id}
                    className="bg-white rounded-2xl mb-4 overflow-hidden border border-gray-200"
                    onPress={() => openPropertyDetail(property)}
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
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Property Detail Modal */}
      <Modal
        visible={showPropertyDetailModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowPropertyDetailModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {selectedProperty && (
            <>
              {/* Property Image */}
              <View className="relative">
                <Image
                  source={{ uri: selectedProperty.image }}
                  className="w-full h-80"
                  resizeMode="cover"
                />
                
                {/* Header Buttons */}
                <View className="absolute top-12 left-0 right-0 flex-row justify-between items-center px-6">
                  <TouchableOpacity
                    onPress={() => setShowPropertyDetailModal(false)}
                    className="bg-white/90 p-3 rounded-full shadow-sm"
                  >
                    <Ionicons name="arrow-back" size={24} color="#1f2937" />
                  </TouchableOpacity>
                  
                  <View className="flex-row">
                    <TouchableOpacity
                      className="bg-white/90 p-3 rounded-full shadow-sm mr-2"
                    >
                      <Ionicons name="share-outline" size={24} color="#1f2937" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => toggleLike(selectedProperty.id)}
                      className="bg-white/90 p-3 rounded-full shadow-sm"
                    >
                      <Ionicons
                        name={likedProperties.includes(selectedProperty.id) ? 'heart' : 'heart-outline'}
                        size={24}
                        color={likedProperties.includes(selectedProperty.id) ? '#ef4444' : '#1f2937'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Type Badge */}
                {selectedProperty.type && (
                  <View className="absolute top-12 left-6 bg-blue-500 px-3 py-1.5 rounded-lg" style={{ marginTop: 60 }}>
                    <Text className="text-white text-xs font-bold">
                      {selectedProperty.type}
                    </Text>
                  </View>
                )}
              </View>

              {/* Property Details */}
              <ScrollView 
                className="flex-1" 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
              >
                <View className="px-6 py-6">
                  {/* Price */}
                  <Text className="text-blue-600 text-3xl font-bold mb-2">
                    {selectedProperty.price}
                  </Text>

                  {/* Title */}
                  <Text className="text-gray-900 text-2xl font-bold mb-2">
                    {selectedProperty.title}
                  </Text>

                  {/* Location */}
                  <View className="flex-row items-center mb-6">
                    <Ionicons name="location" size={18} color="#6b7280" />
                    <Text className="text-gray-600 text-base ml-1">
                      {selectedProperty.location}
                    </Text>
                  </View>

                  {/* Property Stats */}
                  <View className="flex-row bg-gray-50 rounded-xl p-4 mb-6">
                    <View className="flex-1 items-center border-r border-gray-200">
                      <Ionicons name="bed-outline" size={24} color="#3b82f6" />
                      <Text className="text-gray-900 text-lg font-bold mt-1">
                        {selectedProperty.beds}
                      </Text>
                      <Text className="text-gray-500 text-xs">Bedrooms</Text>
                    </View>
                    <View className="flex-1 items-center border-r border-gray-200">
                      <Ionicons name="water-outline" size={24} color="#3b82f6" />
                      <Text className="text-gray-900 text-lg font-bold mt-1">
                        {selectedProperty.baths}
                      </Text>
                      <Text className="text-gray-500 text-xs">Bathrooms</Text>
                    </View>
                    <View className="flex-1 items-center">
                      <Ionicons name="resize-outline" size={24} color="#3b82f6" />
                      <Text className="text-gray-900 text-lg font-bold mt-1">
                        {selectedProperty.sqft}
                      </Text>
                      <Text className="text-gray-500 text-xs">Sqft</Text>
                    </View>
                  </View>

                  {/* Agent Info */}
                  {selectedProperty.agent && (
                    <View className="mb-6">
                      <Text className="text-gray-900 text-lg font-bold mb-3">
                        Property Agent
                      </Text>
                      <View className="flex-row items-center bg-gray-50 rounded-xl p-4">
                        <View className="bg-blue-500 w-12 h-12 rounded-full items-center justify-center">
                          <Ionicons name="person" size={24} color="#ffffff" />
                        </View>
                        <View className="ml-3 flex-1">
                          <Text className="text-gray-900 text-base font-semibold">
                            {selectedProperty.agent}
                          </Text>
                          <View className="flex-row items-center mt-1">
                            <Ionicons name="star" size={14} color="#f59e0b" />
                            <Text className="text-gray-600 text-sm ml-1">
                              {selectedProperty.rating} rating
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
                          <Ionicons name="call" size={18} color="#ffffff" />
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-blue-100 px-4 py-2 rounded-lg ml-2">
                          <Ionicons name="chatbubble" size={18} color="#3b82f6" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}

                  {/* Description */}
                  <View className="mb-6">
                    <Text className="text-gray-900 text-lg font-bold mb-3">
                      Description
                    </Text>
                    <Text className="text-gray-600 text-base leading-6">
                      Beautiful {selectedProperty.title.toLowerCase()} located in the heart of {selectedProperty.location}. This stunning property features {selectedProperty.beds} spacious bedrooms and {selectedProperty.baths} modern bathrooms across {selectedProperty.sqft} square feet of living space. Perfect for families looking for comfort and style in a prime location.
                    </Text>
                  </View>

                  {/* Features */}
                  <View className="mb-6">
                    <Text className="text-gray-900 text-lg font-bold mb-3">
                      Features & Amenities
                    </Text>
                    <View className="flex-row flex-wrap">
                      {['Parking', 'Pool', 'Garden', 'Gym', 'Security', 'Elevator', 'WiFi', 'Air Conditioning'].map((feature) => (
                        <View
                          key={feature}
                          className="flex-row items-center bg-gray-50 px-3 py-2 rounded-lg mr-2 mb-2"
                        >
                          <Ionicons name="checkmark-circle" size={16} color="#3b82f6" />
                          <Text className="text-gray-700 text-sm ml-1">
                            {feature}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>

                  {/* Location Map Placeholder */}
                  <View className="mb-6">
                    <Text className="text-gray-900 text-lg font-bold mb-3">
                      Location
                    </Text>
                    <View className="bg-gray-100 rounded-xl h-48 items-center justify-center">
                      <Ionicons name="map-outline" size={48} color="#9ca3af" />
                      <Text className="text-gray-500 text-sm mt-2">Map View</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>

              {/* Bottom Action Bar */}
              <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
                <View className="flex-row items-center">
                  <TouchableOpacity className="flex-1 bg-blue-500 py-4 rounded-xl mr-2">
                    <Text className="text-white text-center font-bold text-base">
                      Schedule Tour
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 bg-gray-100 py-4 rounded-xl ml-2">
                    <Text className="text-gray-900 text-center font-bold text-base">
                      Make Offer
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </View>
      </Modal>

      {/* Filter Modal */}
      <Modal
        visible={showFilterModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowFilterModal(false)}
      >
        <View className="flex-1 justify-end">
          <View className="bg-white rounded-t-3xl" style={{ maxHeight: '85%' }}>
            {/* Modal Header */}
            <View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
              <Text className="text-gray-900 text-xl font-bold">Filters</Text>
              <TouchableOpacity 
                onPress={() => setShowFilterModal(false)}
                className="bg-gray-100 p-2 rounded-full"
              >
                <Ionicons name="close" size={20} color="#1f2937" />
              </TouchableOpacity>
            </View>

            {/* Filter Options */}
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Property Type */}
              <View className="px-6 py-6 border-b border-gray-100">
                <Text className="text-gray-900 text-base font-semibold mb-3">
                  Property Type
                </Text>
                <View className="flex-row flex-wrap">
                  {['All', 'House', 'Apartment', 'Villa', 'Condo'].map((type) => (
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

              {/* Features */}
              <View className="px-6 py-6">
                <Text className="text-gray-900 text-base font-semibold mb-3">
                  Features
                </Text>
                <View className="flex-row flex-wrap">
                  {['Parking', 'Pool', 'Garden', 'Gym', 'Security', 'Elevator'].map((feature) => {
                    const isSelected = selectedFeatures.includes(feature);
                    return (
                      <TouchableOpacity
                        key={feature}
                        onPress={() => {
                          setSelectedFeatures(prev => 
                            prev.includes(feature) 
                              ? prev.filter(f => f !== feature)
                              : [...prev, feature]
                          );
                        }}
                        className={`flex-row items-center mr-4 mb-3 px-4 py-2.5 rounded-lg border ${
                          isSelected 
                            ? 'bg-blue-50 border-blue-500' 
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <View className={`w-4 h-4 rounded border items-center justify-center mr-2 ${
                          isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <Ionicons name="checkmark" size={12} color="#ffffff" />
                          )}
                        </View>
                        <Text className={`text-sm font-medium ${
                          isSelected ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {feature}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </ScrollView>

            {/* Action Buttons */}
            <View className="px-6 py-4 border-t border-gray-100 flex-row">
              <TouchableOpacity 
                className="flex-1 bg-gray-100 py-3.5 rounded-xl mr-2"
                onPress={() => {
                  setPriceRange('Any');
                  setBedrooms('Any');
                  setPropertyType('All');
                  setSelectedFeatures([]);
                }}
              >
                <Text className="text-gray-700 text-center font-semibold">Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className="flex-1 bg-blue-500 py-3.5 rounded-xl ml-2"
                onPress={() => setShowFilterModal(false)}
              >
                <Text className="text-white text-center font-semibold">Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
