import styled from 'styled-components';

export const Form = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vw 0;
  font-size: 1.25vw;

  h1 {
    font-size: 3.5vw;
    margin: 0;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50vw;
    animation: 2s anim-lineUp ease-out;
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

  @media screen and (max-width: 768px) {
    font-size: 2.5vw;
    h1 {
      font-size: 5vw;
    }
    form {
      width: 80vw;
    }
    label,
    button {
      font-size: 2vw;
    }

    @media screen and (max-width: 426px) {
      font-size: 2vh;
      h1 {
        font-size: 5vh;
      }
      label,
      button {
        font-size: 2vh;
      }
    }
  }
`;
