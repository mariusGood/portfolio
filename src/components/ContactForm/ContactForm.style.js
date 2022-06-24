import styled from 'styled-components';

export const Form = styled.section`
  height: 100vh;
  font-size: 1.25vw;

  h1 {
    font-size: 7vh;
    margin: 0;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50vw;
  }
  label {
    padding: 1vh 0;
  }
  input,
  textarea {
    background: #ffffff50;
    border-radius: 5px;
    border: 1px solid #7deaf4;
    color: #ffffff;
    cursor: default;
    padding: 1.5vh;
  }

  button {
    padding: 2vh;
  }
`;
