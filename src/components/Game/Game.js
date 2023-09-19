import React, { useEffect, useState } from 'react';

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import Form from '../Form';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {

  const [answer, setAnswer] = useState(() => sample(WORDS))

  const [guesses, setGuesses] = useState([])

  const [hasWon, setHasWon] = useState(false)

  const [gameOver, setGameOver] = useState(false)

  const nGuess = guesses.length

  const hasLost = gameOver && !hasWon

  const onGuessSubmit = (value) => {

    if (value === answer) {
      setHasWon(true)
    }

    const validation = checkGuess(value, answer)

    const nextGuesses = [...guesses]
    nextGuesses.push({
      value,
      key: Math.random(),
      validation
    })
    
    setGuesses(nextGuesses)
  }

  useEffect(() => {
    if(nGuess === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true)
    }
  }, [nGuess])

  const restart = () => {
    setGuesses([])
    setHasWon(false)
    setGameOver(false)
    setAnswer(sample(WORDS))
  }

  console.log(answer)

  return (
    <>
      <GuessResults guesses={guesses} />
      <Form disable={gameOver} onGuessSubmit={onGuessSubmit} />
      {hasWon &&
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
          <button onClick={restart}>Restart</button>
        </div>
      }
      {hasLost &&
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          <button onClick={restart}>Restart</button>
        </div>
      }
    </>
  )
}

export default Game;
