function SaveTimeItem({ image, title, description }) {
  return (
    <div className="flex flex-col items-center text-center shadow-2xl p-20">
      <img
        src={image}
        alt={title}
        className="mb-6 h-56 w-full object-contain"
      />

      <h3 className="mb-3 text-2xl font-semibold text-mist-600">
        {title}
      </h3>

      <p className="max-w-sm leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default SaveTimeItem;