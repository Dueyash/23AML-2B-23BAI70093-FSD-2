# WebSocket Chat App

This project is a React-based chat client for a Spring WebSocket backend. It connects to a STOMP endpoint, lets a user enter a name, subscribe to broadcast messages, and send chat messages through a WebSocket channel.

## Features

- Real-time chat UI built with React
- Username-based message sender
- WebSocket connection through SockJS
- STOMP message publishing and subscription
- Message list that updates as new chat events arrive
- Clean centered layout for the chat panel

## Tech Stack

- React 19
- React Scripts
- SockJS Client
- STOMP JS
- JavaScript

## Project Structure

```text
exp10/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── Components/
│       ├── Chat.jsx
│       ├── MessageInput.jsx
│       └── MessageList.jsx
├── package.json
└── README.md
```

## Component Overview

- `App.js` renders the chat page shell.
- `Chat.jsx` manages the WebSocket connection, username state, and message state.
- `MessageList.jsx` displays all received chat messages.
- `MessageInput.jsx` captures text input and sends messages.
- `index.js` bootstraps the app and sets browser globals needed by the WebSocket libraries.

## Chat Flow

1. The user opens the app and enters a username.
2. The client connects to `http://localhost:8080/ws` using SockJS.
3. The app subscribes to `/topic/messages` for broadcast chat updates.
4. When the user sends a message, the client publishes it to `/app/chat`.
5. The backend broadcasts the message back to all connected clients.

## Prerequisites

- Node.js and npm
- A running Spring Boot backend that exposes the WebSocket endpoint at `http://localhost:8080/ws`
- A STOMP controller that publishes messages to `/topic/messages` and accepts input on `/app/chat`

## Installation

```bash
npm install
```

## How To Run

```bash
npm start
```

Open the app in your browser at `http://localhost:3000`.

## Build

```bash
npm run build
```

## API Contract

### WebSocket Endpoint

- `http://localhost:8080/ws`

### Subscription Topic

- `/topic/messages`

### Message Destination

- `/app/chat`

## Screenshots

![Chat UI 1](<public/SS/Screenshot 2026-04-17 110215.png>)

![Chat UI 2](<public/SS/Screenshot 2026-04-17 110233.png>)

### Message Shape

```json
{
  "sender": "Yash",
  "content": "Hello everyone"
}
```

## Notes

- If your backend runs on a different host or port, update the URL in `src/Components/Chat.jsx`.
- The app expects the backend to be available before sending messages.
- `src/index.css` and `src/App.css` control the centered layout and basic chat styling.
