// Card.jsx
const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
      </div>
    </div>
  );
};
