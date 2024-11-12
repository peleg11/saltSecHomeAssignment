import { useState } from "react";
import { Button, ResetButton } from "../style";
import {
  BtnsWrapper,
  FilterWrapper,
  Input,
  InputWrapper,
  SearchWrapper,
} from "./style";
import { MagnifyingGlass } from "../../icons/MagnifyingGlass";
import { useDataContext } from "../../hooks/useDataContext";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [piiOnly, setPiiOnly] = useState(false);

  const { filterItem } = useDataContext();

  return (
    <SearchWrapper>
      <InputWrapper>
        <MagnifyingGlass />
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FilterWrapper>
          <input
            type="checkbox"
            id="show"
            name="show"
            checked={piiOnly}
            onChange={() => setPiiOnly((prev) => !prev)}
          />
          <label htmlFor="show">Show PII only</label>
        </FilterWrapper>
      </InputWrapper>
      <BtnsWrapper>
        <Button $primary onClick={() => filterItem(query, piiOnly)}>
          Apply Filters
        </Button>
        <ResetButton>Reset Filters</ResetButton>
      </BtnsWrapper>
    </SearchWrapper>
  );
};
