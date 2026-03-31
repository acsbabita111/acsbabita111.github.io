// ===============================
// AI POPUP CONTROL
// ===============================

function openAI() {
    document.getElementById("aiPopup").style.display = "block";
    document.getElementById("popupOverlay").style.display = "block";
}

function closeAI() {
    document.getElementById("aiPopup").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none";
}


// ===============================
// AI CHAT (SIMPLE VERSION - NO SERVER)
// ===============================

function sendMessage() {
    const input = document.getElementById("userInput");
    const chatArea = document.getElementById("chatArea");

    const question = input.value.trim();

    if (question === "") return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "chat-bubble user";
    userMsg.innerText = question;
    chatArea.appendChild(userMsg);

    // AI response (basic demo)
    const aiMsg = document.createElement("div");
    aiMsg.className = "chat-bubble chat-ai";

    aiMsg.innerText = getSimpleAnswer(question);

    chatArea.appendChild(aiMsg);

    input.value = "";
    chatArea.scrollTop = chatArea.scrollHeight;
}


// ===============================
// SIMPLE AI LOGIC (OFFLINE)
// ===============================

function getSimpleAnswer(q) {
    q = q.toLowerCase();

    if (q.includes("lesson") || q.includes("पाठ")) {
        return "यह पाठ आपको विषय को समझने में मदद करता है। ध्यान से पढ़ें और उदाहरण देखें।";
    }

    if (q.includes("what") || q.includes("क्या")) {
        return "यह एक बेसिक प्रश्न है। इसका उत्तर पाठ के अंदर दिया गया है।";
    }

    if (q.includes("hello") || q.includes("नमस्ते")) {
        return "नमस्ते 😊 मैं आपकी मदद के लिए तैयार हूँ।";
    }

    return "मैं आपकी मदद कर सकता हूँ। कृपया अपना प्रश्न स्पष्ट लिखें।";
}
