import styled from 'styled-components/native';

export const ProductImageDetail = styled.ImageBackground`
    width: 100%;
    height: 200px;
    align-items: flex-end;

`;


export const CloseButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
    background: rgba(0,0,0,0.5);
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    margin: 24px;
`;

export const ModalBody = styled.View`
    flex: 1;
    background: #fafafa;
    padding: 32px 24px 0px;

`;
export const Header = styled.View`

`;

export const IngredientsContainer = styled.View`
    margin-top: 32px;
    flex: 1;
`;

export const Ingredient = styled.View`
    flex-direction: row;
    padding: 16px;
    border-radius: 8px;
    border: rgba(204,204,204,0.3);
    align-items: center;
    margin-bottom: 4px;
`;


export const ProductFooter = styled.View`
    min-height: 110px;
    padding: 16px 24px;
    background: #fff;
`;

export const ProductFooterContainer = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PriceContainer = styled.View`
    flex-direction: column;
`;


