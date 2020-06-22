import React, {useState} from 'react';
import PartyCharacterSelect from './PartyCharacterSelect';

const PartySelectContainer = (props)=>{

    const [selectedCharacterOne,setSelectedCharacterOne] = useState();
    const [selectedCharacterTwo,setSelectedCharacterTwo] = useState();
    const [selectedCharacterThree,setSelectedCharacterThree] = useState();

    function handlePartyChangeOne(id){
        const character = props.characterAssets.find(character=>character.id == id);
        setSelectedCharacterOne(character)
        }

    function handlePartyChangeTwo(id){
        const character = props.characterAssets.find(char=>char.id == id)
        setSelectedCharacterTwo(character)
    }

    function handlePartyChangeThree(id){
        const character = props.characterAssets.find(char=>char.id == id)
        setSelectedCharacterThree(character)
    }

    if(!selectedCharacterOne||!selectedCharacterTwo||!selectedCharacterThree){
        return (
            <div className="party_setup">
                <div className="page_heading">
                    <h3>Party Setup</h3>
                </div>
                <div className="party_character_boxes">
                <PartyCharacterSelect characters={props.characterAssets} character={selectedCharacterOne} key={1}  onHandleChange={handlePartyChangeOne}/>
                <PartyCharacterSelect characters={props.characterAssets} character={selectedCharacterTwo} key={2}   onHandleChange={handlePartyChangeTwo} />
                <PartyCharacterSelect characters={props.characterAssets} character={selectedCharacterThree} key={3}  onHandleChange={handlePartyChangeThree}/>
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