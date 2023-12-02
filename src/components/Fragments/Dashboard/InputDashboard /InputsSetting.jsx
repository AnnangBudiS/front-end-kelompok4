export default function InputSettings({ label, textArea, ...props }) {
  return (
    <div className="flex flex-col my-4">
      <label className="font-bold">{label}</label>
      {textArea ? (
        <textarea className="textarea textarea-error"></textarea>
      ) : (
        <input
          className="mt-2 border p-2 pl-4 border-orange-500 rounded-xl"
          {...props}
        />
      )}
    </div>
  );
}
