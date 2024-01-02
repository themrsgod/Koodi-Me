
```markdown
# Koodi-Me Chat Web Application

This web application is a real-time chat platform that enables users to communicate via group chats. It is built using Chat Engine, Node.js for the backend, and React.js for the frontend. The app allows users to log in using a username and participate in group chats.

## Features

- **User Authentication:** Users can log in using a username to access the chat application.
- **Group Chat:** Users can create or join existing group chats to communicate with multiple participants simultaneously.
- **Real-time Messaging:** Messages are delivered and displayed in real-time within the chat interface.
- **React-Chat-Engine-Pretty:** Integration of `react-chat-engine-pretty` library to provide serverless chat functionality in the React app.

## Technologies Used

- **Chat Engine:** Product ID and Private Key are used for managing chat functionality.
- **Node.js:** Backend server using Node.js to handle authentication and manage chat functionality.
- **React.js:** Frontend user interface built using React.js for a responsive and dynamic experience.
- **react-chat-engine-pretty:** Library used to enable serverless chat within the React application.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/themrsgod/Koodi-Me.git
   ```

2. Install dependencies:

   ```bash
   cd Koodi-Me
   cd into 'backend'
   npm install

   cd into 'frontend'
   npm install

   ```

3. Set up environment variables:
   - Create a `.env` file and add your Chat Engine Product ID and Private Key from chat engine:

     ```env
     CHAT_ENGINE_PRODUCT_ID=your_product_id
     CHAT_ENGINE_PRIVATE_KEY=your_private_key
     ```

4. Start the backend server:

   ```bash
   npm run start
   ```

5. Start the frontend React application:

   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to access the chat application.

## Usage

1. Launch the application.
2. Enter a username to log in.
3. Explore existing group chats or create your own.
4. Start communicating with other users in real-time.
5. To run the app you must have access to projecT ID from the .env file

## Contributors

- [James Christian Aidoo](https://github.com/ghjimchris)
- [Vivian Heavenian Dzrekey](https://github.com/themrsgod)
- [Owuraku Buabeng](https://github.com/kuukudev)

