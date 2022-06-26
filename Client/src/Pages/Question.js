import "./SetEachQuestion.css"
import React, { useEffect } from 'react';
export default function Question(){
    
    const [queType, setQueType]=React.useState("Type of Question")
    const [image,setImage]=React.useState("")
    const [queData,setQueData]=React.useState({"queno":0,"que":"","marks":0,"option1":"","option2":"","option3":"","option4":""})
    function handleChanges(e){
        const newQueData={...queData}
        newQueData[e.target.id]=e.target.value
        setQueData(newQueData)
    }
    function handleImage(e){
        if(e.target.files && e.target.files[0]){
            let pic=e.target.files[0]
            setImage({image:URL.createObjectURL(pic)})
        } 
    }
    function handleQueType(e){
        setQueType(e.target.value)
    }
    function displayopts1(){
        if(queType==="MCQ"){
        return(
        <div className='opts-list'>
        <input id="option1" placeholder='Enter Option 1' onChange={handleChanges} type="text" className='que-text'/>
        <input id="option2" placeholder='Enter Option 2' onChange={handleChanges} type="text" className='que-text'/>
        <input id="option3" placeholder='Enter Option 3' onChange={handleChanges} type="text" className='que-text'/>
        <input id="option4" placeholder='Enter Option 4' onChange={handleChanges} type="text" className='que-text'/>
        </div>)}
    }
    return(
        <>
        <form className='question'>
        <input id="queno"onChange={handleChanges} placeholder='Question number' type="number" className='que-text'/>
        <input id="que"placeholder='Type the question here' onChange={handleChanges} type="text" className='que-text'/>
        <select id="quetype"value={queType} className='que-text' onChange={handleQueType}>
            <option>Type of Question</option>
            <option>Descriptive</option>
            <option>MCQ</option>
        </select>
        <input id="marks"placeholder='Marks of question'onChange={handleChanges} type="number" className='que-text'/>
        <span className='add-img-span'>
        <label className='add-img-label'>Add image:  </label>
        <input type="file" placeholder="Add Image" onChange={handleImage} />
        </span>
        {displayopts1()}
        {/* <button className="add-que-button">Save Question</button> */}
    </form>
        </>
    )
}