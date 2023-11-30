import { useCallback, useEffect, useMemo, useState } from "react";
import { ScoreCard } from "../components/score-card";
import { ScoreKeeperLayout } from "../components/score-keeper-layout";
import { TurnCard } from "../components/turn-card";

type PlayerState = {
  score: number;
  secondary: number;
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
    secondary: 0,
    cp: 0,
  },
  playerTwo: {
    score: 0,
    secondary: 0,
    cp: 0,
  },
  playerThree: {
    score: 0,
    secondary: 0,
    cp: 0,
  },
  playerFour: {
    score: 0,
    secondary: 0,
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
  isMobile: boolean;
  splitSecondaries: boolean;
}

export const ScoreKeeper = ({ openSettings, numberOfPlayers, isMobile, splitSecondaries }: ScoreKeeperProps) => {
  const [score, setScore] = useState<Game>(initialScoreState);
  const [turn, setTurn] = useState(1);
  const [cardState, setCardState] = useState(initialCardState);

  const handleUpdateScore = useCallback((player: Players, score: number, isSecondary?: boolean) =>
    setScore((state) => (
      {
        ...state,
        [player]: {
          ...state[player],
          score: isSecondary ? state[player].score : score,
          secondary: isSecondary ? score : state[player].secondary,
        }
      }
    )
  ), []);

  const handleUpdateCp = useCallback((player: Players, cp: number) => setScore((state) => ({ ...state, [player]: { ...state[player], cp }})), []);
  
  const handleUpdateTurn = useCallback(() => setTurn((current) => current + 1), []);

  const handleUpdateCardState = useCallback((player: Players, newCardState: CardState) =>
    setCardState(state => ({ ...state, [player]: newCardState })), [setCardState]);

  const getScoreCard = useCallback((player: Players) =>
    <ScoreCard
      id={player}
      score={score[player].score}
      secondaryScore={score[player].secondary}
      cp={score[player].cp}
      cardState={cardState[player]}
      isMobile={isMobile}
      splitSecondaries={splitSecondaries}
      updateScore={handleUpdateScore}
      updateCp={handleUpdateCp}
      updateCardState={handleUpdateCardState}
    />,
    [score, cardState, isMobile, splitSecondaries, handleUpdateCardState, handleUpdateScore, handleUpdateCp]
  );

  const PlayerOneCard = useMemo(() => getScoreCard(Players.playerOne), [getScoreCard]);

  const PlayerTwoCard = useMemo(() => getScoreCard(Players.playerTwo), [getScoreCard]);

  const PlayerThreeCard = useMemo(() => getScoreCard(Players.playerThree), [getScoreCard]);

  const PlayerFourCard = useMemo(() => getScoreCard(Players.playerFour), [getScoreCard]);

  const CurrentTurnCard = useMemo(() => <TurnCard turn={turn} updateTurn={handleUpdateTurn} openSettings={openSettings} />, [turn, handleUpdateTurn, openSettings]);

  useEffect(() => {
    setScore(initialScoreState);
    setTurn(1);
    setCardState(initialCardState);
    console.log(typeof numberOfPlayers === 'number')
  }, [numberOfPlayers]);

  return(
    <ScoreKeeperLayout
      PlayerOneCard={PlayerOneCard}
      PlayerTwoCard={PlayerTwoCard}
      PlayerThreeCard={PlayerThreeCard}
      PlayerFourCard={PlayerFourCard}
      TurnCard={CurrentTurnCard}
      numberOfPlayers={numberOfPlayers}
      isMobile={isMobile}
    />
  );
}