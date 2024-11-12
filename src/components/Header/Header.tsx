import { ChevronLeft } from "../../icons/ChevronLeft";
import { BreadCrumbs } from "./BreadCrumbs";
import { HeaderWrapper, TitleWrapper } from "./style";
import { useDataContext } from "../../hooks/useDataContext";

export const Header = () => {
  const { data } = useDataContext();
  const { method, api } = data;
  return (
    <HeaderWrapper>
      <ChevronLeft />
      <TitleWrapper>
        {method?.toUpperCase()} {api}
        <BreadCrumbs />
      </TitleWrapper>
    </HeaderWrapper>
  );
};
