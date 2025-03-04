import React,{useEffect, useState} from 'react';

import {globalState, getTagString} from "./Global";


const container={
  display:"flex",
  width:"90%",
  height:"50px",
  justifyContent:"center",
  alignItems:"center",
}

const box={
  display:"flex",
  flexDirection:"row",
  width:"100%",
  height:"80%",
  borderRadius:"10px",
  backgroundColor:"#B0A7A7",
  justifyContent:"space-around",
  alignItems:"center",
}

const inputSt={
  backgroundColor:"#D9D9D9",
  border:"none",
  borderRadius:"5px",
  width:"85%",
  height:"70%"
}

const imgBox={
  display:"flex",
  width:"10%",
  height:"70%",
  backgroundColor:"#D9D9D9",
  borderRadius:"5px"
}

function callTags(){
  const formData = new FormData();
  formData.append("tags",globalState.tags);
  fetch('/tags_save', {
  method: 'POST',
  body: formData
})

  .then(response => {
    return true;
  })
}

//도서,태그 검색 페이지의 검색바를 담당하는 컴포넌트
//김동주
const searchBar=(props)=>{
  const[tags,setTags]=useState("");
  
  useEffect(()=>{
    

  },[globalState.tags]);
  
  

  return(
    <div style={container}>
      <div style={box}>
          <input style={inputSt} type="text" value={tags}></input>
          <div style={imgBox}>
            <img></img>
          </div>
      </div>
    </div>
  );
}



export default searchBar;