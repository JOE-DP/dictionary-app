import Searchbar from "./Searchbar";
import TopHeader from "./TopHeader";
import React from 'react';


function Header(props) { 
  return (
      <>
        <p >
            {/* top header (icon, font selector, nightmode selector) */}
            <TopHeader toggleState={props.toggleState} colorRange={props.colorRange} darkToggle={props.darkToggle}/>
            {/* bottom header (search function) */}
            <Searchbar searchInput={props.searchInput} searchTerm={props.searchTerm}/>
        </p>
    </>
  );
}

export default Header;