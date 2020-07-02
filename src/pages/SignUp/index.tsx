import React from 'react';
import { FiArrowDownLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Go Barber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="/">
          <FiArrowDownLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  )
}

export default SignUp;
