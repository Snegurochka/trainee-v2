import { useState } from "react";
import styled from "styled-components";

const Panel = styled.div`
  position: absolute;
  cursor: pointer;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
`;

const Circle = styled.div`
  position: absolute;
  left: 2px;
  top: 2px;
  width: 21px;
  height: 21px;
  background-color: ${(props) => props.theme.ui.switch};
  border-radius: 50%;
  transition: transform 0.3s ease;
`;

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + ${Panel} > ${Circle} {
    transform: translateX(25px);
    background-color: ${(props) => props.theme.ui.switch};
  }

  input[type="checkbox"]:checked + ${Panel} {
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const Switch = ({
  toggleAction,
  isRight = false
}: {
  toggleAction: CallableFunction;
  isRight?: boolean
}) => {
  const [isToggled, setIsToggled] = useState(isRight);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleAction();
  };

  return (
    <SwitchWrapper>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <Panel>
        <Circle />
      </Panel>
    </SwitchWrapper>
  );
};
