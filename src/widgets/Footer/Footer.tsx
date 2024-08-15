import styled from "styled-components";
import { HeartIcon } from "../../shared/UI/Icons/HeartIcon";


export const FOOTER_HEIGHT = 74

const Wrapper = styled.footer`
background-color: ${(p) => p.theme.footer};
height: ${FOOTER_HEIGHT}px;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
padding: 12px;
color: #fff;
gap: 4px;
`
export const Footer = () => {
  return (
    <Wrapper>Made with <HeartIcon/> by Snegurka</Wrapper>
  )
}
