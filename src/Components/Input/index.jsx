import React from "react";
import AddIcon from "../../assets/close-icon.png";
import styles from "./input.module.scss";
const Input = ({
  placeholder,
  value,
  onChange,
  categories,
  setSelectedCategorie,
}) => {
  const handleChange = (e) => {
    setSelectedCategorie(e.target.value);
  };
  return (
    <div className={styles.div_input}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type='text'
      ></input>
      <button type='submit'>
        <img src={AddIcon} alt={"add"} />
      </button>
      <select onChange={handleChange}>
        {categories.map((categorie) => {
          return <option value={categorie}>{categorie}</option>;
        })}
      </select>
    </div>
  );
};

export default Input;
