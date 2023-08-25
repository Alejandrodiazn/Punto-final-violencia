import "@fontsource/quicksand";
import "./Conversation.css";
import { BackButton } from "../components/BackButton/BackButton";
import { Pfp } from "../components/ProfilePic/Pfp";
import { Message } from "../components/Message/Message";
import SquareBullet from "../components/SquareBullet/IMessageBubble";
import IMessageBubble from "../components/SquareBullet/IMessageBubble";
export const Conversation = ({ username }) => {
  return (
    <>
      <div className="nav-conversation">
        <BackButton linkPath="https://google.com" />
        <div className="profile-container">
          <Pfp pathToFile="src/pages/conversation/images/primera-foto.jpg"/>
          <div className="profile-text-container">
            <div className="profile-username">{username}</div>
            <div className="profile-last-seen">Ultima vez hace 5 minutos</div>
          </div>
        </div>
        <div className="information-logo-container">
          <a className="information-text">i</a>
        </div>
      </div>
      <div className="conversation-container">
        <IMessageBubble content={"Texto de "}/>
        <IMessageBubble content={"Texto de usuario"} user={'user'} />
      </div>
    </>
  );
};
