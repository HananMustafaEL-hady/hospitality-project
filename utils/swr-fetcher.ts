import axios from "./axios.util";

interface Props {
  url: string;
}
export async function fetcher(url: string) {
  console.log(url);
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {}
}
export default fetcher;
