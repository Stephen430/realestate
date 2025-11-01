import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EditProfileScreen() {
  const [fullName, setFullName] = useState('Stephen Odunfa');
  const [email, setEmail] = useState('stephen.odunfa@example.com');
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 123-4567');
  const [address, setAddress] = useState('123 Main St, Los Angeles, CA 90001');
  const [bio, setBio] = useState('Real estate enthusiast looking for the perfect home in Los Angeles area.');

  const saveProfile = () => {
    // Save profile logic here
    router.back();
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
        <Text className="text-gray-900 text-xl font-bold">Edit Profile</Text>
        <View className="w-10" />
      </View>

      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
          {/* Profile Photo */}
          <View className="px-6 py-6 items-center border-b border-gray-100">
            <View className="bg-blue-500 rounded-full w-28 h-28 items-center justify-center mb-4 shadow-sm">
              <Text className="text-white text-4xl font-bold">
                {fullName.split(' ').map(n => n[0]).join('')}
              </Text>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="camera" size={18} color="#3b82f6" />
              <Text className="text-blue-500 font-semibold text-sm ml-2">
                Change Photo
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <View className="px-6 py-6">
            {/* Full Name */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm font-medium mb-2">
                Full Name
              </Text>
              <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <Ionicons name="person-outline" size={20} color="#9ca3af" />
                <TextInput
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Enter your full name"
                  placeholderTextColor="#9ca3af"
                  className="flex-1 ml-3 text-gray-900 text-base"
                />
              </View>
            </View>

            {/* Email */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm font-medium mb-2">
                Email Address
              </Text>
              <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <Ionicons name="mail-outline" size={20} color="#9ca3af" />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  placeholderTextColor="#9ca3af"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="flex-1 ml-3 text-gray-900 text-base"
                />
              </View>
            </View>

            {/* Phone Number */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm font-medium mb-2">
                Phone Number
              </Text>
              <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <Ionicons name="call-outline" size={20} color="#9ca3af" />
                <TextInput
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  placeholder="Enter your phone number"
                  placeholderTextColor="#9ca3af"
                  keyboardType="phone-pad"
                  className="flex-1 ml-3 text-gray-900 text-base"
                />
              </View>
            </View>

            {/* Address */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm font-medium mb-2">
                Address
              </Text>
              <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <Ionicons name="location-outline" size={20} color="#9ca3af" />
                <TextInput
                  value={address}
                  onChangeText={setAddress}
                  placeholder="Enter your address"
                  placeholderTextColor="#9ca3af"
                  className="flex-1 ml-3 text-gray-900 text-base"
                />
              </View>
            </View>

            {/* Bio */}
            <View className="mb-4">
              <Text className="text-gray-700 text-sm font-medium mb-2">
                Bio
              </Text>
              <View className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <TextInput
                  value={bio}
                  onChangeText={setBio}
                  placeholder="Tell us about yourself"
                  placeholderTextColor="#9ca3af"
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  className="text-gray-900 text-base"
                  style={{ minHeight: 100 }}
                />
              </View>
            </View>

            {/* Additional Info */}
            <View className="bg-blue-50 rounded-xl p-4 mb-6">
              <View className="flex-row items-start">
                <Ionicons name="information-circle" size={20} color="#3b82f6" />
                <Text className="flex-1 text-blue-700 text-xs ml-2">
                  Your personal information is secure and will only be used to improve your experience.
                </Text>
              </View>
            </View>
          </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <View className="flex-row">
          <TouchableOpacity 
            className="flex-1 bg-gray-100 py-3.5 rounded-xl mr-2"
            onPress={() => router.back()}
          >
            <Text className="text-gray-900 text-center font-bold text-base">
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="flex-1 bg-blue-500 py-3.5 rounded-xl ml-2"
            onPress={saveProfile}
          >
            <Text className="text-white text-center font-bold text-base">
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
