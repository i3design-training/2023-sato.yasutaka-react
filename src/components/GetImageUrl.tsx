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

export function getImageUrl(person: Person, size: string = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

export default Avatar;
