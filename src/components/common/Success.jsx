import Button from "./Button";

const Success = () => {
  return (
    <div class="w-full h-screen flex justify-center items-center">
      <div class="bg-white w-1/2 sm:w-1/4 justify-center p-4 rounded-lg shadow-lg text-center flex flex-col items-center">
        <h1 class="text-2xl font mb-2 font-bold">Success</h1>
        <div class="flex flex-col gap-4  items-center">
          <img
            src={"/success-svgrepo-com.svg"}
            alt="success-logo"
            width={50}
            height={50}
            class="mr-2"
          />
          <span class="text-sm">You have successfully booked a flight</span>
        </div>
        <Button text={"Home"} path={"/"} />
      </div>
    </div>
  );
};

export default Success;
