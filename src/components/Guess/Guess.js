import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {

  const characters = guess?.value.split("") || ["", "", "", "", ""]

  return (
    <>
      {
        range(0, 5).map((index) => {

          return (
            <span data-key={index} key={index} className={`cell${guess ? ` ${guess.validation[index].status}` : ""}`}>{characters[index]}</span>
          )
        })
      }
    </>
  )
}

export default Guess;
