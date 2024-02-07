const DateField = ({ type, placeholder, register }) => {
  return (
    <div className="mt-2">
      <span className="text-white font-semibold text-sm ">{placeholder}</span>
      <input
        type={type}
        {...register}
        className="px-4 py-2 w-full  border rounded-md focus:outline-none "
        placeholder={placeholder}
        role="textbox"
      />
    </div>
  );
};

export default DateField;
