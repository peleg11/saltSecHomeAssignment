import { ChevronRight } from "../../icons/ChevronRight";
import { CrumbsWrapper, CrumpLink } from "./style";
import { useDataContext } from "../../hooks/useDataContext";

export const BreadCrumbs = () => {
  const { data } = useDataContext();
  const { api, path } = data;

  return (
    <CrumbsWrapper>
      <CrumpLink>All API's</CrumpLink>
      <ChevronRight />
      <CrumpLink>{api}</CrumpLink>
      <ChevronRight />
      {path}
    </CrumbsWrapper>
  );
};
