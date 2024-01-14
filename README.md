# Chat Widget

## Overview

The Chat Widget is a web component designed for interactive chat-based communication within web applications. It includes a bot and a human that responds to user input and features a dynamic header reflecting the active participant in the conversation.

### Features

- **Dynamic Header:** Displays the active participant's name and status.
- **Bot Responses:** Responds to user input with predefined messages based on keywords.
- **Timestamps:** Each message includes a timestamp indicating when it was sent.
- **Styling:** Visually appealing design with responsive elements.

### Keywords and Responses
The following are the predefined keywords and their corresponding responses in the script.js file:

- **"hi" or "hello":**
    - *Response(Bot): "Hi there! How can I help you??"*
- **"problem" or "issue" or "help":**
    - *Response(Bot): "Let me know what I can do to help!"*
- **"human" or "person" or "someone":**
    - *Response(Bot): "No problem! Let me connect you to a customer support agent."*
- **"any user input after bot responded to connect**
    - *Response(Hannah): "Hi there!, I am Hannah.<br> <br> How can I help you?"*
- **"customized message(not a keyword)":**
    - *Response(Bot): "I'm a bot. You said: " + userInput;*

## Installation

1. **Download the Files:**
   - Download `index.html`, `style.css`, and `script.js`.
   - Save them in your project directory.

2. **Include the Files:**
   - Add the following lines to your HTML file's `<head>` section:

     ```html
     <link rel="stylesheet" href="style.css">
     <script src="script.js"></script>
     ```

   - Confirm correct file paths based on your project structure.

3. **Customization (Optional):**
   - Customize appearance by modifying CSS styles or adjusting bot responses in `script.js`.
   - Feel free to customize the widget's appearance by modifying CSS styles or adjusting bot responses in `script.js.`

## Usage

If you are trying to build from scratch using this as a guide, Include the provided HTML structure in your page. Ensure correct CSS and JS file links in your HTML.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Include meta tags, title, and links to stylesheets -->
</head>

<body>
    <!-- Include the Chat Widget HTML structure -->
</body>

</html>
