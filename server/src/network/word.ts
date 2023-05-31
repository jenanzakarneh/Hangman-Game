export const generateWordWithLength = async (length: number) => {
  if (length > 7 || length < 3) length = 4;
  const sp = "?".repeat(length);
  const url = `http://api.datamuse.com/words?max=1000&sp=${sp}`;
  try {
    const response = await fetch(url, {});
    const data = await response.json()
    const randemIndex = Math.floor(Math.random() * 1001);
    console.log("Random word = ", data[randemIndex].word);
    return data[randemIndex].word;
  } catch (error) {
    console.log(error);
  }
};
