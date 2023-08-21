export const BackButton = ({ linkPath }) => {
  return (
    <a className="back-button" href={linkPath}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="28"
        viewBox="0 0 15 28"
        fill="none"
      >
        <path
          d="M13.75 1C-3.25004 11.5 -3.25 11.5 13.75 27"
          stroke="#0A357B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
};
