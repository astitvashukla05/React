import './IngredList.css';
import { forwardRef } from 'react';

const IngredList = forwardRef(function IngredList(props, ref) {
  return (
    <section className="ingred-section">
      <h3 className="ingred-heading">🧂 Ingredients on hand:</h3>
      <ul className="ingred-list">{props.items}</ul>

      {props.length > 3 && (
        <div className="ingred-create" ref={ref}>
          <div className="ingred-texts">
            <h3>Ready for a Recipe?</h3>
            <p className="ingred-gen">Chef Claude can create a dish from your ingredient list 🔍</p>
          </div>
          <button className="btn2" onClick={props.handleClick}>
            🍽️ Get a Recipe
          </button>
        </div>
      )}
    </section>
  );
});

export default IngredList;