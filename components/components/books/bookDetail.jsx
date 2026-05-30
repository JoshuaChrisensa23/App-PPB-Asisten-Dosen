import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import ListBooks from '../../constants/listBooks'

export default function BookDetail() {
    const params = useLocalSearchParams();
    const id = params?.id;
    const book = ListBooks.find((book) => String(book.id) === String(id));
  return (
    <SafeAreaView>
        <Text>ID: {String(id)}</Text>
        <Text>Title: {book?.title ?? 'Not found'}</Text>
    </SafeAreaView>
  )
}
