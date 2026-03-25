const data = [
  {
    id: 1,
    title: "Product 1",
    image: "https://picsum.photos/200/201",
    desc: "This is dummy description",
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://picsum.photos/200/202",
    desc: "This is dummy description",
  },
  {
    id: 3,
    title: "Product 3",
    image: "https://picsum.photos/200/203",
    desc: "This is dummy description",
  },
];

export default function ProductCard() {
  return (
    <div className="flex gap-5 p-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="border rounded-2xl shadow-md p-4 w-52 hover:scale-105 transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}