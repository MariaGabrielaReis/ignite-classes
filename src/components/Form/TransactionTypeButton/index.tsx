import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Button, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props extends RectButtonProps {
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
    <Container isSelected={isSelected} type={type}>
      <Button {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
