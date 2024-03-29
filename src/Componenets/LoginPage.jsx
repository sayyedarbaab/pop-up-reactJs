import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

function LoginPage({
  showPopup,
  showCongratulations,
  handleChange,
  handleSubmit,
  closePopup,
  formData,
}) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <FormField>
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <input
            placeholder="Enter Your Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormField>
        <LoginBtn type="submit">Login</LoginBtn>
      </Form>
      {showPopup && (
        <Popup>
          <h1>OOPS!</h1>
          <p>Please Fill in All Requirement</p>
          <LoginBtn onClick={closePopup}>close</LoginBtn>
        </Popup>
      )}
      {showCongratulations && (
        <CongratulationsPopup>
          <h1>Congratulations!</h1>
          <p>Your Detail is Correct</p>
          <LoginBtn onClick={closePopup}>close</LoginBtn>
        </CongratulationsPopup>
      )}
    </div>
  );
}

export default LoginPage;

const Form = styled.form`
  width: 20%;
  max-width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 50px 60px 70px;
  text-align: center;
  height: 60vh;
  align-items: center;
  border-radius: 20px;
  gap: 20px;
  h1 {
    font-size: 30px;
    position: relative;
    font-family: "Fira Sans", sans-serif;
  }
`;

const FormField = styled.div`
  margin-bottom: 1rem;
  margin: 15px 0;
  border-radius: 3px;
  display: flex;
  align-items: center;
  max-height: 65px;
  input {
    width: 100%;
    border-radius: 10px;
    padding: 15px 10px;
    margin: auto;
  }
  ::placeholder {
    font-family: "Fira Sans", sans-serif;
  }
`;
const LoginBtn = styled.button`
  padding: 18px 10px;
  background-color: gray;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: auto;
  cursor: pointer;
  margin-top: 30px;
  height: 3vh;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  font: bold;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 20%;
  text-align: center;
  h1 {
    font-family: "Fira Sans", sans-serif;
  }
`;
const CongratulationsPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 20%;
  text-align: center;
  h1 {
    font-family: "Fira Sans", sans-serif;
  }
`;
