import TopHeader from "./TopHeader";
import React from 'react';


function Header(props) {
 
  return (
      <>
        <p >
            {/* top header (icon, font selector, nightmode selector) */}
            <TopHeader toggleState={props.toggleState} colorRange={props.colorRange} darkToggle={props.darkToggle}/>
            {/* bottom header (search function) */}
        </p>
    </>
  );
}

export default Header;