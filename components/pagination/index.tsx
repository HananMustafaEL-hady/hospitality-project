import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "./button";
interface Props {
  maxPages: number;
}
export const Pagination: React.FC<Props> = ({ maxPages }) => {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState<number>(1);

  useEffect(() => {
    router.replace({
      query: {
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
    <ul className="">
      <Button
        label="Previous"
        handleOnClick={handleDecrement}
        pageIndex={pageIndex}
        stopValue={1}
      />
      <Button
        label="Next"
        handleOnClick={handleIncrement}
        pageIndex={pageIndex}
        stopValue={maxPages}
      />
    </ul>
  );
};
