import { getImageUrl } from "./GetImageUrl";

interface Person {
  imageId: string;
  name: string;
}

export default function Profile2(props: { person: Person }) {
  const { person } = props;
  console.log(person);
  return (
    <>
      <h1>{person.name}</h1>;
      <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
    </>
  );
}
