import styled from 'styled-components'
import React from 'react';




function Body(props) {
  console.log(props)
  let dictData = props.dictData
  let defArr = []
   if(props.dictData){
    // processing the definitions loop and display
  let loopLen = 0
  let defLen = dictData.meanings[0]['definitions'].length
  defLen > 3 ? loopLen = 3 : loopLen = defLen
  for(let i = 0; i < loopLen; i++){
    defArr.push(i)
  }
}
  if(dictData == false){
    return (
      <Container style={{fontFamily: props.font}}> 
      <p>Search not found, please try to search again in the search bar above</p>
      </Container>
    )} else {
  return (
                
        <Container style={{fontFamily: props.font}} onClick={props.searchDict}>

        <FieldContainer>
        <h1>{dictData.word}</h1>
        </FieldContainer>


        <FieldContainer>
        <span>Phonetic:</span><p className='italics'>{dictData.phonetic}</p>
        </FieldContainer>
        {/* map =< 3 meanings */}


        {defArr.map((i) => { return (
          <div style={{border: 'grey 1px solid', marginBottom: '1%', padding: '1%'}} >
        <FieldContainer>
        <span>Part of Speech:</span><p>{dictData.meanings[0]['partOfSpeech']}</p>
        </FieldContainer>

        <FieldContainer>
        <span>Definition:</span><p>{dictData.meanings[0]['definitions'][i]['definition']}</p>
        </FieldContainer>

        <FieldContainer>
        <span>Example of Use:</span><p>{dictData.meanings[0]['definitions'][i]['example']}</p>
        </FieldContainer>
          </div>
        )
        })}
      

        </Container>
    
  );
  } 
  }
 


export default Body;

const Container = styled.div`

`

const FieldContainer = styled.div`
display: flex;
align-items: center;
p{
  padding-left: 5%;
}
span{
  font-weight: bold;
}
.italics{
  font-style: italic;
}

`