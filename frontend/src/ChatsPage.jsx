import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId='d07ca29e-cce6-4d73-a5db-313a88b2c0f0'
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;


// export default ChatsPage;

// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic('d07ca29e-cce6-4d73-a5db-313a88b2c0f0', props.user.username, props.user.secret);
//     return (

//             <div style={{ height: '100vh'}}>
//                 <MultiChatSocket {...chatProps} />
//                 <MultiChatWindow {...chatProps}  style={{height: '100%'}}/>
//            </div>
//     )
// }

// export default ChatsPage;