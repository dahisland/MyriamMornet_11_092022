import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error404 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contentPage">
      <Header />
      <main className="error404_main">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </main>
      <Footer />
    </div>
  );
};

export default Error404;