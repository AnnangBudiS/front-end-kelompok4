import InputSetting from "../../../Settings/InputSetting";
import { TbPencilCog } from "react-icons/tb";

const Settings = () => {
  return (
    <>
      <div className="flex flex-col w-full pl-10">
        <div className="flex flex-row">
          <div className="avatar mt-20 shadow-xl w-36 h-36 rounded-full">
          <div>
            <img src="\src\assets\react.svg" alt="none" />
          </div>
        </div>
        <button className="mt-56 rounded-xl"><TbPencilCog className="w-8 h-8" /></button>
        </div>
        <InputSetting title="Nama Lengkap" isi="Masukan Nama Lengkap" />
        <InputSetting title="Nama Panggilan" isi="Masukan Nama Panggilan" />
        <InputSetting title="Tagline" isi="Masukan Tagline" />
        <InputSetting
          title="Tempat, Tanggal Lahir"
          isi="Masukan Tempat, Tanggal Lahir"
        />
        <InputSetting title="Jenis Kelamin" isi="Masukan Jenis Kelamin" />
        <InputSetting
          title="Nomor Telepon / Whatapp"
          isi="Masukan Nomor Telepon / Whatapp"
        />
        <InputSetting title="Domisili" isi="Masukan Domisili" />
        <div>
          <p className="pl-5 pt-3 font-semibold mb-2">Deskripsi Diri</p>
          <div>
            <textarea
              placeholder="Masukan Deskripsi Diri"
              className="border border-orange-500 w-1/2 h-36 textarea rounded-xl"
            ></textarea>
          </div>
        </div>
        <div className="mt-5">
          <button className="btn bg-orange-500 text-white rounded-full px-10">
            Simpan
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
