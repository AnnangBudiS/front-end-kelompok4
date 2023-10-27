const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <>
      <input
        type={type}
        className="text-sm border border-orange-500 outline-none rounded-[30px] w-full py-2 px-3"
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </>
  );
};

export default Input;
