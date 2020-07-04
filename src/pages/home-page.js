import React, { useEffect } from "react";
import { Directory } from "../components/directory";
import "../scss/main.scss";

const HomePage = () => {
  useEffect(() => {
    document.title = 'Home page'
  });

  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default HomePage;
