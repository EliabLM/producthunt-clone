import React from 'react';
import Layout from '../components/layout/Layout';

const CrearCuenta = () => {
  return (
    <Layout>
      <h1>Crear cuenta</h1>

      <form>
        <div>
          <label htmlFor="nombre">Nombre</label>

          <input type="text" id="nombre" placeholder="Nombre" name="nombre" />
        </div>

        <div>
          <label htmlFor="email">Email</label>

          <input type="email" id="email" placeholder="Email" name="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <input type="submit" value="Crear Cuenta" />
      </form>
    </Layout>
  );
};

export default CrearCuenta;
