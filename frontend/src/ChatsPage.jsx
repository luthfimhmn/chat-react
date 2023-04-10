import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';


const ChatsPage = (props) => {
    console.log(props, 'INI PROPS')
    const chatProps = useMultiChatLogic(
        'a99be2bc-df39-4b89-9e1c-d213398f4257', 
        props.user.username, 
        props.user.secret)
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
}

export default ChatsPage;