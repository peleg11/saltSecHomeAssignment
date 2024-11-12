import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ded8e8;
  padding: 15px 20px;
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 700;
  line-height: 39px;
`;

export const CrumbsWrapper = styled.div`
  display: flex;
  font-size: 12px;
  gap: 13px;
  font-weight: 400;
`;

export const CrumpLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  color: #7d3ce9;
`;
