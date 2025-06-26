// ClaudeRecipe.jsx
import Markdown from 'react-markdown';
import './ClaudeRecipe.css';

export default function ClaudeRecipe({ recipe }) {
  return (
    <section className="recipe-wrapper">
      <h2 className="recipe-heading">Chef Claude Recommends:</h2>
      <article className="recipe-box" aria-live="polite">
        <Markdown>{recipe}</Markdown>
      </article>
    </section>
  );
}
