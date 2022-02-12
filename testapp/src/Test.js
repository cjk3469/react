import React,{useState} from "react";
import './Test.css';


function Test(){
    const[testTitle, setTestTitle] = useState(['testtext1','testtext2','testtext3']);

    const[like,setLike] =useState(0);

    const[cubeColor,setCubeColor] = useState(['🟨','⬜️']);

    function ChangeCubeColor(){
        const newArray = [...cubeColor];
        newArray[0] = newArray[1];
        setCubeColor(newArray);
    }

    
    // const[Mine,MineChange] = useState

    function ChangeTitle(){
        const newArray = [...testTitle];
        newArray[0] = 'modified text';
        setTestTitle(newArray);
    }

    

    return(
        <div className="Test">
            <button onClick={ChangeTitle}>button</button>
            <h3>
                {testTitle[0]}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={()=>{setLike(like +1)}}>😘</span>
                {like}
            </h3>
            <h3>
                {testTitle[1]}
            </h3>
            <h3>
                {testTitle[2]}
            </h3>
            <div>
            <table className="MineTable">
                <tr>
                    <button className="MineCube" onClick={()=>{ChangeCubeColor()}}>
                    {cubeColor[0]}
                    </button>
                    <button className="MineCube">
                    {cubeColor[0]}
                    </button>
                </tr>
                <tr>
                    <button className="MineCube">
                    {cubeColor[0]}
                    </button>
                    <button className="MineCube">
                    {cubeColor[0]}
                    </button>
                </tr>
            </table>
            </div>
        </div>
    );
}

export default Test;