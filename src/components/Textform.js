import React , {useState} from 'react'

export default function Textform(props) {


        const UpperTextClicked  = () => {
            // console.log("Upper case was CLicked");
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Upper Case","sucess") ;
            document.title = "TextUtils - Capitilized"
            
        }

        const LowerTextClicked  = () => {
            // console.log("Upper case was CLicked");
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lower Case","sucess");
            
        }

        const ClearText  = () => {
            let newText = '';
            setText(newText);
            props.showAlert("Text Cleared","sucess")
            
        }

        const capiText  = () => {
            let newText = text.charAt(0).toUpperCase() + text.slice(1);
            setText(newText);
            props.showAlert("Text Capitilized","sucess")
            
        }


        const OnChange = (event) => {
            // console.log("On Change");
            setText(event.target.value);
        }

        const copyText = () => {
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text Copied" , "success") ;
        }

        const handleSpace = () => {
            let newTxt = text.split(/[  ]+/);
            setText(newTxt.join(" "));
            props.showAlert("Removed extra space" ,"success");
        }

        const [text, setText] = useState('');
        // test = "new text" ; //Wrong way to edit the text
        // setText("New text"); //Correct way to edit the text

  return (
    <>
    <div className="conainer" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.Heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text}  onChange = {OnChange} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white',
                 color: props.mode === 'dark' ? 'white' : 'black'  }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-dark mx-2" onClick={UpperTextClicked}>Convert to UpperCase</button>
            <button className="btn btn-dark mx-2 my-2" onClick={LowerTextClicked}>Convert to LowerCase</button>
            <button className="btn btn-dark mx-2 my-2" onClick={capiText}>Capitilized Text</button>
            <button className="btn btn-dark mx-2 my-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-dark mx-2 my-2" onClick={handleSpace}>Remove Extra Space</button>
            <button className="btn btn-dark mx-2 my-2" onClick={ClearText}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the above textBox to preview"}</p>

    </div>
    </>
  )
}
