import { useActionState } from "react";
import { use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";
export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext)
  async function opinionState(prevFormState, formData) {
    const userName = formData.get('userName')
    const title = formData.get('title')
    const content = formData.get('body')

    const errors = [];
    if (userName.trim() == '') {
      errors.push("Enter a valid username");
    }
    if (title.trim() == '') {
      errors.push("Enter a valid title");
    }
    if (content.trim() == '') {
      errors.push("Enter a valid content");
    }
    if (errors.length > 0) {
      return {
        errors: errors, values: {
          userName,
          title,
          content,
        }
      }
    }
    await addOpinion({ title, userName, body: content })
    return { errors: null }

  }
  const [formState, formAction, pending] = useActionState(opinionState, { errors: null })
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.values?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.values?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.values?.content} ></textarea>
        </p>
        {formState.errors && <ul className="errors">{formState.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul>}
        <Submit />
      </form>
    </div>
  );
}
