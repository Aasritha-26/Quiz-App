const BASE_URL = "http://localhost:5000/api";

export async function getQuestions(category = 'All') {
  let url = `${BASE_URL}/quiz`;
  if (category !== 'All') {
    url += `?category=${encodeURIComponent(category)}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
