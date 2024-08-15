import styled from "styled-components";
import { Hero } from "../../widgets/Hero/Hero";

const Wrapper = styled.main`
  max-width: 1200px;
  margin: 24px auto;
`;
const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

export default HomePage;
