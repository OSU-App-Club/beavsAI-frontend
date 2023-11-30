import './ChatMessage.css'
import '../assets/profile-logo-image.jpeg'

interface ChatMessageProps {
    message: string,
    sentBy: string
}

const ChatMessage = (props: ChatMessageProps) => {
  return (
    <div>
        <div className="chat-message">
            <img src='../src/assets/profile-logo-image.jpeg' className="chat-message-image"/>
            <div className='message'>
                <h1 className="message-sender">{props.sentBy}</h1>
                <h2 className="message-text">{props.message}</h2>
            </div>
        </div>
    </div>
  )
}

export default ChatMessage