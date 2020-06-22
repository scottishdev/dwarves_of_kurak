import React, { Component } from 'react';
import CharacterContainer from './CharacterContainer';
import MonsterContainer from './MonsterContainer';
import ItemContainer from './ItemContainer';
import SkillContainer from './SkillContainer';
import JobContainer from './JobContainer';

class GameContainer extends Component{



render(){
  return (
    <div>
        <h1>Character Stuff</h1>
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
