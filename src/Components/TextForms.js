import React , {useState} from 'react'
// import { useSpeechSynthesis } from "react-speech-kit";


export default function TextForms(props) {
    const upHandle = ()=>{
        let mytext = text.toUpperCase();
        setText(mytext);
        props.showAlert(" Converted to uppercase","success")
    }
    const downHandle = ()=>{
      let mytext = text.toLowerCase();
      setText(mytext);
      props.showAlert(" Converted to lowerrcase","success")

  }
  const capHandle = ()=>{
    setText('');
    props.showAlert(" Text field cleared","success")

    
    
    
}
    const handleChange = (event)=>{

        setText(event.target.value)
    }
    const [text,setText]=useState("Enter Your Text");

   
    // const Speech = () => {
    //   const [value, setValue] = React.useState("");
    //   const { speak } = useSpeechSynthesis();
    // }
    // const [ourText, setOurText] = useState("")
    const msg = new SpeechSynthesisUtterance()
  
    const speechHandler = (msg) => {
      msg.text = text
      window.speechSynthesis.speak(msg)
    }
  return (
    
   
      <div className="mb-3">
        
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <textarea className="form-control my-3" id="box" rows="10" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}></textarea>
    <button type="button " className="btn btn-primary " onClick={upHandle}>UpperCase</button>
    <button type="button" className="btn btn-primary mx-3" onClick={downHandle}>LowerCase</button>
    <button type="button" className="btn btn-primary mx-3" onClick={capHandle}>Clear Text</button>
    <button type="button" className="btn btn-primary mx-3" onClick={() => speechHandler(msg)}>Speech</button>

    <h1>Preview:</h1>
    <p>{text}</p>
    <h1>length:{text.split(" ").filter((element)=>{return element.length!=0}).length} words  {text.length} characters</h1>
    </div>
  </div>

  )
}
