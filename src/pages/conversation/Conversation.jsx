import "./Conversation.css";
import { BackButton } from "../components/BackButton/BackButton";
import { Pfp } from "../components/ProfilePic/Pfp";

export const Conversation = ({ username }) => {
  return (
    <>
      <div className="nav-conversation">
        <BackButton linkPath={"https://google.com"}/>
        <div className="profile-container">
            <Pfp pathToFile={"https://www.nj.com/resizer/mg42jsVYwvbHKUUFQzpw6gyKmBg=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/somerset_impact/photo/sm0212petjpg-7a377c1c93f64d37.jpg"}/>
        </div>
        
      </div>
    </>
  );
};
