import ThailandImg from "../assets/images/destination-1-1jpg@2x.png";
import NewArticalCard from "./NewArticalCard";

export default function NewAritcalContainer() {
  const arr = [
    {
      date: "Jul 10, 2024",
      minute: "3 min read",
      content: "Enrich Your Mind Envision Your Future Education for Success",
      image: ThailandImg,
    },
    {
      date: "Jul 10, 2024",
      minute: "3 min read",
      content: "Exploring The Green Spaces Of Realar Residence Harmony with",
      image: ThailandImg,
    },
    {
      date: "Jul 09, 2024",
      minute: "3 min read",
      content: "Living sustainability: A day in the life atrealar residence",
      image: ThailandImg,
    },
  ];

  return (
    <div className="w-full h-[562.83px] flex justify-between">
      {arr.map((value, index) => (
        <NewArticalCard
          key={index}
          date={value.date}
          minute={value.minute}
          content={value.content}
          image={value.image}
        />
      ))}
    </div>
  );
}
