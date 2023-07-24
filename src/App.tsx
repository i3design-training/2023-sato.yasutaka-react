import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import { Select } from "@mui/material";
import { useState } from "react";
import { getImageUrl } from "./components/GetImageUrl";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function App() {
  const [count, setCount] = useState<number>(0);
  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />

      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>
            Work on the alcohol-fuelled engine
          </li>
        </ul>
      </div>

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
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </>
  );
}

//ボタンクリックをpropsで制御
interface MyButtonProps {
  count: number;
  onClick: () => void;
}
function MyButton({ count, onClick }: MyButtonProps)  {
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
