import { useCallback, useState } from "react";

export const useToggle = (initailState: boolean) => {
  const [on, setOn] = useState(initailState);

  const toggle = useCallback(() => {
    setOn((prev) => !prev);
  }, [setOn]);

  return { on, toggle };
};
