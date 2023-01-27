import { useCallback, useMemo, useState } from "react";
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
}

export enum Players {
  playerOne = 'playerOne',
  playerTwo = 'playerTwo',
}

const initialState: Game = {
  playerOne: {
    score: 0,
    cp: 12,
  },
  playerTwo: {
    score: 0,
    cp: 12,
  },
}

export const ScoreKeeper = () => {
  const [score, setScore] = useState<Game>(initialState);
  const [turn, setTurn] = useState(1);

  const handleUpdateScore = useCallback((player: Players, score: number) => setScore((state) => ({ ...state, [player]: { ...state[player], score }})), []);

  const handleUpdateCp = useCallback((player: Players, cp: number) => setScore((state) => ({ ...state, [player]: { ...state[player], cp }})), []);
  
  const handleUpdateTurn = useCallback(() => setTurn((current) => current + 1), []);

  const PlayerOneCard = useMemo(() => <ScoreCard id={Players.playerOne} score={score.playerOne.score} cp={score.playerOne.cp} updateScore={handleUpdateScore} updateCp={handleUpdateCp} />, [score.playerOne, handleUpdateScore, handleUpdateCp]);

  const PlayerTwoCard = useMemo(() => <ScoreCard id={Players.playerTwo} score={score.playerTwo.score} cp={score.playerTwo.cp} updateScore={handleUpdateScore} updateCp={handleUpdateCp} />, [score.playerTwo, handleUpdateScore, handleUpdateCp]);

  const CurrentTurnCard = useMemo(() => <TurnCard turn={turn} updateTurn={handleUpdateTurn} />, [turn, handleUpdateTurn]);

  return <ScoreKeeperLayout PlayerOneCard={PlayerOneCard} PlayerTwoCard={PlayerTwoCard} TurnCard={CurrentTurnCard} />;
}