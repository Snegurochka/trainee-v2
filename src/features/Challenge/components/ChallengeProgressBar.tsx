import styled from "styled-components";
import { Box, FlexBox } from "../../../shared/UI/Box/Box";


const ChallengeDay = styled(Box)`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

const ChallengeSuccessDay = styled(ChallengeDay)`
  background: var(--primary-color);
`;

const ChallengeEmptyDay = styled(ChallengeDay)`
  background: var(--lightGrey);
`;

const week = new Array(14).fill("");

export const ChallengeProgressBar = ({ days }: { days: number }) => {

  return (
    <FlexBox gap={1}>
      {week.map((day, index) => {
        return index < days ? <ChallengeSuccessDay /> : <ChallengeEmptyDay />;
      })}
    </FlexBox>
  );
};
