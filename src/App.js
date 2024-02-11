import React, { useState } from "react";
import styled from "styled-components";
import LoginPage from "./Componenets/LoginPage";

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
      <LoginPage showPopup={showPopup}
                 showCongratulations={showCongratulations}
                 handleChange={handleChange}
                 handleSubmit={handleSubmit}
                 closePopup={closePopup}
                 formData={formData}
      />
    </MainContainer>
  );
}


const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 50, 0.8), rgba(0, 0, 50, 0.8)),
    url(bg.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
`;
