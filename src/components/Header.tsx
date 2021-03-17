import React from "react";
import styles from '../styles/components/Header.module.css';

interface HeaderProps {
  info: string;
}

const Header: React.FC<HeaderProps> = ({ info }) => {
  return (
    <div className={styles.HeaderContainer}>
      <h1>{info}</h1>
    </div>
  );
};

export default Header;
