const DateField = ({ type, placeholder, register }) => {
  return (
    <div className="sm:w-[23%] my-4">
      <span className="font-bold text-sm ">{placeholder}</span>
      <input
        type={type}
        {...register}
        className="px-4 py-[7px] w-full font-base text-lg border border-gray rounded-md focus:outline-none "
        placeholder={placeholder}
        role="textbox"
      />
    </div>
  );
};

export default DateField;
