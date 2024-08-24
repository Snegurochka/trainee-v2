import styled from "styled-components";
import { useChallenge } from "../services/use-challenge-hook";
import { ChallengeProgressBar } from "./ChallengeProgressBar";
import { Box } from "../../../shared/UI/Box/Box";

const Wrapper = styled(Box)`
  margin-top: 24px;
`;

export const ChallengeWinCard = () => {
  const { isChallengeActive, currentDay } = useChallenge();

  if (!isChallengeActive) {
    return null;
  }

  return (
    <Wrapper>
      <div>{currentDay} days</div>
      <ChallengeProgressBar days={currentDay} />
    </Wrapper>
  );
};
