const BASE_URL = "https://react-calculator.getsandbox.com";
const GET_THEMES_ROUTE = "/themes";

export async function fetchThemes() {
  const response = await fetch(`${BASE_URL}${GET_THEMES_ROUTE}`);
  const responseJson = await response.json();

  return responseJson.data;
}
