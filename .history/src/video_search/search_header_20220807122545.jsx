import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => (
  const inputRef = useRef();
  const handleSearch =() => {

  }

  const onClick =() => {

  }

  const onKeyPress = () => {

  }

    return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="images/logo.png" alt="logo" />
        <h2 className={styles.title}>Youtube</h2>
      </div>
      <input
        ref={inputRef}
        className={styles.input} 
        type="search" 
        placeholder="Search..." 
        onKeyPress={onKeyPress}/>
      <button 
        className={styles.button} 
        type='submit'
        onClick={onClick}>
        <img 
          className={styles.buttonImg}
          src="images/search.png" 
          alt="search"/>
      </button>
    </header>
    )
  );

export default SearchHeader;