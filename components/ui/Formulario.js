import styled from '@emotion/styled';

export const Formulario = styled.form`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
`;

export const Campo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }

  input {
    flex: 1;
    padding: 1rem;
  }
`;

export const InputSubmit = styled.input`
  width: 100%;
  padding: 1.5rem;
  border: none;
  font-size: 1.8rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--naranja);
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export const Error = styled.p`
  padding: 1rem;
  margin: 2rem 0;
  font-size: 1.4rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: red;
`;
