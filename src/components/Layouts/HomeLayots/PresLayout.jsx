import ImagePress from "./ImagePress";
export default function PressLayout() {
  return (
    <section className="md:px-96">
      <h2 className="text-center text-3xl mb-4 text-orange-500 font-bold ">
        Telah Dipercaya Oleh
      </h2>
      <div className="mt-10 grid grid-cols-2 place-items-center overflow-hidden gap-2 md:gird-cols-4 lg:grid-cols-5">
        <ImagePress image="Homepage/bca.png" />
        <ImagePress image="Homepage/garuda.png" />
        <ImagePress image="Homepage/gojek.png" />
        <ImagePress image="Homepage/google.png" />
        <ImagePress image="Homepage/microsoft.png" />
        <ImagePress image="Homepage/pertamina.png" />
        <ImagePress image="Homepage/pln.png" />
        <ImagePress image="Homepage/toyota.png" />
        <ImagePress image="Homepage/traveloka.png" />
        <ImagePress image="Homepage/telkom.png" />
      </div>
    </section>
  );
}
