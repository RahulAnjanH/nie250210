import { useState } from "react"

function FullName(){
    const [person,setPerson] = useState({first_name:'rahul', last_name:'dravid'});
    const onChangefirst = (event) =>{
            const newp = {... person};
            newp.first_name=event.target.value;
            setPerson(newp);
    } 
    const onChangebox= (event) =>{
            const newp = {... person};
            newp[event.target.id]=event.target.value;
            setPerson(newp);
    } 
    return(
        <>
            <div className= "container"> 
            <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first name" className="form-control" value={person.first_name} onChange={onChangefirst}/>
            </div>
            <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last name" className="form-control" value={person.last_name} onChange={(event)=> setPerson({...person,last_name:event.target.value})}/></div>
            <div>Full Name:{person.first_name}{person.last_name}

            </div>
</div>
        </>
    )
}
export default FullName;