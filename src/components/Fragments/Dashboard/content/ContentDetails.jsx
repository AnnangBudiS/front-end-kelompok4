export default function ContentDetails({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
      {children}
    </section>
  );
}
