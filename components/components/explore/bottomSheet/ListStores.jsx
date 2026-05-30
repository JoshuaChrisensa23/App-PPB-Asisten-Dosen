import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { style_explore } from '../../../styles/styleAppLatihan'

const ListStores = ({ stores }) => {
  return (
    <View>
        {stores.map((store, index) => (
            <View key={index} style={style_explore.storeContainer}>
                <View style={style_explore.storeIconWrapper}>
                    <AntDesign name="shopping" size={24} color={"green"} />
                </View>
                <View style={style_explore.storeContentWrapper}>
                    <Text style={style_explore.storeTitle}>
                        {store?.title}
                    </Text>
                    <View style={style_explore.storeRatingContainer}>
                        <AntDesign name="star" size={18} color={"orange"} />
                        <Text style={style_explore.storeRatingText}>4</Text>
                    </View>
                    <Text style={style_explore.storeSubtext}>
                        Open &middot; Close 10.00 pm &middot; (021) 1234-5678
                    </Text>
                </View>
            </View>
        ))}
    </View>
  )
}

export default ListStores