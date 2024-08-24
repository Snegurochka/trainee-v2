import { Button } from "../../../shared/UI/Button/Button";
import { useChallenge } from "../services/use-challenge-hook";

export const Challenge = () => {
  const { isChallengeActive, startChallengeHandler } = useChallenge();

  return (
    <div>
      Challenge
      {isChallengeActive ? (
         <Button onClick={startChallengeHandler}>Restart Challenge</Button>
      ) : (
        <Button onClick={startChallengeHandler}>Start Challenge</Button>
      )}
    </div>
  );
};
