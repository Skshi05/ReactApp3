import React, { useRef, useState } from 'react'

export default function UnForm() {
  const luckyname = useRef(null)
  const [show, setShow] = useState(false)
  const submitform=(e)=>{
    e.preventDefault();
    const name = luckyname.current.value;
    name === "" ? alert("plz enter name") : setShow(true);
  }
  return (
    <div>
      <form action="" onSubmit={submitform}>
        <div>
            <label htmlFor='luckyname'>Enter your luckyName</label>
            <input type="text" id="luckyname" ref={luckyname}></input>
        </div>
        <br/>
        <button>Submit</button>
      </form>
      <p>{show ? `Your luckname is ${luckyname.current.value}`:""}</p>
    </div>
  )
}
