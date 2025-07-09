import { useActionState,useOptimistic} from "react";
import { OpinionsContext } from "../store/opinions-context";
import { use } from "react";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {

  const {upvoteOpinion,downvoteOpinion}=use(OpinionsContext)
  const[voteState,setVotes]=useOptimistic(votes,(prevVotes,mode)=>{
   return mode==='up'?prevVotes+1:prevVotes-1

  })
  async function upVoteAction(){
    setVotes('up')
  await upvoteOpinion(id)


}
async function downVoteAction(){
  setVotes('down')
 await  downvoteOpinion(id)
  

}
const[upVoteState,upVoteFormAction,upVotePending]=useActionState(upVoteAction,null);
const[downVoteState,downVoteFormAction,downVotePending]=useActionState(downVoteAction,null);
  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upVoteFormAction} disabled={upVotePending || downVotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

       <span style={{ transition: "all 0.2s ease-in-out" }}>{voteState}</span>


        <button formAction={downVoteFormAction} disabled={upVotePending || downVotePending}> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
