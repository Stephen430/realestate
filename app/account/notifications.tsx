import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationsScreen() {
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
    </SafeAreaView>
  );
}
