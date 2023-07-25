import "./App.css";
import Profile from "./components/Profile";
import { useState } from "react";
import { getImageUrl } from "./components/GetImageUrl";
import Gallery from "./components/Gallery";
import TodoList from "./components/TodoList";
import DrinkList from "./components/Drink";
import Drink from "./components/Drink";
import Lists from "./components/Lists";
import Filtering from "./components/Filtering";
import Clock from "./components/Clock";
import { time } from "console";
import Profile2 from "./components/Profile2";

function App() {
  const [count, setCount] = useState<number>(0);
  function handleClick() {
    setCount(count + 1);
  }
  const currentTime = new Date(); // 現在の日時を取得

  return (
    <>
      <Profile />
      <Profile />
      <Profile />
      <Gallery />
      <TodoList />
      <MyButton
        count={count}
        onClick={handleClick}
      />
      <MyButton
        count={count}
        onClick={handleClick}
      />
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
      <Drink name="coffee" />
      <Drink name="tea" />
      <Lists />
      <Filtering />
      <Clock />
      <Profile2 person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile2 person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  );
}

//ボタンクリックをpropsで制御
interface MyButtonProps {
  count: number;
  onClick: () => void;
}
function MyButton({
  count,
  onClick,
}: MyButtonProps) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

//アバター
interface Person {
  name: string;
  imageId: string;
}

interface AvatarProps {
  person: Person;
  size: number;
}

function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default App;
