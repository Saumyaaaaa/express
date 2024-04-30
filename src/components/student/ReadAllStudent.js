import React from 'react'

const ReadAllStudent = () => {
    let students=[
        {name:"saumya",age:21,isMarried:false},
        {name:"ram",age:20,isMarried:false},
        {name:"lila",age:23,isMarried:false},
        {name:"shan",age:25,isMarried:true},
    ]
  return (
    <div>
      {
        students.map((item,i)=>{
                return(
                    <div key={i} style={{border:"solid red 2px",marginBottom:"20px"}}>
                        <p>Name :{item.name}</p>
                        <p>age is :{item.age}</p>
                        <p>isMarried is :{item.isMarried===true ? "Yes" : "No"}</p>
                        <button>View</button>
                        <button>Edit</button>
                        <button>Delete</button>
                        
                    </div>
                )
        })
      }
    </div>
  )
}

export default ReadAllStudent
