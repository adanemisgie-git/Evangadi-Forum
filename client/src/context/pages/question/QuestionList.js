import React from "react";

import "./QuestionsList.css";
import { MdAccountCircle } from "react-icons/md";

function QuestionsList({ show }) {
  return (
    <div className="question">
      <div className="question__user">
        <MdAccountCircle style={{ fontSize: 58 }} className="MdAccountCircle" />
        <span>{show?.user_name}</span>
      </div>
      <div>
        <p>
          {show?.question ||
            show?.answer ||
            "['the question/answer goes here]'?"}
        </p>
      </div>
    </div>

  );
}

export default QuestionsList;


// import React from "react";

// const QuestionList = ({ questions }) => {
//   return (
//     <div>
//       {questions.map((question) => (
//         <div key={question.id}>
//           <h2>{question.title}</h2>
//           <p>{question.description}</p>
//           <h3>Previous Answers</h3>
//           <ul>
//             {question.answers.map((answer) => (
//               <li key={answer.id}>
//                 {answer.text} - by {answer.author} on {answer.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionList;
