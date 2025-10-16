import React, { useState } from "react";
import "./Welcome.css";

function Welcome({}) {
  return (
    <div className="welcome-container">
      <h1>Bem-vindo à sua agenda</h1>
      <p>Use o menu à esquerda para gerenciar seus contatos</p>
    </div>
  );
}
export default Welcome;
