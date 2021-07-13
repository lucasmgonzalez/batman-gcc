import React from 'react'
import characters from '../game/characters';

const characterKeys = Object.keys(characters);

const CharacterSelector = ({selected, onChange}) => (
  <select onChange={onChange} value={selected}>
    {characterKeys.map(key => {
      const character = characters[key];
      return (
        <option key={key} value={key}>{character.name}</option>
      )
    })}
  </select>
)

export default CharacterSelector