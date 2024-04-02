
import Data from "./data"
const Table=()=>{
    const info=[{
        name:"Rani",
        id:2,
        age:20
    
    },{
        name:"Kiran",
        id:4,
        age:19
        
    },
    {
        name:"gita",
        id:1,
        age:18
        
    },{
        name:"Karn",
        id:3,
        age:15
        
    }]
    return(
        
        <div>
            <table border="2">
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Age</th>
                </tr>
               
                {
                    info.map((eachObject,index)=>{
                        return(
                            <Data t1={eachObject.name}  t2={eachObject.id} t3={eachObject.age}/>
                        )
                  })
                }
              
 

            </table>
        </div>

    )
}
export default Table;