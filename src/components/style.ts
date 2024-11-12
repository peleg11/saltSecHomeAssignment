import styled, { css } from "styled-components";

export const MainContentWrapper = styled.div`
  padding: 24px;
`;

interface ButtonProps {
  $primary?: boolean;
  $ghost?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: ${({ $primary }: ButtonProps) =>
    $primary ? "#7D3CE9" : "#5D94A0"};
  color: #f5f5f5;
  font-size: 14px;
  line-height: 22px;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  max-height: 35px;
  display: flex;
  align-items: center;

  &:hover {
    background: ${({ $primary }: ButtonProps) =>
      $primary ? "#681aeb" : "#43818f"};
  }

  ${({ $ghost }: ButtonProps) =>
    $ghost &&
    css<ButtonProps>`
      background: transparent;
      border: 1px solid
        ${({ $primary }: ButtonProps) => ($primary ? "#7D3CE9" : "#5D94A0")};
      color: ${({ $primary }: ButtonProps) =>
        $primary ? "#7D3CE9" : "#5D94A0"};

      &:hover {
        background: transparent;
      }
    `}
`;

export const ResetButton = styled(Button)`
  background-color: transparent;
  color: ${({ disabled }: ButtonProps) => (disabled ? "#D5D4D8" : "#3D3D3D")};
  &:hover {
    border: ${({ disabled }: ButtonProps) =>
      disabled ? "none" : "1px solid #3d3d3d"};
    background-color: transparent;
  }
  transition: border 0.5s ease;
`;
