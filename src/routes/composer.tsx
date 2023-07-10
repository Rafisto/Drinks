import { useState } from "react";
import DrinkEditor from "../mui/drinkEditor";
import Title from "../mui/title";
import FullCanvas from "../three/main/FullCanvas";

const TitleStyle = {
  zIndex: "1",
  left: "50%",
  transform: "translateX(-50%)",
};

const DrawerStyle = {
  zIndex: "1",
  right: "0",
  top: "25vh",
};

type AbsolutProps = {
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Absolut = (props: AbsolutProps) => {
  return (
    <div style={{ ...props.style, position: "absolute" }}>{props.children}</div>
  );
};

export type Ingredient = {
  name: string;
  percentage: number;
};

const Composer = () => {
  const [filled, setFilled] = useState(100);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: "Jaeggermeister", percentage: 40 },
    { name: "Coke", percentage: 60 },
  ]);

  const [title] = useState("drink");

  const addIngredient = (name: string, percentage: number) => {
    setIngredients([...ingredients, { name: name, percentage: percentage }]);
    setFilled(filled + percentage);
  };

  const removeIngredient = (name: string) => {
    const removedIngredient = ingredients.find((ingredient) => {
      return ingredient.name === name;
    });
    const newIngredients = ingredients.filter((ingredient) => {
      return ingredient.name !== name;
    });
    if (!removedIngredient) return;
    setFilled(filled - removedIngredient.percentage);
    setIngredients(newIngredients);
  };

  return (
    <div>
      <Absolut style={TitleStyle}>
        <Title />
      </Absolut>
      <Absolut style={DrawerStyle}>
        <DrinkEditor
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          ingredients={ingredients}
          drinkName={title}
          filled={filled}
        />
      </Absolut>
      <FullCanvas ingredients={ingredients} />
    </div>
  );
};

export default Composer;
