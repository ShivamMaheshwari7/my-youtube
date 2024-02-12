import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Valentines",
  "Filmi",
  "Thrillers",
  "Stocks",
  "Suits",
];

const ButtonList = () => {
  return (
    <div className="flex m-2">
      {list.map((btnName) => {
        return <Button key={btnName} name={btnName} />;
      })}
    </div>
  );
};

export default ButtonList;
