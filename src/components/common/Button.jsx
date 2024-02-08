import { useNavigate } from "react-router-dom";
const Button = (props) => {
  const { text, path } = props;
  const navigate = useNavigate();
  return (
    <button
      className="text-xl font-bold p-2 px-6  bg-[#DA5200] text-white shadow-md rounded-2xl  mt-6"
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
