import { useCallback, useEffect, useMemo, useState } from "react";
import { ScoreCard } from "../components/score-card";
import { ScoreKeeperLayout } from "../components/score-keeper-layout";
import { TurnCard } from "../components/turn-card";

type PlayerState = {
  score: number;
  cp: number;
}

type Game = {
  playerOne: PlayerState;
  playerTwo: PlayerState;
  playerThree: PlayerState;
  playerFour: PlayerState;
}

export enum Players {
  playerOne = 'playerOne',
  playerTwo = 'playerTwo',
  playerThree = 'playerThree',
  playerFour = 'playerFour',
}

const initialScoreState: Game = {
  playerOne: {
    score: 0,
    cp: 0,
  },
  playerTwo: {
    score: 0,
    cp: 0,
  },
  playerThree: {
    score: 0,
    cp: 0,
  },
  playerFour: {
    score: 0,
    cp: 0,
  }
}

type CardState = { minusActive: boolean };
const initialCardState: { [key: string]: CardState } = {
  [Players.playerOne]: {
    minusActive: false,
  },
  [Players.playerTwo]: {
    minusActive: false,
  },
  [Players.playerThree]: {
    minusActive: false,
  },
  [Players.playerFour]: {
    minusActive: false,
  }
}

type ScoreKeeperProps = {
  openSettings(): void;
  numberOfPlayers: number;
}

export const ScoreKeeper = ({ openSettings, numberOfPlayers }: ScoreKeeperProps) => {
  const [score, setScore] = useState<Game>(initialScoreState);
  const [turn, setTurn] = useState(1);
  const [cardState, setCardState] = useState(initialCardState);

  const handleUpdateScore = useCallback((player: Players, score: number) => setScore((state) => ({ ...state, [player]: { ...state[player], score }})), []);

  const handleUpdateCp = useCallback((player: Players, cp: number) => setScore((state) => ({ ...state, [player]: { ...state[player], cp }})), []);
  
  const handleUpdateTurn = useCallback(() => setTurn((current) => current + 1), []);

  const handleUpdateCardState = useCallback((player: Players, newCardState: CardState) =>
    setCardState(state => ({ ...state, [player]: newCardState })), [setCardState]);

  const PlayerOneCard = useMemo(() => 
    <ScoreCard
      id={Players.playerOne}
      score={score.playerOne.score}
      cp={score.playerOne.cp}
      updateScore={handleUpdateScore}
      updateCp={handleUpdateCp}
      updateCardState={handleUpdateCardState}
      cardState={cardState.playerOne}
    />,
    [score.playerOne, handleUpdateScore, handleUpdateCp, handleUpdateCardState, cardState.playerOne]
  );

  const PlayerTwoCard = useMemo(() =>
    <ScoreCard
      id={Players.playerTwo}
      score={score.playerTwo.score}
      cp={score.playerTwo.cp}
      updateScore={handleUpdateScore}
      updateCp={handleUpdateCp}
      updateCardState={handleUpdateCardState}
      cardState={cardState.playerTwo}
    />, [score.playerTwo, handleUpdateScore, handleUpdateCp, handleUpdateCardState, cardState.playerTwo]
  );

  const PlayerThreeCard = useMemo(() =>
    <ScoreCard
      id={Players.playerThree}
      score={score.playerThree.score}
      cp={score.playerThree.cp}
      updateScore={handleUpdateScore}
      updateCp={handleUpdateCp}
      updateCardState={handleUpdateCardState}
      cardState={cardState.playerThree}
    />, [score.playerThree, handleUpdateScore, handleUpdateCp, handleUpdateCardState, cardState.playerThree]
  );

  const PlayerFourCard = useMemo(() =>
    <ScoreCard
      id={Players.playerFour}
      score={score.playerFour.score}
      cp={score.playerFour.cp}
      updateScore={handleUpdateScore}
      updateCp={handleUpdateCp}
      updateCardState={handleUpdateCardState}
      cardState={cardState.playerFour}
    />, [score.playerFour, handleUpdateScore, handleUpdateCp, handleUpdateCardState, cardState.playerFour]
  );

  const CurrentTurnCard = useMemo(() => <TurnCard turn={turn} updateTurn={handleUpdateTurn} openSettings={openSettings} />, [turn, handleUpdateTurn, openSettings]);

  useEffect(() => {
    setScore(initialScoreState);
    setTurn(1);
    setCardState(initialCardState);
    console.log(typeof numberOfPlayers === 'number')
  }, [numberOfPlayers]);

  return <ScoreKeeperLayout
    PlayerOneCard={PlayerOneCard}
    PlayerTwoCard={PlayerTwoCard}
    PlayerThreeCard={PlayerThreeCard}
    PlayerFourCard={PlayerFourCard}
    TurnCard={CurrentTurnCard}
    numberOfPlayers={numberOfPlayers}
  />;
}