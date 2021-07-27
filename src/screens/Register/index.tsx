import React, { useState } from 'react';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Button } from '../../components/Form/Button';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handlesetTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder={'Nome'} />
          <Input placeholder={'Preço'} />
          <TransactionTypes>
            <TransactionTypeButton
              type={'up'}
              title={'Entrada'}
              onPress={() => handlesetTransactionTypeSelect('up')}
              isSelected={transactionType === 'up'}
            />
            <TransactionTypeButton
              type={'down'}
              title={'Saída'}
              onPress={() => handlesetTransactionTypeSelect('down')}
              isSelected={transactionType === 'down'}
            />
          </TransactionTypes>
        </Fields>
        <Button title={'Enviar'} />
      </Form>
    </Container>
  );
}
