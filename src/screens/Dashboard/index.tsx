import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de Aplicativo',
      amount: 'R$ 21.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '21/07/2021',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Pizza',
      amount: 'R$ 154,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '21/07/2021',
    },
    {
      id: '3',
      type: 'positive',
      title: 'Desenvolvimento de Site',
      amount: 'R$ 6.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '21/07/2021',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://github.com/MariaGabrielaReis.png' }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Maby</UserName>
            </User>
          </UserInfo>
          <Icon name={'power'} />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title={'Entradas'}
          type={'up'}
          amount={'R$ 21.700,00'}
          lastTransaction={'Última entrada dia 07 de julho'}
        />
        <HighlightCard
          title={'Saídas'}
          type={'down'}
          amount={'R$ 1.500,00'}
          lastTransaction={'Última entrada dia 12 de julho'}
        />
        <HighlightCard
          title={'Total'}
          type={'total'}
          amount={'R$ 20.200,00'}
          lastTransaction={'01 à 13 de julho'}
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
