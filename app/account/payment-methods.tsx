import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentMethodsScreen() {
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
    </SafeAreaView>
  );
}
