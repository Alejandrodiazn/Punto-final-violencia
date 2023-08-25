export const Message = ({ content, user }) => {
  return (
    <div className="message-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="312"
        height="54"
        viewBox="0 0 312 54"
        fill="none"
        className="message-svg"
      >
        <path
          d="M10.013 36.5346V11C10.013 5.47715 14.4901 1 20.013 1H301C306.523 1 311 5.47715 311 11V34.0282C311 39.5719 306.49 44.0577 300.947 44.0281L16.5235 42.5094L2 51L10.013 36.5346Z"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
        />
        
        {/* Add text inside the SVG */}
        <text x="10" y="30" fill="black">
          Texto legendario de prueba
        </text>

      </svg>
    </div>
  );
};
