import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { isAndroid } from '../utils/isAndroid';



export const Container = styled.SafeAreaView`
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    flex: 1;
    background: #fafafa;
`;

export const CategoriesContainer = styled.View`
    height: 73px;
    margin-top: 34px;
`;

export const MenuContainer = styled.View`
    flex: 1;
`;

export const Footer = styled.View`
    min-height: 110px;
    padding: 16px 24px;
    background: #fff;
`;

export const FooterContainer = styled.SafeAreaView`

`;
