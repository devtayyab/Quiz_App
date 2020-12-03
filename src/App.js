import React, { useState } from 'react'
import './App.css'
import {Fetchdata} from './Api/Api'



export const App = () =>{
         var [qestion, setquestion] = useState([]);
         var [score,setscore] = useState(0)
         var [number,setnumber] = useState(0)
         var [answer, setanswer] = useState("")
         var [loading , setloading] = useState(true)
         const [handle,sethandle] =useState(true)
      const   totalquestion=9
    const Question=async () =>{

        sethandle(true)
        const question = await Fetchdata();
        setquestion(question)
        setloading(false)
        sethandle(false)
        
    }
    const Next =() =>{
        Question()
        setnumber(number+1)
        console.log(answer)
        if (answer==qestion[number].correct_answer){
            console.log("true")
            setscore(score+1)
        }
       
    }
   
    console.log(qestion)
    return   (
        <div className="App">
           
           <h1>Quiz App</h1>
           {loading ? <button onClick={Question}>Start Quiz</button>:
           <div>
           {number <= totalquestion && !loading ? <>
    <h>Score is :{score}</h>
    <h6>{`${number+1}/10`}</h6>
         
    {!loading && !handle? <div>    <h3>{qestion[number].question }</h3>
     <h4> { qestion[number].answers.map((answer ,i)=>(<><button key={i} onClick={()=>setanswer(answer)}>{answer}</button><br></br></>) )}</h4>
        
           <button  onClick={Next}>Next Question</button></div> : null}
 
           </> : <h3>Score is {score}</h3>}
           
          
        </div>
    

}
</div>
)}