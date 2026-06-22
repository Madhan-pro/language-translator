const response = await fetch(
  "https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: text,
      source: source,
      target: target,
      format: "text"
    })
  }
);

const data = await response.json();

document.getElementById("translatedText").innerText =
  data.data.translations[0].translatedText;