import { Image, Text, TouchableOpacity, View } from 'react-native'
import { color_list, styles } from '../../styles/styleAppLatihan'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function bookCollections({ books }) {
    const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <View style={styles.container_book_collection}>
      <View style={styles.h_container}>
        <Text style={styles.container_book_collections_title}>Book Collection</Text>
        <Text style={{ color: color_list.green }}>See All</Text>
      </View>
      <BookList books={sortedBooks} />
    </View>
  )
}

const BookList = ({ books }) => {
    return (
        <View style={styles.book_grid}>
            {books.map((book, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.book_card, styles.shadow]}
                    activeOpacity={0.7}
                >
                    <BookItemImg book={book} />
                    <BookItemContent book={book} />
                </TouchableOpacity>
            ))}
        </View>
    )
}

const BookItemImg = ({ book }) => {
    return (
        <View style={{ position: 'relative' }}>
            <Image source={book.image} style={styles.book_img} />
            {book.is_free && (
                <View style={[styles.circle_premium_small, styles.shadow]}>
                    <AntDesign name='crown' size={18} color="black" />
                </View>
            )}
        </View>
    )
}

const BookItemContent = ({ book }) => {
    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.book_card_title}>{book.title}</Text>
            <Text style={styles.book_card_author} numberOfLines={1}>{book.author}</Text>
            <View style={styles.book_card_footer}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name='star' size={14} color={color_list.orange} />
                    <Text style={styles.book_rating}>{book.rating} ({book.review})</Text>
                </View>
                
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='bookmark' size={18} color="gray" />
                    <Text style={styles.book_card_views}>{book.views}</Text>
                </View>
            </View>
        </View>
    )
}
