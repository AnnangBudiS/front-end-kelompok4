export default function ButtonHome({ children }) {
  return (
    <button className="btn btn-wide bg-orange-500 text-slate-50 hover:text-slate-900">
      {children}
    </button>
  );
}
