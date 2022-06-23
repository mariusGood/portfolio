import styled from 'styled-components';

export const Form = styled.section`
  height: 80vh;

  h1 {
    font-size: 3rem;
    margin: 0;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    background: #2e2e2e;
    margin: 0 auto;
    width: 50%;
  }
  label {
    padding: 0.5rem 0;
  }
  input,
  textarea {
    color: #ffffff;
    padding: 1rem;
    background: #7e7e7e;
    border: 1px solid #7deaf4;
    border-radius: 5px;
  }

  button {
    padding: 1rem;
  }
`;
