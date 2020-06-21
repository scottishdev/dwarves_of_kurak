import React, { Component } from 'react';
import CharacterContainer from './CharacterContainer.js';
import MonsterContainer from './MonsterContainer.js';
import ItemContainer from './ItemContainer.js';
import SkillContainer from './SkillContainer.js';
import JobContainer from './JobContainer.js';


class GameContainer extends Component{



render(){
  return (
    <div>
    <h2>Character Stuff</h2>
    <CharacterContainer/>
    <h2>Monster Stuff</h2>
    <MonsterContainer/>
    <h2>Item Stuff</h2>
    <ItemContainer/>
    <h2>Skill Stuff</h2>
    <SkillContainer/>
    <h2>Job Skills</h2>
    <JobContainer/>
    </div>
  )
}

}
export default GameContainer;
