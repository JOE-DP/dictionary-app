import Header from "./Header";
import Body from "./Body";
import React, { useEffect, useState } from 'react';

function MainContainer() {
    const[darkToggle, setDarkToggle] = useState(false)
    const[colorRange, setColorRange] = useState({secondaryBackground: '#D1E8E2', primaryFont: '#19747E'})
    const[searchTerm, setSearchTerm] = useState('help')
    const[dictData, setDictData] = useState(false)
    const[font, setFont] = useState('Open Sans')
    function toggleState(){
        setDarkToggle(!darkToggle)
    }

    //function to handle the search input
    function searchInput(e){
        let searchValue = e.target.value
        if(searchValue == ''){
            searchValue = "-"
        }
        setSearchTerm(searchValue)
    }

    //function to select font
    function fontSelect(e){
        setFont(e.target.outerText)
        }


    // soft mint green #D1E8E2, deep teal #19747E, light sky blue #A9D6E5, light gray #E2E2E2 - lightmode (default)
    //below effect changes the colour mapping object based upon the change of dark toggle
    useEffect(() => {
        if(darkToggle){
            setColorRange({secondaryBackground: 'grey', primaryFont: 'black'})
        } else {
            setColorRange({secondaryBackground: '#D1E8E2', primaryFont: '#19747E'})
        }
    }, [darkToggle])

    //inital API load
    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            .then(res => res.json())
            .then(data =>{
                if(data.title){
                    setDictData(false)
                } else {
                    setDictData(data[0])
                }
            })
    }, [])

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then(res => res.json())
        .then(data =>{
            if(data.title){
                setDictData(false)
            } else {
                setDictData(data[0])
            }
        })
    }, [searchTerm])
    
    
      return (
        <>
            <p>
             {/* container for nav and search (header) */}
             <Header toggleState={toggleState} darkToggle={darkToggle} colorRange={colorRange} searchInput={searchInput} font={font} fontSelect={fontSelect}/>         
             {/* container for definitions (body) */}
             <Body dictData={dictData} searchTerm={searchTerm} font={font}/>  
            </p>
        </>
      );
    }
    
    export default MainContainer;