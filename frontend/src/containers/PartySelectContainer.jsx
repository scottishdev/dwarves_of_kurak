import React, {useState} from 'react';
import PartyCharacterSelect from './PartyCharacterSelect';

const PartySelectContainer = (props)=>{

    const [selChar,setSelChar] = useState({party:[],loopcount:[0,1,2]});
    const i = [0,1,2]
    
    function handlePartyChange(id,index){
        console.log("change party member " + id);
        const character = props.characterAssets.find(character=>character.id == id);
        const party = selChar.party
        party[index] = character
        setSelChar({party:party})
    }

    const partySelectorComponents = i.map(index=>{
            return (
                <PartyCharacterSelect 
                    characters={props.characterAssets}
                    character={selChar.party[index]}
                    key={index}
                    onHandleChange={char_id=>handlePartyChange(char_id,index)}
                 />
                
            )
          
        })

    if(selChar.party.length<3){
        return (
            <div className="party_setup">
                {console.log("rendering partySelect Container")}
                
                <div className="page_heading">
                    <h3>Party Setup</h3>
                </div>
                <div className="party_character_boxes">
                    {partySelectorComponents}
                </div>
            </div>
        )
    } else{
        return(
            <div className="party_setup">
                party selected
            </div>
        )
    }
 

}


export default PartySelectContainer;