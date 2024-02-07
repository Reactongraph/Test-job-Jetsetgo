import Button from "./Button";

const Success = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 sm:w-1/4 justify-center p-4 rounded-lg shadow-lg text-center flex flex-col items-center">
        <h1 className="text-2xl font mb-2 font-bold">Success</h1>
        <div className="flex flex-col gap-4  items-center">
          <img
            src={"/success-svgrepo-com.svg"}
            alt="success-logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-sm">You have successfully booked a flight</span>
        </div>
        <Button text={"Home"} path={"/"} />
      </div>
    </div>
  );
};

export default Success;
