import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {
        range(0, 6).map((index) => {

          return (
            <p key={index} data-key={index} className="guess">
              <Guess guess={guesses[index] || undefined} />
            </p>
          )
        })
      }
    </div>
  )
}

export default GuessResults;
