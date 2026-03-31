async function askAI(question) {
  const responseBox = document.getElementById("ai-result");

  responseBox.innerText = "🤖 सोच रहा हूँ...";

  try {
    const res = await fetch("http://localhost:3000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question: question })
    });

    const data = await res.json();

    responseBox.innerText = data.answer;

  } catch (error) {
    responseBox.innerText = "⚠️ Error: AI server चालू नहीं है";
  }
}
