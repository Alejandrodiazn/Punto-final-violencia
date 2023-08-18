import "./Pfp.css";
export const Pfp = ({ pathToFile }) => {
  return (
    <div className="image-container">
      <img alt="Foto de perfil del usuario" src={pathToFile}></img>
    </div>
  );
};
