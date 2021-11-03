import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const InputText = styled.input`
  min-width: 30rem;
  border: 0.1rem solid var(--gris3);
  padding: 1rem;
`;

const InputSubmit = styled.button`
  display: block;
  position: absolute;
  right: 1rem;
  top: 0.1rem;
  height: 3rem;
  width: 3rem;
  border: none;
  background-size: 4rem;
  background-image: url('/static/img/buscar.png');
  background-repeat: no-repeat;
  background-color: white;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`;

const Buscar = () => {
  return (
    <form
      css={css`
        position: relative;
      `}
    >
      <InputText type="text" placeholder="Buscar productos" />
      <InputSubmit type="submit">Buscar</InputSubmit>
    </form>
  );
};

export default Buscar;
