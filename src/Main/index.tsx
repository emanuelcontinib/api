import { useState } from 'react';
import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { CartItem } from '../types/CartItem';
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';
import { Cart } from '../components/Cart';
import { Product } from '../types/Product';

export function Main() {

    const [isTableModalVisible, setIsTablemModalVisible] = useState<boolean>(false);
    const [selectedTable, setSelectedTable] = useState('');
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function handleOpenModal() {
        setIsTablemModalVisible(true);
    }
    function handleCloseModal() {
        setIsTablemModalVisible(false);
    }
    function handleSaveTable(table: string) {
        setSelectedTable(table);
    }

    function handleCancelOrder() {
        setSelectedTable('');
    }

    function handleAddToCart(product: Product) {
        alert(product.name);
    }

    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    onCancel={handleCancelOrder}
                />

                <CategoriesContainer>
                    <Categories />
                </CategoriesContainer>

                <MenuContainer>
                    <Menu onAddToCart={handleAddToCart} />
                </MenuContainer>
            </Container>

            <Footer>
                <FooterContainer>
                    {!selectedTable &&
                        <Button onPress={() => handleOpenModal()}>
                            Novo pedido
                        </Button>
                    }
                    {selectedTable &&
                        <Cart cartItems={cartItems} />
                    }
                </FooterContainer>
            </Footer>

            <TableModal
                visible={isTableModalVisible}
                onClose={() => handleCloseModal()}
                onSave={handleSaveTable}
            />
        </>
    );
}
