import { useState } from "react"


export const Question = ({ question, setAnswer }) => {
    console.log(question, setAnswer)


    // const flipAnswer = () => {
    //     console.log("fliped")
    // }
    return (
        <div className="mainBox"  >
            {question.map((e) =>
                (<DivQuestion dynamicQues={e} setAnswer={setAnswer} />))}
        </div>

    )
}
const DivQuestion = ({ dynamicQues, setAnswer }) => {

    const [show, setshow] = useState(false)
    const enterHandler = () => {
        console.log("mouse enter")
        setshow(true)

    }
    const outHandler = () => {
        console.log("mouse out")
        setshow(false)
    }

    return (
        <div className="question" onMouseEnter={enterHandler} onMouseOut={outHandler} >
            <h1>Question</h1>
            <p>{dynamicQues.sawal}</p>
            {show == true && <p>{dynamicQues.jawab}</p>}

        </div>
    )
}