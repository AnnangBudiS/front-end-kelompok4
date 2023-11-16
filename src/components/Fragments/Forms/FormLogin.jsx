import InputForm from "../../Elements/Input/index";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="Masukkan Email"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Masukkan Password"
        name="password"
      />

      <div className="flex justify-center">
        <button
          className="h-9 px-6 w-[278px] font-semibold rounded-[30px] bg-orange-500 text-white text-center"
          type="submit"
        >
          Masuk
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
