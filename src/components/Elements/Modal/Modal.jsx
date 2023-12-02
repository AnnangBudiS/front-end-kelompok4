import ReactModal from "react-modal";

const ModalApply = ({ open, close }) => {
  return (
    <div className="flex items-center justify-center">
      <ReactModal isOpen={open} onRequestClose={close}
    style={{
    overlay: { height: "100%", width: "100%"},
    content: { height: "35%", width: "35%", display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }
  }}
    >
      <div>
        <h1 className="text-lg">Apakah anda yakin ingin apply pekerjaan ini?</h1>
        <div className="flex gap-5 justify-center mt-5">
        <button className="btn bg-orange-500 w-20 rounded-xl" onClick={close}>Ya</button>
        <button className="btn btn-outline w-20 rounded-xl" onClick={close}>Tidak</button>
        </div>
      </div>
    </ReactModal>
    </div>
  );
};

export default ModalApply;
