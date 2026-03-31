async function askAI(question) {
    const chatArea = document.getElementById("chatArea");

    const userMsg = document.createElement("div");
    userMsg.className = "chat-bubble chat-user";
    userMsg.innerText = question;
    chatArea.appendChild(userMsg);

    const aiMsg = document.createElement("div");
    aiMsg.className = "chat-bubble chat-ai";
    aiMsg.innerText = "🤖 सोच रहा हूँ...";
    chatArea.appendChild(aiMsg);

    try {
        const res = await fetch("https://acs-ai-server.onrender.com/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: question })
        });

        const data = await res.json();
        aiMsg.innerText = data.answer;

    } catch (error) {
        aiMsg.innerText = "⚠️ Error: AI server से जवाब नहीं मिला";
    }
}
