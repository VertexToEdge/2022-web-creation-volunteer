async function recordScore(name, score, gameId) {
  let url = "https://culture.argos.or.kr:8800/set_score"
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: {
      name,
      score,
      gameId,
    },
  }
  let response = await fetch(url, option)
    .then((data) => console.log("기록완료"))
    .catch((error) => console.log(error))
}
