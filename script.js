document.addEventListener("DOMContentLoaded", function () {
    const aside = document.getElementById("aside");
    const arrow = document.getElementById("arrow");
    const chatInput = document.getElementById("chatInput");
    const main = document.querySelector("#aside main");
    const headerPersonImage = document.querySelector("#header .person img");
    const headerPersonName = document.querySelector("#header .person h1");
    const headerPersonStatus = document.querySelector("#header .person p");

    aside.classList.add("hide-chat");

    arrow.addEventListener("click", function () {
        aside.classList.toggle("hide-chat");
    });

    // Function to for custom bot response
    function botResponse(userInput) {
        const lowerUserInput = userInput.toLowerCase();
        const lastBotMessage = getLastBotMessage();

        if (lowerUserInput.includes("hi") || lowerUserInput.includes("hello")) {
            return "Hi there! How can I help you?";
        } else if (
            lowerUserInput.includes("problem") ||
            lowerUserInput.includes("issue") ||
            lowerUserInput.includes("help")
        ) {
            return "Let me know what I can do to help!";
        } else if (
            lowerUserInput.includes("human") ||
            lowerUserInput.includes("person") ||
            lowerUserInput.includes("someone")
        ) {
            return "No problem! Let me connect you to a customer support agent.";
        } else if (
            lastBotMessage &&
            lastBotMessage.includes(
                "No problem! Let me connect you to a customer support agent."
            )
        ) {
            return "Hi there!, I am Hannah.<br> <br> How can I help you?";
        }
        return "I'm a bot. You said: " + userInput;
    }

    // Function to get the last bot message from the chat
    function getLastBotMessage() {
        const chatMessages = document.querySelectorAll(".chat1 p");
        if (chatMessages.length > 0) {
            const lastBotMessage =
                chatMessages[chatMessages.length - 1].textContent;
            return lastBotMessage;
        }
        return null;
    }

    // Function to handle user input
    function handleUserInput() {
        const userInput = chatInput.querySelector("input").value;
        if (userInput.trim() !== "") {
            appendUserMessage(userInput);
            const botResponseMessage = botResponse(userInput);

            if (botResponseMessage.includes("Hannah")) {
                appendHannahMessage(botResponseMessage);
                updatePersonHeader("Hannah");
            } else {
                appendBotMessage(botResponseMessage);
                updatePersonHeader("Bot");
            }

            main.scrollTop = main.scrollHeight;
            chatInput.querySelector("input").value = "";
        }
    }

    // Function to output user message to the chat
    function appendUserMessage(message) {
        const chat2 = document.createElement("div");
        chat2.classList.add("chat2");
        const timestamp = getCurrentTimestamp();
        chat2.innerHTML = `
        <p>${message}</p>
        <span>${timestamp}</span>
    `;
        main.appendChild(chat2);
    }

    // Function to output bot message to the chat
    function appendBotMessage(message) {
        const chat1 = document.createElement("div");
        chat1.classList.add("chat1");
        const timestamp = getCurrentTimestamp();
        chat1.innerHTML = `
        <img src="media/avatar2.svg" alt="">
        <div>
            <p class="bot-message">${message}</p>
            <span>${timestamp}</span>
        </div>
    `;
        main.appendChild(chat1);
    }

    // Function to output Hannah message to the chat
    function appendHannahMessage(message) {
        const chat1 = document.createElement("div");
        chat1.classList.add("chat1");
        const timestamp = getCurrentTimestamp();
        chat1.innerHTML = `
            <img src="media/avatar1.svg" alt="">
            <div>
                <p>${message}</p>
                <span>${timestamp}</span>
            </div>
        `;
        main.appendChild(chat1);
    }

    // Function to update the header person dynamically
    function updatePersonHeader(person) {
        if (person === "Bot") {
            headerPersonImage.src = "media/avatar2.svg";
            headerPersonName.textContent = "Bot";
        } else if (person === "Hannah") {
            headerPersonImage.src = "media/avatar1.svg";
            headerPersonName.textContent = "Hannah";
        }
        headerPersonStatus.textContent = `Active ${calculateTimeDifference()}`;
    }

    // Function for time difference calculation
    function getCurrentTimestamp() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    // Function for time difference calculation
    function calculateTimeDifference() {
        const now = new Date();
        const lastMessageTime = new Date();

        const timeDifference = now.getTime() - lastMessageTime.getTime();
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        if (minutesDifference < 1) {
            return "Just now";
        } else if (minutesDifference < 60) {
            return `${minutesDifference}m ago`;
        } else {
            const hoursDifference = Math.floor(minutesDifference / 60);
            return `${hoursDifference}h ago`;
        }
    }

    // Event listener for sending messages when Enter key is pressed
    chatInput
        .querySelector("input")
        .addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                handleUserInput();
            }
        });

    // Event listener for sending messages when the send button is clicked
    chatInput.querySelector("img").addEventListener("click", function () {
        handleUserInput();
    });
});
