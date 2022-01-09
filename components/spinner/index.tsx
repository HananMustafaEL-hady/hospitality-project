import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  margin: 0 auto;
`;
interface props {
  color: string;
  loading: boolean;
}
export const LoadingSpinner: React.FC<props> = ({ color, loading }) => {
  return (
    <ClipLoader color={color} loading={loading} css={override} size={30} />
  );
};
