import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { products } from '../../../mocks/products';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Text } from '../Text';
import { AddToCartButton, Divider, ProductContainer, ProductDetails, ProductImage } from './styles';

interface handleAddToCart {
    onAddToCart: (product: Product) => void
}

export function Menu({ onAddToCart }: handleAddToCart) {

    const [isProductModalVisible, setIsProductModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

    function handleOpenModal(product: Product) {
        setIsProductModalVisible(true);
        setSelectedProduct(product);
    }

    return (
        <>
            <ProductModal
                visible={isProductModalVisible}
                onClose={() => setIsProductModalVisible(false)}
                product={selectedProduct}
                onAddToCart={onAddToCart}
            />

            <FlatList
                data={products}
                keyExtractor={product => product._id}
                style={{ marginTop: 32 }}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                ItemSeparatorComponent={Divider}
                renderItem={({ item: product }) => (
                    <ProductContainer onPress={() =>
                        handleOpenModal(product)
                    }>
                        <ProductImage
                            source={{
                                uri: `http://192.168.80.102:3001/uploads/${product.imagePath}`

                            }}
                        />
                        <ProductDetails>
                            <Text weight={'600'}>{product.name}</Text>
                            <Text size={14} color={'#666'} style={{ marginVertical: 8 }}>{product.description}</Text>
                            <Text size={14} weight={'600'}>{formatCurrency(product.price)}</Text>
                        </ProductDetails>

                        <AddToCartButton>
                            <TouchableOpacity onPress={() => onAddToCart(product)}>
                                <PlusCircle />
                            </TouchableOpacity>
                        </AddToCartButton>
                    </ProductContainer>
                )} />

        </>
    );
}
