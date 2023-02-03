import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
    height: 65vh;
    background-color: rgba(33, 33, 33, 0.88);
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 25%);

  h2 {
    font-size: 20px;
  }


  button {
    cursor: pointer;
    box-shadow: 0px 0px 5px #0a0a0a70;
    margin-top: 15px;
    color: white;
    border-radius: 3px;
    font-family: 'Fira Code';
    border: none;
    padding: 8px 30px;
    background: rgba(3, 9, 1, 0.97);
    font-size: 13px;

    &:hover {
      transition: 0.5s ease-in-out;
      box-shadow: 0px 0px 7px #0a0a0a;
      }
    }
`;
