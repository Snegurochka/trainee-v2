import styled from "styled-components";
import { AuthForm } from "../../features/Auth";

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
`;
const AuthPage = () => {
  return (
    <PageWrapper>
      <AuthForm />
    </PageWrapper>
  );
};

export default AuthPage;
