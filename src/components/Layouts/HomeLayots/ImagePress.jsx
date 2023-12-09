export default function ImagePress({ image }) {
  return (
    <div className=" btn overflow-hidden h-24 border-orange-500 rounded-md">
      <div className=" mb-4 ">
        <img className="w-32 " src={image} alt="image press" />
      </div>
    </div>
  );
}
