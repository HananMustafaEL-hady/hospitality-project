import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "./button";
interface Props {
  maxPages?: number;
}
export const Pagination: React.FC<Props> = ({ maxPages }) => {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState<number>(1);

  useEffect(() => {
    router.replace({
      query: {
        ...router.query,

        page: pageIndex,
      },
    });
  }, [pageIndex]);

  function handleIncrement() {
    setPageIndex(pageIndex + 1);
  }
  function handleDecrement() {
    setPageIndex(pageIndex - 1);
  }
  return (
    <ul className="d-flex justify-content-center">
      <Button
        fontAwesomeClass="fa-arrow-alt-circle-right"
        handleOnClick={handleDecrement}
        pageIndex={pageIndex}
        stopValue={1}
        dataFor="pervious"
      />
      <Button
        fontAwesomeClass="fa-arrow-alt-circle-left"
        handleOnClick={handleIncrement}
        pageIndex={pageIndex}
        stopValue={maxPages}
        dataFor="Next"
      />
    </ul>
  );
};
