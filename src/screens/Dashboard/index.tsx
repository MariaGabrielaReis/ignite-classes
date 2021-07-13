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
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard() {
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
    </Container>
  );
}
