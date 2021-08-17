import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isSelected: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;

  border-width: ${({ isSelected }) => (isSelected ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.background_menu};
  border-radius: 5px;

  ${({ isSelected, type }) =>
    isSelected &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}

  ${({ isSelected, type }) =>
    isSelected &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
  opacity: 0.8;
  margin-right: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  opacity: 0.8;
`;
