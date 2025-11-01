import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Modal, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showMyPropertiesModal, setShowMyPropertiesModal] = useState(false);
  const [showPropertyDetailsModal, setShowPropertyDetailsModal] = useState(false);
  const [showSavedPropertiesModal, setShowSavedPropertiesModal] = useState(false);
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showPaymentMethodsModal, setShowPaymentMethodsModal] = useState(false);
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
  const [likedProperties, setLikedProperties] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [fullName, setFullName] = useState('Stephen Odunfa');
  const [email, setEmail] = useState('stephen.odunfa@example.com');
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 123-4567');
  const [address, setAddress] = useState('123 Main St, Los Angeles, CA 90001');
  const [bio, setBio] = useState('Real estate enthusiast looking for the perfect home in Los Angeles area.');
  const [profileImage, setProfileImage] = useState('');

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
      title: 'Garden Apartment',
      location: 'Seattle, WA',
      price: '$1,200,000',
      beds: 2,
      baths: 2,
      sqft: '1,500',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      rating: 4.3,
      type: 'For Sale',
      agent: 'Robert Taylor',
    },
    {
      id: 9,
      title: 'Country Estate',
      location: 'Nashville, TN',
      price: '$3,800,000',
      beds: 6,
      baths: 5,
      sqft: '5,200',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      rating: 4.9,
      type: 'For Sale',
      agent: 'Jennifer Brown',
    },
    {
      id: 10,
      title: 'City Condo',
      location: 'Boston, MA',
      price: '$1,650,000',
      beds: 2,
      baths: 2,
      sqft: '1,600',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      rating: 4.2,
      type: 'For Rent',
      agent: 'Thomas Davis',
    },
    {
      id: 11,
      title: 'Lakefront Property',
      location: 'Lake Tahoe, NV',
      price: '$4,500,000',
      beds: 5,
      baths: 4,
      sqft: '4,000',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      rating: 4.8,
      type: 'For Sale',
      agent: 'Karen Miller',
    },
    {
      id: 12,
      title: 'Modern Townhouse',
      location: 'Portland, OR',
      price: '$950,000',
      beds: 3,
      baths: 2,
      sqft: '2,000',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      rating: 4.6,
      type: 'For Sale',
      agent: 'Christopher Lee',
    },
  ];

  const transactions = [
    {
      id: 1,
      property: 'Luxury Penthouse',
      location: 'Manhattan, NY',
      type: 'Purchase',
      amount: '$5,800,000',
      date: 'Oct 15, 2025',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      agent: 'Michael Chen',
      paymentMethod: 'Wire Transfer',
    },
    {
      id: 2,
      property: 'Beach House',
      location: 'Miami Beach, FL',
      type: 'Sale',
      amount: '$2,800,000',
      date: 'Sep 28, 2025',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      agent: 'Emily Rodriguez',
      paymentMethod: 'Bank Transfer',
    },
    {
      id: 3,
      property: 'Modern Villa',
      location: 'Beverly Hills, CA',
      type: 'Tour Booking',
      amount: '$0',
      date: 'Oct 28, 2025',
      status: 'Scheduled',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      agent: 'Sarah Johnson',
      paymentMethod: 'N/A',
    },
    {
      id: 4,
      property: 'Downtown Loft',
      location: 'San Francisco, CA',
      type: 'Rental Payment',
      amount: '$8,500',
      date: 'Oct 1, 2025',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      agent: 'Lisa Anderson',
      paymentMethod: 'Credit Card',
    },
    {
      id: 5,
      property: 'Country Estate',
      location: 'Nashville, TN',
      type: 'Offer Submitted',
      amount: '$3,600,000',
      date: 'Oct 20, 2025',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      agent: 'Jennifer Brown',
      paymentMethod: 'Pending',
    },
    {
      id: 6,
      property: 'Suburban Home',
      location: 'Austin, TX',
      type: 'Purchase',
      amount: '$850,000',
      date: 'Aug 12, 2025',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      agent: 'James Martinez',
      paymentMethod: 'Mortgage',
    },
    {
      id: 7,
      property: 'City Condo',
      location: 'Boston, MA',
      type: 'Rental Deposit',
      amount: '$3,300',
      date: 'Sep 5, 2025',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      agent: 'Thomas Davis',
      paymentMethod: 'Debit Card',
    },
  ];

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Property Match',
      message: 'A luxury penthouse in Manhattan matches your saved search criteria',
      time: '10 minutes ago',
      read: false,
      icon: 'home',
      type: 'property',
    },
    {
      id: 2,
      title: 'Tour Confirmed',
      message: 'Your tour for Modern Villa is scheduled for tomorrow at 2:00 PM',
      time: '1 hour ago',
      read: false,
      icon: 'calendar',
      type: 'tour',
    },
    {
      id: 3,
      title: 'Price Drop Alert',
      message: 'Beach House in Miami Beach dropped by $200,000',
      time: '3 hours ago',
      read: false,
      icon: 'trending-down',
      type: 'price',
    },
    {
      id: 4,
      title: 'Offer Accepted',
      message: 'Your offer for Country Estate has been accepted! Next steps coming soon.',
      time: '5 hours ago',
      read: true,
      icon: 'checkmark-circle',
      type: 'offer',
    },
    {
      id: 5,
      title: 'New Message',
      message: 'Sarah Johnson replied to your inquiry about Modern Villa',
      time: '1 day ago',
      read: true,
      icon: 'chatbubble',
      type: 'message',
    },
    {
      id: 6,
      title: 'Document Upload',
      message: 'Please upload required documents for your mortgage application',
      time: '2 days ago',
      read: false,
      icon: 'document-text',
      type: 'document',
    },
    {
      id: 7,
      title: 'Payment Received',
      message: 'Your rental payment of $8,500 has been processed successfully',
      time: '3 days ago',
      read: true,
      icon: 'card',
      type: 'payment',
    },
    {
      id: 8,
      title: 'Inspection Scheduled',
      message: 'Home inspection for Suburban Home scheduled for Oct 25 at 10:00 AM',
      time: '4 days ago',
      read: true,
      icon: 'construct',
      type: 'inspection',
    },
    {
      id: 9,
      title: 'New Review',
      message: 'Michael Chen left a 5-star review for your property',
      time: '5 days ago',
      read: true,
      icon: 'star',
      type: 'review',
    },
    {
      id: 10,
      title: 'Market Report',
      message: 'October market report for Beverly Hills is now available',
      time: '1 week ago',
      read: true,
      icon: 'bar-chart',
      type: 'report',
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'card',
      cardType: 'Visa',
      last4: '4242',
      holderName: 'John Doe',
      expiryMonth: '12',
      expiryYear: '2026',
      isDefault: true,
      brand: 'visa',
    },
    {
      id: 2,
      type: 'card',
      cardType: 'Mastercard',
      last4: '8888',
      holderName: 'John Doe',
      expiryMonth: '08',
      expiryYear: '2025',
      isDefault: false,
      brand: 'mastercard',
    },
    {
      id: 3,
      type: 'card',
      cardType: 'American Express',
      last4: '1005',
      holderName: 'John Doe',
      expiryMonth: '03',
      expiryYear: '2027',
      isDefault: false,
      brand: 'amex',
    },
    {
      id: 4,
      type: 'bank',
      bankName: 'Chase Bank',
      accountType: 'Checking',
      last4: '6789',
      holderName: 'John Doe',
      isDefault: false,
    },
    {
      id: 5,
      type: 'paypal',
      email: 'john.doe@example.com',
      isDefault: false,
    },
  ]);

  const setDefaultPayment = (id: number) => {
    setPaymentMethods(prev =>
      prev.map(method => ({
        ...method,
        isDefault: method.id === id,
      }))
    );
  };

  const deletePaymentMethod = (id: number) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== id));
  };

  const toggleLike = (id: number) => {
    setLikedProperties((prev) =>
      prev.includes(id) ? prev.filter((propId) => propId !== id) : [...prev, id]
    );
  };

  const saveProfile = () => {
    // Save profile logic here
    setShowEditProfileModal(false);
  };
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
              {email}
            </Text>
            <TouchableOpacity 
              className="bg-blue-500 px-6 py-2.5 rounded-lg"
              onPress={() => setShowEditProfileModal(true)}
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
                  setShowEditProfileModal(true);
                } else if (item.title === 'My Properties') {
                  setShowMyPropertiesModal(true);
                } else if (item.title === 'Saved Properties') {
                  setShowSavedPropertiesModal(true);
                } else if (item.title === 'Transactions') {
                  setShowTransactionsModal(true);
                } else if (item.title === 'Notifications') {
                  setShowNotificationsModal(true);
                } else if (item.title === 'Payment Methods') {
                  setShowPaymentMethodsModal(true);
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
              {item.title === 'Notifications' && unreadCount > 0 && (
                <View className="bg-red-500 rounded-full w-6 h-6 items-center justify-center mr-2">
                  <Text className="text-white text-xs font-bold">{unreadCount}</Text>
                </View>
              )}
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

      {/* Edit Profile Modal */}
      <Modal
        visible={showEditProfileModal}
        animationType="slide"
        onRequestClose={() => setShowEditProfileModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowEditProfileModal(false)}
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
                onPress={() => setShowEditProfileModal(false)}
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
        </View>
      </Modal>

      {/* My Properties Modal */}
      <Modal
        visible={showMyPropertiesModal}
        animationType="slide"
        onRequestClose={() => setShowMyPropertiesModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowMyPropertiesModal(false)}
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
                            setShowMyPropertiesModal(false);
                            setShowPropertyDetailsModal(true);
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
        </View>
      </Modal>

      {/* Property Details Modal */}
      <Modal
        visible={showPropertyDetailsModal}
        animationType="slide"
        onRequestClose={() => setShowPropertyDetailsModal(false)}
        transparent={false}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowPropertyDetailsModal(false)}
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
                      <View className="bg-blue-500 w-10 h-10 rounded-full items-center justify-center">
                        <Text className="text-white font-bold">JD</Text>
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold">John Doe</Text>
                        <Text className="text-gray-500 text-xs">2 hours ago</Text>
                      </View>
                    </View>
                    <TouchableOpacity className="bg-blue-50 px-3 py-1.5 rounded-lg">
                      <Text className="text-blue-600 text-xs font-bold">Reply</Text>
                    </TouchableOpacity>
                  </View>
                  <Text className="text-gray-600 text-sm">
                    I&apos;m interested in scheduling a viewing. Is this weekend available?
                  </Text>
                </View>

                <View className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
                  <View className="flex-row items-center justify-between mb-2">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-green-500 w-10 h-10 rounded-full items-center justify-center">
                        <Text className="text-white font-bold">SM</Text>
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold">Sarah Miller</Text>
                        <Text className="text-gray-500 text-xs">5 hours ago</Text>
                      </View>
                    </View>
                    <TouchableOpacity className="bg-blue-50 px-3 py-1.5 rounded-lg">
                      <Text className="text-blue-600 text-xs font-bold">Reply</Text>
                    </TouchableOpacity>
                  </View>
                  <Text className="text-gray-600 text-sm">
                    What are the HOA fees for this property?
                  </Text>
                </View>

                <View className="bg-white rounded-xl p-4 border border-gray-200">
                  <View className="flex-row items-center justify-between mb-2">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-orange-500 w-10 h-10 rounded-full items-center justify-center">
                        <Text className="text-white font-bold">RJ</Text>
                      </View>
                      <View className="ml-3 flex-1">
                        <Text className="text-gray-900 text-sm font-bold">Robert Johnson</Text>
                        <Text className="text-gray-500 text-xs">1 day ago</Text>
                      </View>
                    </View>
                    <TouchableOpacity className="bg-blue-50 px-3 py-1.5 rounded-lg">
                      <Text className="text-blue-600 text-xs font-bold">Reply</Text>
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
                      <Text className="text-green-700 text-xs font-bold">Active</Text>
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
                      <Ionicons name="create" size={20} color="#ffffff" />
                      <Text className="text-white font-bold ml-2">Edit Listing</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 bg-gray-100 py-3.5 rounded-xl ml-2">
                    <View className="flex-row items-center justify-center">
                      <Ionicons name="share-social" size={20} color="#1f2937" />
                      <Text className="text-gray-900 font-bold ml-2">Share</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className="flex-row">
                  <TouchableOpacity className="flex-1 bg-orange-50 py-3.5 rounded-xl mr-2 border border-orange-200">
                    <View className="flex-row items-center justify-center">
                      <Ionicons name="pause-circle" size={20} color="#f97316" />
                      <Text className="text-orange-600 font-bold ml-2">Pause Listing</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 bg-red-50 py-3.5 rounded-xl ml-2 border border-red-200">
                    <View className="flex-row items-center justify-center">
                      <Ionicons name="trash" size={20} color="#ef4444" />
                      <Text className="text-red-600 font-bold ml-2">Delete</Text>
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
        </View>
      </Modal>

      {/* Saved Properties Modal */}
      <Modal
        visible={showSavedPropertiesModal}
        animationType="slide"
        onRequestClose={() => setShowSavedPropertiesModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowSavedPropertiesModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">Saved Properties</Text>
            <View className="w-10" />
          </View>

          {/* Summary Stats */}
          <View className="px-6 py-1 bg-blue-50 border-b border-blue-100">
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
                    onPress={() => setShowSavedPropertiesModal(false)}
                  >
                    <Text className="text-white font-semibold">
                      Explore Properties
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Transactions Modal */}
      <Modal
        visible={showTransactionsModal}
        animationType="slide"
        onRequestClose={() => setShowTransactionsModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowTransactionsModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">Transactions</Text>
            <View className="w-10" />
          </View>

          {/* Summary Stats */}
          <View className="px-6 py-3 bg-gray-50 border-b border-gray-100">
            <View className="flex-row justify-around">
              <View className="items-center">
                <Text className="text-gray-900 text-xl font-bold">{transactions.length}</Text>
                <Text className="text-gray-500 text-xs mt-1">Total</Text>
              </View>
              <View className="items-center">
                <Text className="text-green-600 text-xl font-bold">
                  {transactions.filter(t => t.status === 'Completed').length}
                </Text>
                <Text className="text-gray-500 text-xs mt-1">Completed</Text>
              </View>
              <View className="items-center">
                <Text className="text-orange-600 text-xl font-bold">
                  {transactions.filter(t => t.status === 'Pending').length}
                </Text>
                <Text className="text-gray-500 text-xs mt-1">Pending</Text>
              </View>
              <View className="items-center">
                <Text className="text-blue-600 text-xl font-bold">
                  {transactions.filter(t => t.status === 'Scheduled').length}
                </Text>
                <Text className="text-gray-500 text-xs mt-1">Scheduled</Text>
              </View>
            </View>
          </View>

          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="px-6 py-4">
              {transactions.map((transaction) => (
                <View
                  key={transaction.id}
                  className="bg-white rounded-xl mb-3 overflow-hidden border border-gray-200"
                >
                  <View className="flex-row">
                    {/* Property Image */}
                    <Image
                      source={{ uri: transaction.image }}
                      className="w-24 h-24"
                      resizeMode="cover"
                    />

                    {/* Transaction Details */}
                    <View className="flex-1 p-3">
                      <View className="flex-row items-center justify-between mb-1">
                        <Text className="text-gray-900 text-sm font-bold flex-1" numberOfLines={1}>
                          {transaction.property}
                        </Text>
                        <View className={`px-2 py-1 rounded-md ml-2 ${
                          transaction.status === 'Completed' ? 'bg-green-50' :
                          transaction.status === 'Pending' ? 'bg-orange-50' :
                          'bg-blue-50'
                        }`}>
                          <Text className={`text-xs font-semibold ${
                            transaction.status === 'Completed' ? 'text-green-600' :
                            transaction.status === 'Pending' ? 'text-orange-600' :
                            'text-blue-600'
                          }`}>
                            {transaction.status}
                          </Text>
                        </View>
                      </View>

                      <View className="flex-row items-center mb-1">
                        <Ionicons name="location-outline" size={12} color="#6b7280" />
                        <Text className="text-gray-500 text-xs ml-1" numberOfLines={1}>
                          {transaction.location}
                        </Text>
                      </View>

                      <View className="flex-row items-center justify-between mt-1">
                        <View className="flex-row items-center">
                          <Ionicons name="document-text-outline" size={12} color="#3b82f6" />
                          <Text className="text-blue-600 text-xs font-medium ml-1">
                            {transaction.type}
                          </Text>
                        </View>
                        <Text className="text-gray-900 text-sm font-bold">
                          {transaction.amount}
                        </Text>
                      </View>

                      <View className="flex-row items-center justify-between mt-1">
                        <View className="flex-row items-center">
                          <Ionicons name="calendar-outline" size={12} color="#6b7280" />
                          <Text className="text-gray-500 text-xs ml-1">
                            {transaction.date}
                          </Text>
                        </View>
                        {transaction.paymentMethod !== 'N/A' && transaction.paymentMethod !== 'Pending' && (
                          <View className="flex-row items-center">
                            <Ionicons name="card-outline" size={12} color="#6b7280" />
                            <Text className="text-gray-500 text-xs ml-1">
                              {transaction.paymentMethod}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>

                  {/* Action Footer */}
                  <View className="flex-row border-t border-gray-100">
                    <TouchableOpacity className="flex-1 py-2.5 border-r border-gray-100">
                      <View className="flex-row items-center justify-center">
                        <Ionicons name="eye-outline" size={16} color="#3b82f6" />
                        <Text className="text-blue-600 text-xs font-semibold ml-1">
                          View Details
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 py-2.5">
                      <View className="flex-row items-center justify-center">
                        <Ionicons name="download-outline" size={16} color="#6b7280" />
                        <Text className="text-gray-600 text-xs font-semibold ml-1">
                          Receipt
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}

              {/* Empty State */}
              {transactions.length === 0 && (
                <View className="items-center py-12">
                  <View className="bg-gray-100 rounded-full p-8 mb-4">
                    <Ionicons name="document-text-outline" size={64} color="#9ca3af" />
                  </View>
                  <Text className="text-gray-900 text-lg font-bold mb-2">
                    No Transactions Yet
                  </Text>
                  <Text className="text-gray-500 text-sm text-center mb-6">
                    Your transaction history will appear here
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Notifications Modal */}
      <Modal
        visible={showNotificationsModal}
        animationType="slide"
        onRequestClose={() => setShowNotificationsModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowNotificationsModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">Notifications</Text>
            <View className="w-10" />
          </View>

          {/* Summary Bar */}
          <View className="px-6 py-3 bg-gray-50 border-b border-gray-100">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-600 text-sm">
                  {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
                </Text>
              </View>
              {unreadCount > 0 && (
                <TouchableOpacity 
                  className="bg-blue-500 px-4 py-2 rounded-lg"
                  onPress={markAllAsRead}
                >
                  <Text className="text-white text-xs font-semibold">Mark All Read</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="px-6 py-4">
              {notifications.map((notification) => (
                <TouchableOpacity
                  key={notification.id}
                  className={`mb-3 rounded-xl overflow-hidden border ${
                    !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                  }`}
                  onPress={() => markAsRead(notification.id)}
                >
                  <View className="flex-row p-4">
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
                        <Text className={`text-base font-semibold flex-1 ${
                          !notification.read ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {notification.title}
                        </Text>
                        {!notification.read && (
                          <View className="bg-blue-500 w-2 h-2 rounded-full ml-2" />
                        )}
                      </View>
                      
                      <Text className="text-gray-600 text-sm mb-2">
                        {notification.message}
                      </Text>
                      
                      <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                          <Ionicons name="time-outline" size={14} color="#9ca3af" />
                          <Text className="text-gray-400 text-xs ml-1">
                            {notification.time}
                          </Text>
                        </View>
                        
                        <TouchableOpacity
                          onPress={() => deleteNotification(notification.id)}
                          className="p-1"
                        >
                          <Ionicons name="trash-outline" size={16} color="#ef4444" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}

              {/* Empty State */}
              {notifications.length === 0 && (
                <View className="items-center py-12">
                  <View className="bg-gray-100 rounded-full p-8 mb-4">
                    <Ionicons name="notifications-outline" size={64} color="#9ca3af" />
                  </View>
                  <Text className="text-gray-900 text-lg font-bold mb-2">
                    No Notifications
                  </Text>
                  <Text className="text-gray-500 text-sm text-center mb-6">
                    You&apos;re all caught up! Check back later for updates.
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Payment Methods Modal */}
      <Modal
        visible={showPaymentMethodsModal}
        animationType="slide"
        onRequestClose={() => setShowPaymentMethodsModal(false)}
      >
        <View className="flex-1 bg-white">
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          
          {/* Modal Header */}
          <View className="flex-row justify-between items-center px-6 py-4 pt-14 border-b border-gray-100">
            <TouchableOpacity 
              onPress={() => setShowPaymentMethodsModal(false)}
              className="bg-gray-100 p-2 rounded-full"
            >
              <Ionicons name="arrow-back" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text className="text-gray-900 text-xl font-bold">Payment Methods</Text>
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
              <Text className="text-white text-sm font-semibold">+ Add</Text>
            </TouchableOpacity>
          </View>

          {/* Summary Stats */}
          <View className="px-6 py-3 bg-gray-50 border-b border-gray-100">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-600 text-sm mb-1">Total Methods</Text>
                <Text className="text-gray-900 text-xl font-bold">{paymentMethods.length} Payment Options</Text>
              </View>
              <View className="bg-green-500 rounded-full px-3 py-1.5">
                <Text className="text-white text-xs font-bold">
                  {paymentMethods.filter(m => m.isDefault).length} Default
                </Text>
              </View>
            </View>
          </View>

          <ScrollView 
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="px-6 py-4">
              {/* Info Banner */}
              <View className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <View className="flex-row items-start">
                  <Ionicons name="shield-checkmark" size={20} color="#3b82f6" />
                  <View className="flex-1 ml-3">
                    <Text className="text-blue-900 text-sm font-semibold mb-1">
                      Secure Payment Processing
                    </Text>
                    <Text className="text-blue-700 text-xs">
                      All payment information is encrypted and securely stored. We never share your financial details.
                    </Text>
                  </View>
                </View>
              </View>

              {/* Payment Methods List */}
              {paymentMethods.map((method) => (
                <View
                  key={method.id}
                  className={`mb-3 rounded-xl overflow-hidden border-2 ${
                    method.isDefault ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'
                  }`}
                >
                  <View className="p-4">
                    {/* Card Payment Method */}
                    {method.type === 'card' && (
                      <>
                        <View className="flex-row items-center justify-between mb-3">
                          <View className="flex-row items-center flex-1">
                            <View className={`p-3 rounded-lg ${
                              method.brand === 'visa' ? 'bg-blue-100' :
                              method.brand === 'mastercard' ? 'bg-red-100' :
                              'bg-blue-100'
                            }`}>
                              <Ionicons 
                                name="card" 
                                size={24} 
                                color={
                                  method.brand === 'visa' ? '#1e40af' :
                                  method.brand === 'mastercard' ? '#dc2626' :
                                  '#1e40af'
                                } 
                              />
                            </View>
                            <View className="ml-3 flex-1">
                              <Text className="text-gray-900 text-base font-bold">
                                {method.cardType}
                              </Text>
                              <Text className="text-gray-500 text-sm">
                                •••• •••• •••• {method.last4}
                              </Text>
                            </View>
                          </View>
                          {method.isDefault && (
                            <View className="bg-green-500 px-3 py-1 rounded-full">
                              <Text className="text-white text-xs font-bold">Default</Text>
                            </View>
                          )}
                        </View>

                        <View className="bg-gray-50 rounded-lg p-3 mb-3">
                          <View className="flex-row justify-between mb-2">
                            <Text className="text-gray-600 text-xs">Cardholder</Text>
                            <Text className="text-gray-900 text-xs font-semibold">
                              {method.holderName}
                            </Text>
                          </View>
                          <View className="flex-row justify-between">
                            <Text className="text-gray-600 text-xs">Expires</Text>
                            <Text className="text-gray-900 text-xs font-semibold">
                              {method.expiryMonth}/{method.expiryYear}
                            </Text>
                          </View>
                        </View>
                      </>
                    )}

                    {/* Bank Account Payment Method */}
                    {method.type === 'bank' && (
                      <>
                        <View className="flex-row items-center justify-between mb-3">
                          <View className="flex-row items-center flex-1">
                            <View className="bg-purple-100 p-3 rounded-lg">
                              <Ionicons name="business" size={24} color="#7c3aed" />
                            </View>
                            <View className="ml-3 flex-1">
                              <Text className="text-gray-900 text-base font-bold">
                                {method.bankName}
                              </Text>
                              <Text className="text-gray-500 text-sm">
                                {method.accountType} ••••{method.last4}
                              </Text>
                            </View>
                          </View>
                          {method.isDefault && (
                            <View className="bg-green-500 px-3 py-1 rounded-full">
                              <Text className="text-white text-xs font-bold">Default</Text>
                            </View>
                          )}
                        </View>

                        <View className="bg-gray-50 rounded-lg p-3 mb-3">
                          <View className="flex-row justify-between">
                            <Text className="text-gray-600 text-xs">Account Holder</Text>
                            <Text className="text-gray-900 text-xs font-semibold">
                              {method.holderName}
                            </Text>
                          </View>
                        </View>
                      </>
                    )}

                    {/* PayPal Payment Method */}
                    {method.type === 'paypal' && (
                      <>
                        <View className="flex-row items-center justify-between mb-3">
                          <View className="flex-row items-center flex-1">
                            <View className="bg-blue-100 p-3 rounded-lg">
                              <Ionicons name="logo-paypal" size={24} color="#0070ba" />
                            </View>
                            <View className="ml-3 flex-1">
                              <Text className="text-gray-900 text-base font-bold">
                                PayPal
                              </Text>
                              <Text className="text-gray-500 text-sm">
                                {method.email}
                              </Text>
                            </View>
                          </View>
                          {method.isDefault && (
                            <View className="bg-green-500 px-3 py-1 rounded-full">
                              <Text className="text-white text-xs font-bold">Default</Text>
                            </View>
                          )}
                        </View>
                      </>
                    )}

                    {/* Action Buttons */}
                    <View className="flex-row border-t border-gray-200 pt-3 mt-1">
                      {!method.isDefault && (
                        <TouchableOpacity 
                          className="flex-1 bg-blue-50 py-2.5 rounded-lg mr-2"
                          onPress={() => setDefaultPayment(method.id)}
                        >
                          <View className="flex-row items-center justify-center">
                            <Ionicons name="checkmark-circle-outline" size={16} color="#3b82f6" />
                            <Text className="text-blue-600 text-sm font-semibold ml-1">
                              Set Default
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity 
                        className={`${method.isDefault ? 'flex-1' : 'flex-1'} bg-gray-100 py-2.5 rounded-lg ${method.isDefault ? '' : 'ml-2'}`}
                      >
                        <View className="flex-row items-center justify-center">
                          <Ionicons name="create-outline" size={16} color="#6b7280" />
                          <Text className="text-gray-700 text-sm font-semibold ml-1">
                            Edit
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        className="bg-red-50 py-2.5 px-4 rounded-lg ml-2"
                        onPress={() => deletePaymentMethod(method.id)}
                      >
                        <Ionicons name="trash-outline" size={16} color="#ef4444" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}

              {/* Empty State */}
              {paymentMethods.length === 0 && (
                <View className="items-center py-12">
                  <View className="bg-gray-100 rounded-full p-8 mb-4">
                    <Ionicons name="card-outline" size={64} color="#9ca3af" />
                  </View>
                  <Text className="text-gray-900 text-lg font-bold mb-2">
                    No Payment Methods
                  </Text>
                  <Text className="text-gray-500 text-sm text-center mb-6 px-8">
                    Add a payment method to make transactions easier and faster
                  </Text>
                  <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-xl">
                    <Text className="text-white font-semibold">
                      Add Payment Method
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* Accepted Payment Types */}
              <View className="mt-6 bg-gray-50 rounded-xl p-4">
                <Text className="text-gray-900 text-sm font-bold mb-3">
                  Accepted Payment Methods
                </Text>
                <View className="flex-row flex-wrap">
                  <View className="bg-white rounded-lg px-3 py-2 mr-2 mb-2 border border-gray-200">
                    <Text className="text-gray-700 text-xs font-semibold">💳 Visa</Text>
                  </View>
                  <View className="bg-white rounded-lg px-3 py-2 mr-2 mb-2 border border-gray-200">
                    <Text className="text-gray-700 text-xs font-semibold">💳 Mastercard</Text>
                  </View>
                  <View className="bg-white rounded-lg px-3 py-2 mr-2 mb-2 border border-gray-200">
                    <Text className="text-gray-700 text-xs font-semibold">💳 Amex</Text>
                  </View>
                  <View className="bg-white rounded-lg px-3 py-2 mr-2 mb-2 border border-gray-200">
                    <Text className="text-gray-700 text-xs font-semibold">💳 Discover</Text>
                  </View>
                  <View className="bg-white rounded-lg px-3 py-2 mr-2 mb-2 border border-gray-200">
                    <Text className="text-gray-700 text-xs font-semibold">🏦 Bank Transfer</Text>
                  </View>
                  <View className="bg-white rounded-lg px-3 py-2 mr-2 mb-2 border border-gray-200">
                    <Text className="text-gray-700 text-xs font-semibold">PayPal</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>

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
                        Code sent to {phoneNumber}
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
