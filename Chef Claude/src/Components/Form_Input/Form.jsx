import { useState, useRef, useEffect } from 'react';
import './Form.css';
import ClaudeRecipe from '../Recommended/ClaudeRecipe';
import IngredList from '../IngredList/IngredList';
import { getRecipeFromChefClaude } from '../../ai';

export default function Form() {
  const [food, setFood] = useState([]);
  const [recipe, setRecipe] = useState('');
  const recipeSection = useRef(null);

  function Submitted(formData) {
    const item = formData.get('item');
    if (item.trim()) {
      setFood(prev => [...prev, item.trim()]);
    }
  }

  async function getRecipe() {
    try {
      const res = await getRecipeFromChefClaude(food);
      setRecipe(res);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  }

  useEffect(() => {
    if (recipe !== '' && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

  const ingred = food.map((e, index) => <li key={`${e}-${index}`} className="starter">{e}</li>);


  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          Submitted(new FormData(e.target));
          e.target.reset();
        }}
      >
        <input
          name="item"
          type="text"
          className="input"
          placeholder="e.g. Tomatoes, Cheese, Oregano"
          aria-label="Add Ingredient"
        />
        <button type="submit" className="btn">+ Add Ingredient</button>
      </form>

      {food.length > 0 && (
        <IngredList
          items={ingred}
          length={food.length}
          handleClick={getRecipe}
          ref={recipeSection}
        />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </>
  );
}
