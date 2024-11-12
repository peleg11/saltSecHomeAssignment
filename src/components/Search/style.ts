import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ded8e8;
  padding-left: 10px;
`;

export const FilterWrapper = styled.div`
  width: 280px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 3px;
  color: #a1a0a3;
  border-radius: 0 6px 6px 0;
  border-left: 1px solid #ded8e8;
  border-collapse: collapse;
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 0 auto;
`;
