import "./App.css";
import Profile from "./components/Profile";
import { useState } from "react";
import { getImageUrl } from "./components/GetImageUrl";
import Gallery from "./components/Gallery";
import TodoList from "./components/TodoList";
import DrinkList from "./components/Drink";
import Drink from "./components/Drink";

function App() {
  const [count, setCount] = useState<number>(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Profile />
      <Profile />
      <Profile />

      <Gallery />

      <TodoList />

      <div>
        <h1>Counters that update separately</h1>
        <MyButton
          count={count}
          onClick={handleClick}
        />
        <MyButton
          count={count}
          onClick={handleClick}
        />
      </div>

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
