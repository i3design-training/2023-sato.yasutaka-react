const drinks = {
  tea: {
    part: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    part: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years'
  }
};

type DrinkProps = {
  name: keyof typeof drinks; // typeof drinksのキー名が受け取れる型に制約
};

export default function Drink({ name }: DrinkProps) {
  console.log(name);
  const info = drinks[name];
  console.log(info);
  return (
    <>
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{info.part}</dd>
          <dt>Caffeine content</dt>
          <dd>{info.caffeine}</dd>
          <dt>Age</dt>
          <dd>{info.age}</dd>
        </dl>
      </section>
    </>
  );
}