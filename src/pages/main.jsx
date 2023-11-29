import MainCard from "../components/MainCard";
import englishData from "../englishData.json";

console.log(englishData);

const Main = () => {
  return (
    <div className="min-h-screen max-w-screen-md mx-auto px-8 pt-20">
      <h1 className="bg-blue-50 shadow-xl text-center text-2xl font-semibold border py-3 w-52">
        Study English
      </h1>
      <ul className="mt-12">
        {englishData.map((v, i) => (
          <MainCard key={i} title={v.title} day={v.day} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
