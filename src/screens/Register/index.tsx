import React, { useState, useEffect } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';

import { InputForm } from '../../components/InputForm';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Button } from '../../components/Form/Button';
import { CategorySelect } from '../CategorySelect';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O preço é obrigatório'),
});

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const dataKey = '@gofinances:transactions';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSetTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione uma categoria');
    }

    const newTransaction = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    try {
      // recupera os dados que já existem e adiciona o novo
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newTransaction];
      // precisa converter pra string para guardar
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar');
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey);
      // já que tava guardado como string, muda para JSON de novo
      console.log(JSON.parse(data!));
    }

    loadData();

    // async function removeAll() {
    //   await AsyncStorage.removeItem(dataKey);
    // }
    // removeAll();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              control={control}
              name={'name'}
              placeholder={'Nome'}
              autoCapitalize={'sentences'}
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name={'amount'}
              placeholder={'Preço'}
              keyboardType={'numeric'}
              error={errors.amount && errors.amount.message}
            />

            <TransactionTypes>
              <TransactionTypeButton
                type={'up'}
                title={'Entrada'}
                onPress={() => handleSetTransactionTypeSelect('up')}
                isSelected={transactionType === 'up'}
              />
              <TransactionTypeButton
                type={'down'}
                title={'Saída'}
                onPress={() => handleSetTransactionTypeSelect('down')}
                isSelected={transactionType === 'down'}
              />
            </TransactionTypes>
            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </Fields>
          <Button title={'Enviar'} onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
