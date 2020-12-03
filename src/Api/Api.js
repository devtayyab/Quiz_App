import React from 'react'
const Url = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;

export const Fetchdata= async()=>{
    const data=await  fetch(Url);
    console.log(data)
    const result = await data.json()
    console.log(result)
    return result.results.map((question)=>(
         {
            ...question,
            answers: [...question.incorrect_answers, question.correct_answer]
        }
    ))
}