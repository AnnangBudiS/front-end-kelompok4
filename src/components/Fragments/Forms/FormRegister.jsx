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
    </form>
  );
};

export default FormRegister;
