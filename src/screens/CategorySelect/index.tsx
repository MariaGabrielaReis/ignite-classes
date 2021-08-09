import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';
import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Category onPress={() => handleCategorySelect(item)}>
            <Icon name={item.icon} isActive={category.key === item.key} />
            <Name isActive={category.key === item.key}>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
        style={{ flex: 1, width: '100%' }}
      />

      <Footer>
        <Button title={'Selecionar'} onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}
