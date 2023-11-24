import InputForm from "../../Elements/Input/index";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Nama Depan"
        type="text"
        placeholder="Masukkan Nama Depan"
        name="text"
      />
      <InputForm
        label="Nama Belakang"
        type="Text"
        placeholder="Masukkan Nama Belakang"
        name="text"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="Masukkan Email"
        name="email"
      />
      <InputForm
        label="Whatsapp"
        type="tel"
        placeholder="Masukkan No Whatsapp"
        name="tel"
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
          Daftar
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
