import React from 'react';
import getCharacters from '../utils/personajes';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Pokemon = () => {
  const characters = getCharacters('http://pokeapi.co/api/v2/pokemon?limit=151');
  return (
    <>
      {characters.map(character => (
        <div className="col-md-4">
         <div className="card">
            <div className="card-header">{character.name}</div>
            <div className="card-body">
                  <img src={'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/'+character.url.split('https://pokeapi.co/api/v2/pokemon/').join('').slice(0, -1)+'.png?raw=true'}/>
            </div>
          </div>
        </div> 
      ))}
    </>
  );
}


export default Pokemon;