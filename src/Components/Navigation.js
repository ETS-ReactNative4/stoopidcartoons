import React from 'react';
import '../Css/Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul id="navigationUl">
        <li className="navigationLi">
          <a href="#">Home</a>
        </li>
        <li className="navigationLi">
          <a href="#">Games</a>
        </li>
        <li className="navigationLi">
          <a href="#">About</a>
        </li>
        <li className="navigationLi">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
