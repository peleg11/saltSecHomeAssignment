import styled from "styled-components";
import { ChevronRight } from "../../icons/ChevronRight";
import { IconButton } from "./style";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
interface SpanIconProps {
  $isOpen: boolean;
}

const IconSpan = styled.span<SpanIconProps>`
  svg {
    transform: rotate(
      ${({ $isOpen }: SpanIconProps) => ($isOpen ? "90" : "0")}deg
    );
    transition: all 0.3s ease;
  }
`;

export const ExpanedButton = ({ isOpen, toggle }: Props) => {
  return (
    <IconButton onClick={toggle}>
      <IconSpan $isOpen={isOpen}>
        <ChevronRight />
      </IconSpan>
    </IconButton>
  );
};
