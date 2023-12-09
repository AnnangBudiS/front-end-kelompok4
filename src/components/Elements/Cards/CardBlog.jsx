export default function CardBlog({ image, title, description, date }) {
  return (
    <div className="flex w-96 flex-col mx-auto shadow-md p-4">
      <div className="shadow-lg">
        <img src={image} />
      </div>
      <div className="p-6 pb">
        <h5 className="mb-2 block text-xl font-bold text-orange-500">
          {title}
        </h5>
        <p className="block text-base">{description}</p>
        <p className="block text-base font-semibold color-gray-950">{date}</p>
      </div>
    </div>
  );
}
