export default function Hero({
  image,
  title,
  description,
  children,
  ...props
}) {
  return (
    <section className="hero min-h-screen bg-base-100">
      <div {...props}>
        <img
          src={image}
          className="max-w-sm md:max-w-xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl md:text-6xl text-orange-500 font-bold">
            {title}
          </h1>
          <p className="py-6 text-gray-400">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
