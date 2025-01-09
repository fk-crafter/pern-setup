import { User } from "@/types/index";

interface CardComponentProps {
  card: User;
}

const CardComponent = ({ card }: CardComponentProps): JSX.Element => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 shadow-lg rounded-lg p-4 mb-4 hover:bg-gray-700 transition-all duration-300 ease-in-out">
      <div className="text-sm text-gray-400">ID: {card.id}</div>
      <div className="text-lg font-semibold text-gray-100">{card.name}</div>
      <div className="text-md text-gray-300">{card.email}</div>
    </div>
  );
};

export default CardComponent;
