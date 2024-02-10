import React, { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showCongratulations, setShowCongratulationsPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
      setShowCongratulationsPopup(true);
    }
  };
  const closePopup = () => {
    setShowPopup(false);
    setShowCongratulationsPopup(false);
  };
  return (
    <MainContainer>
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
        <Button type="submit">Login</Button>
        <Button type="submit">SignUp</Button>
      </Form>
      {showPopup && (
        <Popup>
          <h1>OOPS!</h1>
          <p>Please Fill in All Requirement</p>
          <Button onClick={closePopup}>close</Button>
        </Popup>
      )}
      {showCongratulations && (
        <CongratulationsPopup>
          <h1>Congratulations!</h1>
          <p>Your Detail is Correct</p>
          <Button onClick={closePopup}>close</Button>
        </CongratulationsPopup>
      )}
    </MainContainer>
  );
}

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
  height: 50vh;
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
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
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
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 50, 0.8), rgba(0, 0, 50, 0.8)),
    url(bg.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
`;
