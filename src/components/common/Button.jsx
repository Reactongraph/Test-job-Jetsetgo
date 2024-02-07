import { useNavigate } from "react-router-dom";
const Button = (props) => {
  const { text, path } = props;
  const navigate = useNavigate();
  return (
    <button
      className="text-xl font-bold p-2 px-4  bg-blue shadow-md rounded-md mt-6"
      id="button"
      onClick={() => {
        navigate(path);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
