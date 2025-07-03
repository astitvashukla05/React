import summary from '../assets/quiz-complete.png'
import Questions from '../Questions'
export default function Summary({userAnswers}) {

const total = userAnswers.length;

const skipped = userAnswers.filter(a => a === null).length;
const correct = userAnswers.filter((a, i) => a === Questions[i].answers[0]).length;
const incorrect = total - skipped - correct;

const skippedPercent = Math.round((skipped / total) * 100);
const correctPercent = Math.round((correct / total) * 100);
const incorrectPercent = Math.round((incorrect / total) * 100);

    
    return (
        <div id="summary">
            <img src={summary} />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedPercent}%</span>
                    <span className='text'>Skipped</span>
                </p>
            </div>
             <div id="summary-stats">
                <p>
                    <span className='number'>{correctPercent}%</span>
                    <span className='text'>answeredCorrectly</span>
                </p>
            </div>
             <div id="summary-stats">
                <p>
                    <span className='number'>{incorrectPercent}%</span>
                    <span className='text'>inncorect</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer,index)=>{
                    let cssClass="user-answer"
                       if(answer==null) cssClass+=" skipped"
                       else if(answer==Questions[index].answers[0]) cssClass+=" correct"
                       else cssClass+=" wrong"
                    return (<li key={index}>
                    <h3>{index+1}</h3>
                    <p className='question'>{Questions[index].text}</p>
                    <p className={cssClass}>{answer!=null?answer:"skipped"}</p>
                    </li>)

                })}
            </ol>

        </div>
    )
}