import React from 'react';
import styled from 'styled-components'


function Searchbar(props) {
 
  return (
      <Container>
        <input type="text" onChange={props.searchInput} value={props.searchTerm}></input>
      </Container>
  );
}

export default Searchbar;

const Container = styled.div`

`