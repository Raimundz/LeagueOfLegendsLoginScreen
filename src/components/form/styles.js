import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
  background-color: white;
  a {
    color: gray;
    font-size: small;
    position: absolute;
    top: 94%;
  }
  .createAccount {
    position: absolute;
    top: 97%;
  }
  h1 {
    color: black;
    font-size: medium;
    font-weight: 800;
  }
  .riotLogo {
    height: 100px;
    width: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .username {
    width: 70%;
    height: 35px;
    border-radius: 4px;
    background-color: #e7e7e7;
    border: none;
    margin: 15px;
    padding: 5px;
  }
  .password {
    width: 70%;
    height: 35px;
    border-radius: 4px;
    background-color: #e7e7e7;
    border: none;
    padding: 5px;
  }

  #checkboxLogin {
    margin-top: 4px;
  }
  .checkboxLabel {
    width: 75%;
    color: black;
    font-size: small;
    margin-top: 10px;
    display: flex;

    align-items: flex-start;
  }
  .submitButton {
    position: absolute;
    top: 80%;
    width: 60px;
    height: 60px;
    display: flex;
    border-radius: 18px;

    background-color: #d22a36;
  }
  .submitButton:hover {
    background-color: #bc252a;
  }
`;
