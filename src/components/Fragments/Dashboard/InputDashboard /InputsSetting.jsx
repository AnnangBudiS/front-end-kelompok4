export default function InputSettings({ title, ...props }) {
  return (
    <div className="flex flex-col my-4">
      <label className="font-bold" htmlFor="">
        {title}
      </label>
      <input
        className="mt-2 border p-2 pl-4 border-orange-500 rounded-xl"
        {...props}
      />
    </div>
  );
}
