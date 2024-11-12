import styled from "styled-components";

export const TabsWrapper = styled.div`
  background: #ffffff;
  height: 45px;
`;

interface Props {
  $active?: boolean;
}

export const TabBtn = styled.button<Props>`
  width: 100px;
  height: 100%;
  cursor: pointer;
  background-color: #ffffff;
  border: none;

  color: ${({ $active }: Props) => ($active ? "#7d3ce9" : "")};
  border-bottom: 2px solid
    ${({ $active }: Props) => ($active ? "#7d3ce9" : "transparent")};

  transition: color 0.5s ease, border-color 0.5s ease;
`;
