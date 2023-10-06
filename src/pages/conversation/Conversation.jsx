import "./Conversation.css";
import { BackButton } from "../components/BackButton/BackButton";
import { Pfp } from "../components/ProfilePic/Pfp";
import { IMessageBubble } from "../components/IMessageBubble/IMessageBubble";
export const Conversation = ({ username }) => {
  return (
    <>
      <div className="nav-conversation">
        <BackButton linkPath={"https://google.com"} />
        
        <div className="profile-container">
          <Pfp
            pathToFile={
              "https://www.nj.com/resizer/mg42jsVYwvbHKUUFQzpw6gyKmBg=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/somerset_impact/photo/sm0212petjpg-7a377c1c93f64d37.jpg"
            }
          />
        </div>
        {username}
      </div>
      <div className="conversation-container">
        <div className="conversation-header">
          <h2>Conversación</h2>
        </div>
        <div className="conversation-body">
          <IMessageBubble content={"Hola, soy Antonio LoquilloAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAA"} />
          <IMessageBubble content={"Hola, no soy Antonio Loquillo"} user={"user"} />
          <IMessageBubble content={"Hola, soy Antonio Loquillo"} />
          <IMessageBubble content={"Hola, no soy Antonio Loquillo pero ulalá señor francés, camarón caramelo"} user={"user"} />
          <IMessageBubble content={"Hola, no soy Antonio Loquillo pero ulalá señor francés, camarón caramelo"} user={"user"} />
        </div>
      </div>
    </>
  )};
