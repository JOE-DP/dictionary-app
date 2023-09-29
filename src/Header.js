import TopHeader from "./TopHeader";
import React from 'react';


function Header(props) {
  function show(){
    console.log(props)
  }

  return (
      <>
        <p >
            {/* top header (icon, font selector, nightmode selector) */}
            <TopHeader toggleState={props.toggleState} colorRange={props.colorRange} darkToggle={props.darkToggle} onClick={show}/>
            {/* bottom header (search function) */}
        </p>
    </>
  );
}

export default Header;