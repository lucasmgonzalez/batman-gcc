import React from 'react'
import characters from '../game/characters'
import skills from '../game/skills'
import CharacterSelector from '../components/CharacterSelector'

const buildCharacterSkillDescription = (description, number) => description.replaceAll('[X]', number)

export default function Home() {
  const [character, setCharacter] = React.useState('batman')

  const currentCharacter = characters[character]

  const handleChange = ({target}) => {
    setCharacter(target.value);
  }

  return (
    <>
      <CharacterSelector selected={character} onChange={handleChange} />

      <h1>{currentCharacter.name}</h1>

      <h2>Skills</h2>

      <ul>
        {currentCharacter.skills.map(characterSkill => {
          const skill = skills[characterSkill.name]
          
          return (
            <li key={characterSkill.name}>
              <h4>{skill.name}</h4>
              <p>{buildCharacterSkillDescription(skill.description, characterSkill.number)}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
