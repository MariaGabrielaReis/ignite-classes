import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(108)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 16px;
  margin-bottom: 108px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.TouchableOpacity`
  width: 100%;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)<CategoryProps>`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
  margin-left: 24px;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.title};
`;

export const Name = styled.Text<CategoryProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.title};
`;

export const Separator = styled.View`
  height: 1px;
  width: 85%;
  background-color: ${({ theme }) => theme.colors.text_card};
  margin-left: 24px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
