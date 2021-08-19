import React from 'react';
import './search-box.styles.css';


export const SearchBox = ({placeholder,handleChange})=>(

    <input class = "search" onChange ={handleChange} type="search" placeholder = {placeholder}></input>

)