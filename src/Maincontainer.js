import Header from "./Header";
import Body from "./Body";
import React, { useEffect, useState } from 'react';

function MainContainer() {
    const[darkToggle, setDarkToggle] = useState(false)
    const[colorRange, setColorRange] = useState({secondaryBackground: '#D1E8E2', primaryFont: '#19747E'})
    const[searchTerm, setSearchTerm] = useState('checking')
    const[dictData, setDictData] = useState('')
    function toggleState(){
        setDarkToggle(!darkToggle)
    }
    // soft mint green #D1E8E2, deep teal #19747E, light sky blue #A9D6E5, light gray #E2E2E2 - lightmode (default)
    useEffect(() => {
        if(darkToggle){
            setColorRange({secondaryBackground: 'grey', primaryFont: 'black'})
        } else {
            setColorRange({secondaryBackground: '#D1E8E2', primaryFont: '#19747E'})
        }
    }, [darkToggle])

    function searchDict() {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            .then(res => res.json())
            .then(data =>{
                setDictData(data[0])
            })
    }

    useEffect(() => {
        console.log(dictData.meanings[0]['partOfSpeech'])
    }, [dictData])
    
      return (
        <>
            <p>
             {/* container for nav and search (header) */}
             <Header toggleState={toggleState} darkToggle={darkToggle} colorRange={colorRange}/>         
             {/* container for definitions (body) */}
             <Body dictData={dictData} searchDict={searchDict}/>  
            </p>
        </>
      );
    }
    
    export default MainContainer;