import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TransactionsScreen() {
  const router = useRouter();

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
      property: 'Mountain Cabin',
      location: 'Aspen, CO',
      type: 'Consultation Fee',
      amount: '$500',
      date: 'Oct 20, 2025',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      agent: 'David Wilson',
      paymentMethod: 'Pending',
    },
  ];

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
        <Text className="text-gray-900 text-xl font-bold">Transactions</Text>
        <View className="w-10" />
      </View>

      {/* Summary Stats */}
      <View className="px-6 py-4 bg-gray-50 border-b border-gray-100">
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
    </SafeAreaView>
  );
}
