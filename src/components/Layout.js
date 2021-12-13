import styled from "styled-components";

export const Header = styled.header`
    min-height: 5vh;
    // background:red;
`;

export const Main = styled.main`
  min-height: 81vh;
  /* padding:8px;//add later */
  display: ${(props) => (props.dashboard === false ? "flex" : "")};
  align-items: ${(props) => (props.dashboard === false ? "center" : "")};
  flex-direction: ${(props) => (props.dashboard === false ? "column" : "")};
  /* justify-content: center; */
`;

export const Footer = styled.footer`
  text-align: center;
`;
