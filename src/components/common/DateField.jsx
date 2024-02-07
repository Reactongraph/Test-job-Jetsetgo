const DateField = ({ type, placeholder, register }) => {
  return (
    <div>
      <span className="text-white text-xs font-semibold">{placeholder}</span>
      <input
        type={type}
        {...register}
        className="p-2 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default DateField;
