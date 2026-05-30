import React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListBook from '../constants/listBooks';
import Header from './latihan-page/header';
import CTABook from './latihan-page/ctaBook';
import CategoriesNav from './latihan-page/categories';
import BookCollections from './latihan-page/bookCollections';
import { color_list, styles } from '../styles/styleAppLatihan';

export default function homeScreenLatihan() {
    const lastBook = ListBook[ListBook.length - 1]
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        <Header />
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <View style={{ flex: 1 }}>
                <CTABook book={lastBook} />
                <CategoriesNav />
                <BookCollections books={ListBook} />
            </View>
            <View>
                <Text style={{ color: color_list.green}} >&copy: 2026 23231002-Joshua</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
    
  )
}
