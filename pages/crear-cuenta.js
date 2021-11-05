import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit } from '../components/ui/Formulario';

const CrearCuenta = () => {
  return (
    <Layout>
      <h1
        css={css`
          text-align: center;
          margin-top: 5rem;
        `}
      >
        Crear cuenta
      </h1>

      <Formulario>
        <Campo>
          <label htmlFor="nombre">Nombre</label>

          <input type="text" id="nombre" placeholder="Nombre" name="nombre" />
        </Campo>

        <Campo>
          <label htmlFor="email">Email</label>

          <input type="email" id="email" placeholder="Email" name="email" />
        </Campo>

        <Campo>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
        </Campo>

        <InputSubmit type="submit" value="Crear Cuenta" />
      </Formulario>
    </Layout>
  );
};

export default CrearCuenta;
