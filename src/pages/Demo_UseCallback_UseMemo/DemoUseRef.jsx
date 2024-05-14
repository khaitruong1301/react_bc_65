import React, { useEffect, useRef, useState } from 'react'
import ChildRefComponent from './ChildRefComponent';

const DemoUseRef = () => {
    const [number, setNumber] = useState(1); // Xử lý những giá trị thay đổi trên giao diện
    const refContent = useRef('') //Dành cho các giá trị xử lý ngầm mà không cần đưa lên giao diện hiển thị
    const refDiv = useRef({});
    const refComponent = useRef({})

    // let content = '';
    const handleSend = () =>{
        console.log(refContent.current)
        // console.log(content);
        refDiv.current.className = `p-2 bg-success text-white`;
    }
    console.log('render')
    console.log('render',refContent.current)
    return (
        <div className='container'>
            <h3>Use ref</h3>
            <div ref={refDiv} className='p-2 bg-primary text-white'>
                UseRef:
                <br />
                <p>- UseRef giúp gán lại giá trị của component sau mỗi lần render mà không phải load lại giao diện</p>
                <p>- Useref dùng để dom đến component hoặc các tag jsx </p>
            </div>
            <button className='btn btn-success mt-2' onClick={() => {
                setNumber(number + 1)
            }}>{number}</button>
            <br/> 
            <br/> 
            <input className='w-25 form-control d-inline' name="content" onChange={(e)=>{
                refContent.current = e.target.value;
            }} /><button className='btn btn-success' onClick={handleSend}>send</button>
            
            <button className='btn btn-warning' onClick={()=>{
                refComponent.current.setState();
            }}>click parent</button>
            <ChildRefComponent ref={refComponent} />
        </div>
    )
}

export default DemoUseRef