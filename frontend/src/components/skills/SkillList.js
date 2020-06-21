import React from 'react';
import Skill from './Skill.js';

const SkillList = (props) =>{

  if( props.skills.length ===0){
    return ("Releasing Gas.....")
  }

  const allSkills = props.skills.map((skill, index) => {
    return(

        <div>
          <Skill skill={skill} />
        </div>

    )
  })

return (
  <ul>
    {allSkills}
  </ul>

  )
}

export default SkillList;
