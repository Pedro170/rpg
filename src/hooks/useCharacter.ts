import React from 'react';
import { CharacterSide } from '../types/CharacterSide';
import { mapSpots } from '../data/mapSpots';

export const useCharacter = () => {

  const [ position, setPosition ] = React.useState({ x: 3, y: 5 });
  const [ side, setSide ]         = React.useState<CharacterSide>('down');

  const moveLeft = () => {
    setPosition( position => ({
      x: canMove(position.x - 1, position.y) ? position.x - 1 : position.x,
      y: position.y,
    }) )
    setSide('left')
  }

  const moveRight = () => {
    setPosition( position => ({
      x: canMove(position.x + 1, position.y) ? position.x + 1 : position.x,
      y: position.y,
    }) )
    setSide('right')
  }

  const moveDown = () => {
    setPosition( position => ({
      x: position.x,
      y: canMove( position.x, position.y + 1 ) ? position.y + 1 : position.y,
    }) )
    setSide('down')
  }

  const moveUp = () => {
    setPosition( position => ({
      x: position.x,
      y: canMove( position.x, position.y - 1 ) ? position.y - 1 : position.y,
    }) )
    setSide('up')
  }

  const canMove = ( x: number, y: number ) => {
    if( mapSpots[y] !== undefined && mapSpots[y][x] !== undefined ) {
      return ( mapSpots[y][x] === 1 )
    }

    return false;
  }

  return {
    x: position.x,
    y: position.y,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
    side,
  }
}
