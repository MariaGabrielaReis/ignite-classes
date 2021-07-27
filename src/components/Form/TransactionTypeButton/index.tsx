import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isSelected: boolean;
}

export function TransactionTypeButton({
  type,
  title,
  isSelected,
  ...rest
}: Props) {
  return (
    <Container isSelected={isSelected} type={type} {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
