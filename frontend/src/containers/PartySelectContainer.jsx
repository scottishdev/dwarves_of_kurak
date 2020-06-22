import React, {Component} from 'react';
import PartyCharacterSelect from './PartyCharacterSelect';
import requeest from '../helpers/request';
const PartySelectContainer = (props) => {

    

      return (
        <div>
            PartySetup
            <PartyCharacterSelect />
            <PartyCharacterSelect />
            <PartyCharacterSelect />
        </div>
    )
}

export default PartySelectContainer;
