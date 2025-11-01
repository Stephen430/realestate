import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const router = useRouter();
  const [showHelpSupportModal, setShowHelpSupportModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showPrivacySecurityModal, setShowPrivacySecurityModal] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationSharingEnabled, setLocationSharingEnabled] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState('Public');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedLocation, setSelectedLocation] = useState('Los Angeles, CA');
  const [fullName] = useState('Stephen Odunfa');

  const menuItems = [
    { icon: 'person-outline', title: 'Edit Profile', subtitle: 'Update your information' },
    { icon: 'home-outline', title: 'My Properties', subtitle: '3 active listings' },
    { icon: 'heart-outline', title: 'Saved Properties', subtitle: '12 favorites' },
    { icon: 'document-text-outline', title: 'Transactions', subtitle: 'View history' },
    { icon: 'notifications-outline', title: 'Notifications', subtitle: 'Manage alerts' },
    { icon: 'card-outline', title: 'Payment Methods', subtitle: 'Manage payments' },
  ];

  const settingsItems = [
    { icon: 'shield-checkmark-outline', title: 'Privacy & Security', subtitle: 'Manage privacy' },
    { icon: 'help-circle-outline', title: 'Help & Support', subtitle: 'Get assistance' },
    { icon: 'information-circle-outline', title: 'About', subtitle: 'App information' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={[]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView 
        className="flex-1 pt-12" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Header */}
        <View className="px-6 py-4 border-b border-gray-100">
          <Text className="text-gray-900 text-2xl font-bold">
            Profile
          </Text>
        </View>

        {/* Profile Header */}
        <View className="px-6 py-6 border-b border-gray-100">
          <View className="items-center">
            <View className="bg-blue-500 rounded-full w-24 h-24 items-center justify-center mb-4 shadow-sm">
              <Text className="text-white text-4xl font-bold">
                {fullName.split(' ').map(n => n[0]).join('')}
              </Text>
            </View>
            <Text className="text-gray-900 text-xl font-bold mb-1">
              {fullName}
            </Text>
            <Text className="text-gray-500 text-sm mb-4">
              stephen.odunfa@example.com
            </Text>
            <TouchableOpacity 
              className="bg-blue-500 px-6 py-2.5 rounded-lg"
              onPress={() => router.push('/account/edit-profile')}
            >
              <Text className="text-white font-semibold text-sm">Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View className="px-6 py-6 border-b border-gray-100">
          <View className="flex-row justify-around">
            <View className="items-center">
              <View className="bg-blue-50 w-14 h-14 rounded-full items-center justify-center mb-2">
                <Text className="text-blue-600 text-xl font-bold">12</Text>
              </View>
              <Text className="text-gray-600 text-sm">Favorites</Text>
            </View>
            <View className="items-center">
              <View className="bg-blue-50 w-14 h-14 rounded-full items-center justify-center mb-2">
                <Text className="text-blue-600 text-xl font-bold">3</Text>
              </View>
              <Text className="text-gray-600 text-sm">Properties</Text>
            </View>
            <View className="items-center">
              <View className="bg-blue-50 w-14 h-14 rounded-full items-center justify-center mb-2">
                <Text className="text-blue-600 text-xl font-bold">8</Text>
              </View>
              <Text className="text-gray-600 text-sm">Reviews</Text>
            </View>
          </View>
        </View>

        {/* Account Section */}
        <View className="px-6 py-4 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-bold mb-3">
            Account
          </Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center py-3.5"
              onPress={() => {
                if (item.title === 'Edit Profile') {
                  router.push('/account/edit-profile');
                } else if (item.title === 'My Properties') {
                  router.push('/account/my-properties');
                } else if (item.title === 'Saved Properties') {
                  router.push('/account/saved-properties');
                } else if (item.title === 'Transactions') {
                  router.push('/account/transactions');
                } else if (item.title === 'Notifications') {
                  router.push('/account/notifications');
                } else if (item.title === 'Payment Methods') {
                  router.push('/account/payment-methods');
                }
              }}
            >
              <View className="bg-gray-100 p-2.5 rounded-lg">
                <Ionicons name={item.icon as any} size={20} color="#3b82f6" />
              </View>
              <View className="flex-1 ml-3">
                <Text className="text-gray-900 font-medium text-sm mb-0.5">
                  {item.title}
                </Text>
                <Text className="text-gray-500 text-xs">
                  {item.subtitle}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings Section */}
        <View className="px-6 py-4 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-bold mb-3">
            Settings
          </Text>
          {settingsItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center py-3.5"
              onPress={() => {
                if (item.title === 'Help & Support') {
                  setShowHelpSupportModal(true);
                } else if (item.title === 'About') {
                  setShowAboutModal(true);
                } else if (item.title === 'Privacy & Security') {
                  setShowPrivacySecurityModal(true);
                }
              }}
            >
              <View className="bg-gray-100 p-2.5 rounded-lg">
                <Ionicons name={item.icon as any} size={20} color="#3b82f6" />
              </View>
              <View className="flex-1 ml-3">
                <Text className="text-gray-900 font-medium text-sm mb-0.5">
                  {item.title}
                </Text>
                <Text className="text-gray-500 text-xs">
                  {item.subtitle}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Preferences */}
        <View className="px-6 py-4 border-b border-gray-100">
          <Text className="text-gray-900 text-base font-bold mb-3">
            Preferences
          </Text>
          <TouchableOpacity 
            className="flex-row items-center justify-between py-3.5 mb-1"
            onPress={() => setShowLanguageModal(true)}
          >
            <View className="flex-row items-center">
              <View className="bg-gray-100 p-2.5 rounded-lg">
                <Ionicons name="globe-outline" size={20} color="#3b82f6" />
              </View>
              <Text className="text-gray-900 font-medium text-sm ml-3">
                Language
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-gray-500 text-sm mr-2">{selectedLanguage}</Text>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            className="flex-row items-center justify-between py-3.5"
            onPress={() => setShowLocationModal(true)}
          >
            <View className="flex-row items-center">
              <View className="bg-gray-100 p-2.5 rounded-lg">
                <Ionicons name="location-outline" size={20} color="#3b82f6" />
              </View>
              <Text className="text-gray-900 font-medium text-sm ml-3">
                Location
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-gray-500 text-sm mr-2">{selectedLocation}</Text>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <View className="px-6 py-6">
          <TouchableOpacity className="border border-red-300 bg-red-50 py-3.5 rounded-xl">
            <View className="flex-row items-center justify-center">
              <Ionicons name="log-out-outline" size={20} color="#ef4444" />
              <Text className="text-red-500 font-bold ml-2">Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="px-6 pb-8">
          <Text className="text-gray-400 text-center text-xs mb-1">
            RealEstate App
          </Text>
          <Text className="text-gray-400 text-center text-xs">
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>

      {/* Help & Support Modal */}
      <Modal
        visible={showHelpSupportModal}
        animationType="slide"
        onRequestClose={() => setShowHelpSupportModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowHelpSupportModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">Help & Support</Text>
            <View className="w-10" />
          </View>

          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="px-6 py-4">
              {/* Contact Support Banner */}
              <View className="bg-gradient-to-r bg-blue-500 rounded-2xl p-6 mb-6">
                <View className="flex-row items-center mb-3">
                  <View className="bg-white/20 p-3 rounded-full">
                    <Ionicons name="headset" size={28} color="#ffffff" />
                  </View>
                  <View className="flex-1 ml-4">
                    <Text className="text-white text-lg font-bold mb-1">
                      Need Help?
                    </Text>
                    <Text className="text-blue-100 text-sm">
                      Our support team is here 24/7
                    </Text>
                  </View>
                </View>
                <TouchableOpacity className="bg-white py-3 rounded-xl mt-2">
                  <Text className="text-blue-600 text-center font-bold">
                    Contact Support Now
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Quick Actions */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Quick Actions
                </Text>
                <View className="flex-row flex-wrap -mx-1.5">
                  <View className="w-1/2 px-1.5 mb-3">
                    <TouchableOpacity className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <View className="bg-blue-100 w-12 h-12 rounded-full items-center justify-center mb-3">
                        <Ionicons name="chatbubbles" size={24} color="#3b82f6" />
                      </View>
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        Live Chat
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        Chat with support
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="w-1/2 px-1.5 mb-3">
                    <TouchableOpacity className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <View className="bg-green-100 w-12 h-12 rounded-full items-center justify-center mb-3">
                        <Ionicons name="call" size={24} color="#22c55e" />
                      </View>
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        Call Us
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        1-800-REALESTATE
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="w-1/2 px-1.5 mb-3">
                    <TouchableOpacity className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                      <View className="bg-purple-100 w-12 h-12 rounded-full items-center justify-center mb-3">
                        <Ionicons name="mail" size={24} color="#a855f7" />
                      </View>
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        Email
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        support@realestate.com
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="w-1/2 px-1.5 mb-3">
                    <TouchableOpacity className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <View className="bg-orange-100 w-12 h-12 rounded-full items-center justify-center mb-3">
                        <Ionicons name="calendar" size={24} color="#f97316" />
                      </View>
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        Schedule Call
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        Book a time
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* FAQs */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Frequently Asked Questions
                </Text>
                
                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold mb-2">
                        How do I schedule a property tour?
                      </Text>
                      <Text className="text-gray-600 text-xs leading-5">
                        Browse properties, select your favorite, and click &quot;Schedule Tour&quot;. Choose your preferred date and time, and we&apos;ll confirm your appointment.
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold mb-2">
                        What payment methods are accepted?
                      </Text>
                      <Text className="text-gray-600 text-xs leading-5">
                        We accept all major credit cards (Visa, Mastercard, Amex), bank transfers, and PayPal for deposits and payments.
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold mb-2">
                        How can I save my favorite properties?
                      </Text>
                      <Text className="text-gray-600 text-xs leading-5">
                        Click the heart icon on any property card to save it to your favorites. Access them anytime from your profile.
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold mb-2">
                        How do I contact a property agent?
                      </Text>
                      <Text className="text-gray-600 text-xs leading-5">
                        Each property listing shows the agent&apos;s contact information. Click &quot;Contact Agent&quot; to send a message or call directly.
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold mb-2">
                        Can I list my property on the app?
                      </Text>
                      <Text className="text-gray-600 text-xs leading-5">
                        Yes! Go to &quot;My Properties&quot; in your profile and click &quot;+ Add&quot; to create a new listing with photos and details.
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold mb-2">
                        How do I update my payment information?
                      </Text>
                      <Text className="text-gray-600 text-xs leading-5">
                        Navigate to &quot;Payment Methods&quot; in your profile. You can add, edit, or remove payment methods securely.
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Popular Topics */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Popular Topics
                </Text>
                <View className="flex-row flex-wrap">
                  <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2">
                    <Text className="text-gray-700 text-xs font-semibold">
                      Account Settings
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2">
                    <Text className="text-gray-700 text-xs font-semibold">
                      Payments & Billing
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2">
                    <Text className="text-gray-700 text-xs font-semibold">
                      Property Search
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2">
                    <Text className="text-gray-700 text-xs font-semibold">
                      Tours & Visits
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2">
                    <Text className="text-gray-700 text-xs font-semibold">
                      Offers & Negotiations
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-2 mr-2 mb-2">
                    <Text className="text-gray-700 text-xs font-semibold">
                      Documents
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Resources */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Resources
                </Text>
                
                <TouchableOpacity className="bg-white rounded-xl mb-3 overflow-hidden border border-gray-200">
                  <View className="flex-row items-center p-4">
                    <View className="bg-blue-100 p-3 rounded-lg">
                      <Ionicons name="book" size={24} color="#3b82f6" />
                    </View>
                    <View className="flex-1 ml-3">
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        User Guide
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        Complete guide to using the app
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl mb-3 overflow-hidden border border-gray-200">
                  <View className="flex-row items-center p-4">
                    <View className="bg-green-100 p-3 rounded-lg">
                      <Ionicons name="play-circle" size={24} color="#22c55e" />
                    </View>
                    <View className="flex-1 ml-3">
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        Video Tutorials
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        Step-by-step video guides
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl mb-3 overflow-hidden border border-gray-200">
                  <View className="flex-row items-center p-4">
                    <View className="bg-purple-100 p-3 rounded-lg">
                      <Ionicons name="people" size={24} color="#a855f7" />
                    </View>
                    <View className="flex-1 ml-3">
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        Community Forum
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        Connect with other users
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl mb-3 overflow-hidden border border-gray-200">
                  <View className="flex-row items-center p-4">
                    <View className="bg-orange-100 p-3 rounded-lg">
                      <Ionicons name="newspaper" size={24} color="#f97316" />
                    </View>
                    <View className="flex-1 ml-3">
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        Blog & Articles
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        Real estate tips and news
                      </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Report a Problem */}
              <View className="bg-red-50 rounded-xl p-4 border border-red-100 mb-6">
                <View className="flex-row items-start">
                  <Ionicons name="warning" size={20} color="#ef4444" />
                  <View className="flex-1 ml-3">
                    <Text className="text-red-900 text-sm font-bold mb-1">
                      Report a Problem
                    </Text>
                    <Text className="text-red-700 text-xs mb-3">
                      Encountered an issue? Let us know so we can fix it quickly.
                    </Text>
                    <TouchableOpacity className="bg-red-500 py-2.5 px-4 rounded-lg self-start">
                      <Text className="text-white text-xs font-bold">
                        Submit Report
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Operating Hours */}
              <View className="bg-gray-50 rounded-xl p-4">
                <Text className="text-gray-900 text-sm font-bold mb-3">
                  Support Hours
                </Text>
                <View className="flex-row items-center mb-2">
                  <Ionicons name="time" size={16} color="#6b7280" />
                  <Text className="text-gray-700 text-xs ml-2">
                    24/7 Live Chat Support
                  </Text>
                </View>
                <View className="flex-row items-center mb-2">
                  <Ionicons name="call" size={16} color="#6b7280" />
                  <Text className="text-gray-700 text-xs ml-2">
                    Phone: Mon-Fri 9AM-6PM EST
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="mail" size={16} color="#6b7280" />
                  <Text className="text-gray-700 text-xs ml-2">
                    Email: Response within 24 hours
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* About Modal */}
      <Modal
        visible={showAboutModal}
        animationType="slide"
        onRequestClose={() => setShowAboutModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowAboutModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">About</Text>
            <View className="w-10" />
          </View>

          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="px-6 py-4">
              {/* App Logo & Name */}
              <View className="items-center py-8 border-b border-gray-100">
                <View className="bg-blue-500 rounded-3xl w-24 h-24 items-center justify-center mb-4 shadow-lg">
                  <Ionicons name="home" size={48} color="#ffffff" />
                </View>
                <Text className="text-gray-900 text-2xl font-bold mb-2">
                  RealEstate App
                </Text>
                <Text className="text-gray-500 text-sm mb-1">
                  Version 1.0.0 (Build 100)
                </Text>
                <View className="bg-green-100 px-3 py-1 rounded-full mt-2">
                  <Text className="text-green-700 text-xs font-bold">
                    Latest Version
                  </Text>
                </View>
              </View>

              {/* App Description */}
              <View className="py-6 border-b border-gray-100">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  About RealEstate
                </Text>
                <Text className="text-gray-600 text-sm leading-6 mb-3">
                  RealEstate is your trusted partner in finding the perfect property. Whether you&apos;re buying, selling, or renting, our platform connects you with thousands of verified listings and experienced agents.
                </Text>
                <Text className="text-gray-600 text-sm leading-6">
                  With advanced search filters, virtual tours, and seamless communication tools, we make real estate simple, transparent, and accessible for everyone.
                </Text>
              </View>

              {/* Key Features */}
              <View className="py-6 border-b border-gray-100">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Key Features
                </Text>
                
                <View className="flex-row items-start mb-3">
                  <View className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Ionicons name="search" size={20} color="#3b82f6" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 text-sm font-bold mb-1">
                      Smart Property Search
                    </Text>
                    <Text className="text-gray-600 text-xs leading-5">
                      Advanced filters to find your dream property quickly
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-start mb-3">
                  <View className="bg-green-100 p-2 rounded-lg mr-3">
                    <Ionicons name="camera" size={20} color="#22c55e" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 text-sm font-bold mb-1">
                      Virtual Tours
                    </Text>
                    <Text className="text-gray-600 text-xs leading-5">
                      Explore properties from the comfort of your home
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-start mb-3">
                  <View className="bg-purple-100 p-2 rounded-lg mr-3">
                    <Ionicons name="chatbubbles" size={20} color="#a855f7" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 text-sm font-bold mb-1">
                      Direct Agent Communication
                    </Text>
                    <Text className="text-gray-600 text-xs leading-5">
                      Connect with verified agents instantly
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-start mb-3">
                  <View className="bg-orange-100 p-2 rounded-lg mr-3">
                    <Ionicons name="shield-checkmark" size={20} color="#f97316" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 text-sm font-bold mb-1">
                      Secure Transactions
                    </Text>
                    <Text className="text-gray-600 text-xs leading-5">
                      Safe and encrypted payment processing
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-start">
                  <View className="bg-red-100 p-2 rounded-lg mr-3">
                    <Ionicons name="notifications" size={20} color="#ef4444" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 text-sm font-bold mb-1">
                      Real-time Alerts
                    </Text>
                    <Text className="text-gray-600 text-xs leading-5">
                      Get notified about new listings and price changes
                    </Text>
                  </View>
                </View>
              </View>

              {/* App Info */}
              <View className="py-6 border-b border-gray-100">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Information
                </Text>
                
                <View className="bg-gray-50 rounded-xl p-4 mb-3">
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-600 text-sm">Version</Text>
                    <Text className="text-gray-900 text-sm font-semibold">1.0.0</Text>
                  </View>
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-600 text-sm">Build Number</Text>
                    <Text className="text-gray-900 text-sm font-semibold">100</Text>
                  </View>
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-600 text-sm">Release Date</Text>
                    <Text className="text-gray-900 text-sm font-semibold">November 1, 2025</Text>
                  </View>
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-600 text-sm">Size</Text>
                    <Text className="text-gray-900 text-sm font-semibold">45.2 MB</Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="text-gray-600 text-sm">Platform</Text>
                    <Text className="text-gray-900 text-sm font-semibold">iOS & Android</Text>
                  </View>
                </View>
              </View>

              {/* Developer Info */}
              <View className="py-6 border-b border-gray-100">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Developer
                </Text>
                <View className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <Text className="text-gray-900 text-sm font-bold mb-2">
                    RealEstate Technologies Inc.
                  </Text>
                  <Text className="text-gray-600 text-xs mb-3">
                    Leading innovation in real estate technology since 2020
                  </Text>
                  <View className="flex-row items-center mb-2">
                    <Ionicons name="globe" size={16} color="#6b7280" />
                    <Text className="text-blue-600 text-xs ml-2">
                      www.realestate.com
                    </Text>
                  </View>
                  <View className="flex-row items-center mb-2">
                    <Ionicons name="mail" size={16} color="#6b7280" />
                    <Text className="text-gray-700 text-xs ml-2">
                      contact@realestate.com
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Ionicons name="location" size={16} color="#6b7280" />
                    <Text className="text-gray-700 text-xs ml-2">
                      San Francisco, CA 94102
                    </Text>
                  </View>
                </View>
              </View>

              {/* Legal Links */}
              <View className="py-6 border-b border-gray-100">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Legal
                </Text>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
                  <View className="flex-row items-center">
                    <Ionicons name="document-text-outline" size={20} color="#6b7280" />
                    <Text className="text-gray-900 text-sm ml-3">Terms of Service</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
                  <View className="flex-row items-center">
                    <Ionicons name="shield-outline" size={20} color="#6b7280" />
                    <Text className="text-gray-900 text-sm ml-3">Privacy Policy</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
                  <View className="flex-row items-center">
                    <Ionicons name="book-outline" size={20} color="#6b7280" />
                    <Text className="text-gray-900 text-sm ml-3">Licenses</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <View className="flex-row items-center">
                    <Ionicons name="newspaper-outline" size={20} color="#6b7280" />
                    <Text className="text-gray-900 text-sm ml-3">End User License Agreement</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>
              </View>

              {/* Social Media */}
              <View className="py-6 border-b border-gray-100">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Follow Us
                </Text>
                <View className="flex-row flex-wrap">
                  <TouchableOpacity className="bg-blue-500 w-12 h-12 rounded-full items-center justify-center mr-3 mb-3">
                    <Ionicons name="logo-facebook" size={24} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-blue-400 w-12 h-12 rounded-full items-center justify-center mr-3 mb-3">
                    <Ionicons name="logo-twitter" size={24} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-gradient-to-r bg-pink-500 w-12 h-12 rounded-full items-center justify-center mr-3 mb-3">
                    <Ionicons name="logo-instagram" size={24} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-blue-700 w-12 h-12 rounded-full items-center justify-center mr-3 mb-3">
                    <Ionicons name="logo-linkedin" size={24} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-red-600 w-12 h-12 rounded-full items-center justify-center mr-3 mb-3">
                    <Ionicons name="logo-youtube" size={24} color="#ffffff" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Rate Us */}
              <View className="py-6 border-b border-gray-100">
                <View className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                  <View className="flex-row items-start">
                    <View className="bg-amber-100 p-2 rounded-full">
                      <Ionicons name="star" size={24} color="#f59e0b" />
                    </View>
                    <View className="flex-1 ml-3">
                      <Text className="text-amber-900 text-sm font-bold mb-1">
                        Enjoying RealEstate?
                      </Text>
                      <Text className="text-amber-700 text-xs mb-3">
                        Rate us on the App Store and share your experience!
                      </Text>
                      <TouchableOpacity className="bg-amber-500 py-2.5 px-4 rounded-lg self-start">
                        <View className="flex-row items-center">
                          <Ionicons name="star" size={16} color="#ffffff" />
                          <Text className="text-white text-xs font-bold ml-1.5">
                            Rate App
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              {/* Check for Updates */}
              <View className="py-6">
                <TouchableOpacity className="bg-blue-500 py-4 rounded-xl">
                  <View className="flex-row items-center justify-center">
                    <Ionicons name="refresh" size={20} color="#ffffff" />
                    <Text className="text-white font-bold ml-2">
                      Check for Updates
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Copyright */}
              <View className="items-center pb-4">
                <Text className="text-gray-400 text-xs mb-1">
                  © 2025 RealEstate Technologies Inc.
                </Text>
                <Text className="text-gray-400 text-xs">
                  All rights reserved.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Language Modal */}
      <Modal
        visible={showLanguageModal}
        animationType="slide"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowLanguageModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">Language</Text>
            <View className="w-10" />
          </View>

          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="px-6 py-4">
              {/* Current Selection Banner */}
              <View className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
                <View className="flex-row items-center">
                  <Ionicons name="globe" size={24} color="#3b82f6" />
                  <View className="flex-1 ml-3">
                    <Text className="text-blue-900 text-xs font-semibold mb-1">
                      Current Language
                    </Text>
                    <Text className="text-blue-700 text-base font-bold">
                      {selectedLanguage}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Popular Languages */}
              <View className="mb-6">
                <Text className="text-gray-900 text-sm font-bold mb-3">
                  Popular Languages
                </Text>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'English' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('English')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇺🇸</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">English</Text>
                      <Text className="text-gray-500 text-xs">United States</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'English' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Spanish' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Spanish')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇪🇸</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Español</Text>
                      <Text className="text-gray-500 text-xs">Spanish</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Spanish' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'French' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('French')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇫🇷</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Français</Text>
                      <Text className="text-gray-500 text-xs">French</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'French' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'German' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('German')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇩🇪</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Deutsch</Text>
                      <Text className="text-gray-500 text-xs">German</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'German' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Chinese' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Chinese')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇨🇳</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">中文</Text>
                      <Text className="text-gray-500 text-xs">Chinese (Simplified)</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Chinese' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>
              </View>

              {/* All Languages */}
              <View className="mb-6">
                <Text className="text-gray-900 text-sm font-bold mb-3">
                  All Languages
                </Text>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Arabic' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Arabic')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇸🇦</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">العربية</Text>
                      <Text className="text-gray-500 text-xs">Arabic</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Arabic' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Portuguese' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Portuguese')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇧🇷</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Português</Text>
                      <Text className="text-gray-500 text-xs">Portuguese</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Portuguese' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Russian' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Russian')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇷🇺</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Русский</Text>
                      <Text className="text-gray-500 text-xs">Russian</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Russian' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Japanese' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Japanese')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇯🇵</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">日本語</Text>
                      <Text className="text-gray-500 text-xs">Japanese</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Japanese' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Korean' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Korean')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇰🇷</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">한국어</Text>
                      <Text className="text-gray-500 text-xs">Korean</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Korean' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Italian' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Italian')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇮🇹</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Italiano</Text>
                      <Text className="text-gray-500 text-xs">Italian</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Italian' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Dutch' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Dutch')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇳🇱</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Nederlands</Text>
                      <Text className="text-gray-500 text-xs">Dutch</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Dutch' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Hindi' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Hindi')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇮🇳</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">हिन्दी</Text>
                      <Text className="text-gray-500 text-xs">Hindi</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Hindi' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Turkish' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Turkish')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇹🇷</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Türkçe</Text>
                      <Text className="text-gray-500 text-xs">Turkish</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Turkish' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLanguage === 'Polish' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLanguage('Polish')}
                >
                  <View className="flex-row items-center flex-1">
                    <Text className="text-2xl mr-3">🇵🇱</Text>
                    <View className="flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Polski</Text>
                      <Text className="text-gray-500 text-xs">Polish</Text>
                    </View>
                  </View>
                  {selectedLanguage === 'Polish' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>
              </View>

              {/* Info Note */}
              <View className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <View className="flex-row items-start">
                  <Ionicons name="information-circle" size={20} color="#f59e0b" />
                  <View className="flex-1 ml-3">
                    <Text className="text-amber-900 text-xs font-semibold mb-1">
                      Language Settings
                    </Text>
                    <Text className="text-amber-700 text-xs leading-5">
                      Changing your language will update all text throughout the app. Some content may take a moment to reload.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Apply Button */}
          <View className="px-6 py-4 border-t border-gray-200 bg-white">
            <TouchableOpacity 
              className="bg-blue-500 py-4 rounded-xl"
              onPress={() => setShowLanguageModal(false)}
            >
              <Text className="text-white text-center font-bold text-base">
                Apply Language
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Location Modal */}
      <Modal
        visible={showLocationModal}
        animationType="slide"
        onRequestClose={() => setShowLocationModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowLocationModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">Location</Text>
            <View className="w-10" />
          </View>

          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="px-6 py-4">
              {/* Current Location Banner */}
              <View className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
                <View className="flex-row items-center">
                  <Ionicons name="location" size={24} color="#3b82f6" />
                  <View className="flex-1 ml-3">
                    <Text className="text-blue-900 text-xs font-semibold mb-1">
                      Current Location
                    </Text>
                    <Text className="text-blue-700 text-base font-bold">
                      {selectedLocation}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Search Box */}
              <View className="mb-6">
                <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                  <Ionicons name="search" size={20} color="#9ca3af" />
                  <TextInput
                    placeholder="Search for a city or state..."
                    placeholderTextColor="#9ca3af"
                    className="flex-1 ml-3 text-gray-900 text-sm"
                  />
                </View>
              </View>

              {/* Current Location Detector */}
              <TouchableOpacity className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
                <View className="flex-row items-center">
                  <View className="bg-green-100 p-2.5 rounded-full">
                    <Ionicons name="navigate" size={20} color="#22c55e" />
                  </View>
                  <View className="flex-1 ml-3">
                    <Text className="text-green-900 text-sm font-bold mb-1">
                      Use Current Location
                    </Text>
                    <Text className="text-green-700 text-xs">
                      Automatically detect your location
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#22c55e" />
                </View>
              </TouchableOpacity>

              {/* Popular Cities */}
              <View className="mb-6">
                <Text className="text-gray-900 text-sm font-bold mb-3">
                  Popular Cities
                </Text>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Los Angeles, CA' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Los Angeles, CA')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-blue-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#3b82f6" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Los Angeles</Text>
                      <Text className="text-gray-500 text-xs">California</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Los Angeles, CA' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'New York, NY' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('New York, NY')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-purple-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#a855f7" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">New York</Text>
                      <Text className="text-gray-500 text-xs">New York</Text>
                    </View>
                  </View>
                  {selectedLocation === 'New York, NY' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Chicago, IL' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Chicago, IL')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-red-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#ef4444" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Chicago</Text>
                      <Text className="text-gray-500 text-xs">Illinois</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Chicago, IL' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Miami, FL' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Miami, FL')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-orange-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#f97316" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Miami</Text>
                      <Text className="text-gray-500 text-xs">Florida</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Miami, FL' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'San Francisco, CA' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('San Francisco, CA')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-green-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#22c55e" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">San Francisco</Text>
                      <Text className="text-gray-500 text-xs">California</Text>
                    </View>
                  </View>
                  {selectedLocation === 'San Francisco, CA' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Seattle, WA' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Seattle, WA')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-teal-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#14b8a6" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Seattle</Text>
                      <Text className="text-gray-500 text-xs">Washington</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Seattle, WA' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>
              </View>

              {/* More Cities */}
              <View className="mb-6">
                <Text className="text-gray-900 text-sm font-bold mb-3">
                  More Cities
                </Text>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Austin, TX' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Austin, TX')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-indigo-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#6366f1" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Austin</Text>
                      <Text className="text-gray-500 text-xs">Texas</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Austin, TX' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Boston, MA' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Boston, MA')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-rose-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#f43f5e" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Boston</Text>
                      <Text className="text-gray-500 text-xs">Massachusetts</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Boston, MA' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Denver, CO' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Denver, CO')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-amber-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#f59e0b" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Denver</Text>
                      <Text className="text-gray-500 text-xs">Colorado</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Denver, CO' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Portland, OR' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Portland, OR')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-lime-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#84cc16" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Portland</Text>
                      <Text className="text-gray-500 text-xs">Oregon</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Portland, OR' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Atlanta, GA' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Atlanta, GA')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-pink-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#ec4899" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Atlanta</Text>
                      <Text className="text-gray-500 text-xs">Georgia</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Atlanta, GA' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Phoenix, AZ' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Phoenix, AZ')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-yellow-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#eab308" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Phoenix</Text>
                      <Text className="text-gray-500 text-xs">Arizona</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Phoenix, AZ' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Las Vegas, NV' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Las Vegas, NV')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-violet-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#8b5cf6" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Las Vegas</Text>
                      <Text className="text-gray-500 text-xs">Nevada</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Las Vegas, NV' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Nashville, TN' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Nashville, TN')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-cyan-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#06b6d4" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Nashville</Text>
                      <Text className="text-gray-500 text-xs">Tennessee</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Nashville, TN' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Dallas, TX' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Dallas, TX')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-sky-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#0ea5e9" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Dallas</Text>
                      <Text className="text-gray-500 text-xs">Texas</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Dallas, TX' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity 
                  className={`flex-row items-center justify-between p-4 rounded-xl mb-2 border-2 ${
                    selectedLocation === 'Philadelphia, PA' ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => setSelectedLocation('Philadelphia, PA')}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="bg-fuchsia-100 p-2 rounded-lg">
                      <Ionicons name="business" size={20} color="#d946ef" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold">Philadelphia</Text>
                      <Text className="text-gray-500 text-xs">Pennsylvania</Text>
                    </View>
                  </View>
                  {selectedLocation === 'Philadelphia, PA' && (
                    <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                  )}
                </TouchableOpacity>
              </View>

              {/* Info Note */}
              <View className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <View className="flex-row items-start">
                  <Ionicons name="information-circle" size={20} color="#3b82f6" />
                  <View className="flex-1 ml-3">
                    <Text className="text-blue-900 text-xs font-semibold mb-1">
                      Location Preference
                    </Text>
                    <Text className="text-blue-700 text-xs leading-5">
                      Your location helps us show you relevant properties and local market information. You can change this anytime.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Apply Button */}
          <View className="px-6 py-4 border-t border-gray-200 bg-white">
            <TouchableOpacity 
              className="bg-blue-500 py-4 rounded-xl"
              onPress={() => setShowLocationModal(false)}
            >
              <Text className="text-white text-center font-bold text-base">
                Apply Location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Privacy & Security Modal */}
      <Modal
        visible={showPrivacySecurityModal}
        animationType="slide"
        onRequestClose={() => setShowPrivacySecurityModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowPrivacySecurityModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">Privacy & Security</Text>
            <View className="w-10" />
          </View>

          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="px-6 py-4">
              {/* Security Status Banner */}
              <View className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
                <View className="flex-row items-center">
                  <View className="bg-green-100 p-2.5 rounded-full">
                    <Ionicons name="shield-checkmark" size={24} color="#22c55e" />
                  </View>
                  <View className="flex-1 ml-3">
                    <Text className="text-green-900 text-sm font-bold mb-1">
                      Account Protected
                    </Text>
                    <Text className="text-green-700 text-xs">
                      Your account security is active and up to date
                    </Text>
                  </View>
                </View>
              </View>

              {/* Security Settings */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Security
                </Text>

                {/* Two-Factor Authentication */}
                <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between mb-2">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-blue-100 p-2 rounded-lg">
                        <Ionicons name="lock-closed" size={20} color="#3b82f6" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Two-Factor Authentication
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          Add an extra layer of security
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => setTwoFactorEnabled(!twoFactorEnabled)}
                      className={`w-12 h-7 rounded-full justify-center ${
                        twoFactorEnabled ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    >
                      <View
                        className={`w-5 h-5 rounded-full bg-white ${
                          twoFactorEnabled ? 'self-end mr-1' : 'self-start ml-1'
                        }`}
                      />
                    </TouchableOpacity>
                  </View>
                  {twoFactorEnabled && (
                    <View className="bg-blue-50 rounded-lg p-3 mt-2">
                      <Text className="text-blue-900 text-xs font-semibold mb-1">
                        Enabled via SMS
                      </Text>
                      <Text className="text-blue-700 text-xs">
                        Code sent to +1 (555) 123-4567
                      </Text>
                    </View>
                  )}
                </View>

                {/* Biometric Login */}
                <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-purple-100 p-2 rounded-lg">
                        <Ionicons name="finger-print" size={20} color="#a855f7" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Biometric Login
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          Use fingerprint or Face ID
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => setBiometricEnabled(!biometricEnabled)}
                      className={`w-12 h-7 rounded-full justify-center ${
                        biometricEnabled ? 'bg-purple-500' : 'bg-gray-300'
                      }`}
                    >
                      <View
                        className={`w-5 h-5 rounded-full bg-white ${
                          biometricEnabled ? 'self-end mr-1' : 'self-start ml-1'
                        }`}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Change Password */}
                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-orange-100 p-2 rounded-lg">
                        <Ionicons name="key" size={20} color="#f97316" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Change Password
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          Last changed 3 months ago
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                {/* Login Activity */}
                <TouchableOpacity className="bg-white rounded-xl p-4 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-green-100 p-2 rounded-lg">
                        <Ionicons name="time" size={20} color="#22c55e" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Login Activity
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          View recent account access
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Privacy Settings */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Privacy
                </Text>

                {/* Profile Visibility */}
                <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center mb-3">
                    <View className="bg-blue-100 p-2 rounded-lg">
                      <Ionicons name="eye" size={20} color="#3b82f6" />
                    </View>
                    <View className="ml-3 flex-1">
                      <Text className="text-gray-900 text-sm font-bold mb-1">
                        Profile Visibility
                      </Text>
                      <Text className="text-gray-600 text-xs">
                        Who can see your profile
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row">
                    <TouchableOpacity
                      onPress={() => setProfileVisibility('Public')}
                      className={`flex-1 py-2 rounded-lg mr-2 ${
                        profileVisibility === 'Public' ? 'bg-blue-500' : 'bg-gray-100'
                      }`}
                    >
                      <Text className={`text-center text-xs font-semibold ${
                        profileVisibility === 'Public' ? 'text-white' : 'text-gray-700'
                      }`}>
                        Public
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setProfileVisibility('Private')}
                      className={`flex-1 py-2 rounded-lg ${
                        profileVisibility === 'Private' ? 'bg-blue-500' : 'bg-gray-100'
                      }`}
                    >
                      <Text className={`text-center text-xs font-semibold ${
                        profileVisibility === 'Private' ? 'text-white' : 'text-gray-700'
                      }`}>
                        Private
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Location Sharing */}
                <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-red-100 p-2 rounded-lg">
                        <Ionicons name="location" size={20} color="#ef4444" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Location Sharing
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          Share location for better results
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => setLocationSharingEnabled(!locationSharingEnabled)}
                      className={`w-12 h-7 rounded-full justify-center ${
                        locationSharingEnabled ? 'bg-red-500' : 'bg-gray-300'
                      }`}
                    >
                      <View
                        className={`w-5 h-5 rounded-full bg-white ${
                          locationSharingEnabled ? 'self-end mr-1' : 'self-start ml-1'
                        }`}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Push Notifications */}
                <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-amber-100 p-2 rounded-lg">
                        <Ionicons name="notifications" size={20} color="#f59e0b" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Push Notifications
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          Receive updates and alerts
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => setNotificationsEnabled(!notificationsEnabled)}
                      className={`w-12 h-7 rounded-full justify-center ${
                        notificationsEnabled ? 'bg-amber-500' : 'bg-gray-300'
                      }`}
                    >
                      <View
                        className={`w-5 h-5 rounded-full bg-white ${
                          notificationsEnabled ? 'self-end mr-1' : 'self-start ml-1'
                        }`}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Block List */}
                <TouchableOpacity className="bg-white rounded-xl p-4 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-gray-100 p-2 rounded-lg">
                        <Ionicons name="ban" size={20} color="#6b7280" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Blocked Users
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          Manage blocked accounts
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Data & Permissions */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Data & Permissions
                </Text>

                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-cyan-100 p-2 rounded-lg">
                        <Ionicons name="download" size={20} color="#06b6d4" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Download My Data
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          Get a copy of your information
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-indigo-100 p-2 rounded-lg">
                        <Ionicons name="document-text" size={20} color="#6366f1" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Data Usage
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          See how your data is used
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="bg-white rounded-xl p-4 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-violet-100 p-2 rounded-lg">
                        <Ionicons name="settings" size={20} color="#8b5cf6" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          App Permissions
                        </Text>
                        <Text className="text-gray-600 text-xs">
                          Manage app access rights
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Connected Accounts */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Connected Accounts
                </Text>

                <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-blue-100 p-2 rounded-lg">
                        <Ionicons name="logo-google" size={20} color="#3b82f6" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Google
                        </Text>
                        <Text className="text-green-600 text-xs font-semibold">
                          Connected
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity className="bg-red-50 px-3 py-1.5 rounded-lg">
                      <Text className="text-red-600 text-xs font-bold">Disconnect</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-blue-700 p-2 rounded-lg">
                        <Ionicons name="logo-facebook" size={20} color="#ffffff" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Facebook
                        </Text>
                        <Text className="text-gray-500 text-xs">
                          Not connected
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity className="bg-blue-50 px-3 py-1.5 rounded-lg">
                      <Text className="text-blue-600 text-xs font-bold">Connect</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="bg-white rounded-xl p-4 border border-gray-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-black p-2 rounded-lg">
                        <Ionicons name="logo-apple" size={20} color="#ffffff" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold mb-1">
                          Apple
                        </Text>
                        <Text className="text-gray-500 text-xs">
                          Not connected
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity className="bg-gray-100 px-3 py-1.5 rounded-lg">
                      <Text className="text-gray-700 text-xs font-bold">Connect</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Danger Zone */}
              <View className="mb-6">
                <Text className="text-gray-900 text-base font-bold mb-3">
                  Danger Zone
                </Text>

                <TouchableOpacity className="bg-red-50 rounded-xl p-4 mb-3 border-2 border-red-200">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-red-100 p-2 rounded-lg">
                        <Ionicons name="trash" size={20} color="#ef4444" />
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-red-900 text-sm font-bold mb-1">
                          Delete Account
                        </Text>
                        <Text className="text-red-700 text-xs">
                          Permanently remove your account
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#ef4444" />
                  </View>
                </TouchableOpacity>

                <View className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <View className="flex-row items-start">
                    <Ionicons name="warning" size={18} color="#f59e0b" />
                    <Text className="flex-1 text-amber-800 text-xs ml-2 leading-5">
                      Account deletion is permanent and cannot be undone. All your data, properties, and transactions will be permanently deleted.
                    </Text>
                  </View>
                </View>
              </View>

              {/* Security Tips */}
              <View className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <View className="flex-row items-start mb-3">
                  <Ionicons name="bulb" size={20} color="#3b82f6" />
                  <Text className="text-blue-900 text-sm font-bold ml-2">
                    Security Tips
                  </Text>
                </View>
                <View className="ml-7">
                  <Text className="text-blue-800 text-xs mb-2">
                    • Use a strong, unique password
                  </Text>
                  <Text className="text-blue-800 text-xs mb-2">
                    • Enable two-factor authentication
                  </Text>
                  <Text className="text-blue-800 text-xs mb-2">
                    • Review login activity regularly
                  </Text>
                  <Text className="text-blue-800 text-xs">
                    • Never share your password with anyone
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
