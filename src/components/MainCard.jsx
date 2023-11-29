import { Link } from "react-router-dom";

const MainCard = ({ title, day }) => {
  return (
    <Link to={`/${day}`}>
      <li className="text-xl mb-4 hover:text-gray-700 border border-gray-600 py-2 pl-2 shadow-lg">
        <span className="font-semibold mr-2">Day {day}</span>
        <span className="border-b-8">{title}</span>
      </li>
    </Link>
  );
};

export default MainCard;
