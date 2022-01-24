import axios from "./axios.util";

interface Props {
  url: string;
}
export async function fetcher(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {}
}
export default fetcher;
