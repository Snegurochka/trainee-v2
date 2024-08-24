import styled from "styled-components";
import { Button } from "../Button/Button";
import { CopyIcon } from "../Icons/CopyIcon";

const CopyButton = styled(Button)`
  position: absolute;
  top: 6px;
  right: 0;
`;

const CodeBoxWrapper = styled.div`
  position: relative;
  border: 1px solid #e0e0e0;
  padding: 16px;
  margin: 16px 0;
`;

const CodeBoxPre = styled.pre`
  white-space: break-spaces;
`;

interface ICodeBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CodeBox = ({ children }: ICodeBoxProps) => {
  const copyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigator.clipboard.writeText(children.toString());
  };
  return (
    <CodeBoxWrapper>
      <CopyButton buttonType={"ghost"} onClick={copyHandler}>
        <CopyIcon />
      </CopyButton>
      <CodeBoxPre>{children}</CodeBoxPre>
    </CodeBoxWrapper>
  );
};
