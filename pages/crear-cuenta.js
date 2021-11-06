import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout/Layout';
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from '../components/ui/Formulario';

import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: '',
};

const CrearCuenta = () => {
  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  function crearCuenta() {
    console.log('creannndo cuennnta');
  }

  const { nombre, email, password } = valores;

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

      <Formulario onSubmit={handleSubmit}>
        <Campo>
          <label htmlFor="nombre">Nombre</label>

          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Campo>

        {errores.nombre && <Error>{errores.nombre}</Error>}

        <Campo>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Campo>

        {errores.email && <Error>{errores.email}</Error>}

        <Campo>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Campo>

        {errores.password && <Error>{errores.password}</Error>}

        <InputSubmit type="submit" value="Crear Cuenta" />
      </Formulario>
    </Layout>
  );
};

export default CrearCuenta;
