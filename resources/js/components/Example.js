import React, {useState} from 'react';
import ReactDOM from 'react-dom'; 
function Example() {
    const [status, setStatus] = useState(true);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [desig, setDesig] = useState(null);
    const [tnc, setTnc] = useState(false);
    const [errName, setErrname] = useState(false);
    const [errEmail, setErremail] = useState(false);
    const [errDesig, setErrdesig] = useState(false);
    const [errTnc, setErrtnc] = useState(false);
    const [err, setErr] = useState(false);
    
    function getData(e)
    {
        e.preventDefault();
        if(err)
        {
            console.log(name,email,desig,tnc)
        }
        
    }
    function userHandle(e)
    {
        if(e.target.name==="name")
        { 
            if(e.target.value===null)
            {
                setErrname(true)
                setErr(true) 
            }
            else
            {
                setErrname(false)
            }
        }
        if(e.target.name==="email")
        {
            if(e.target.value===null)
            {
                setErremail(true)
                setErr(true) 
            }
            else
            {
                setErremail(false)
            }
        }
        if(e.target.name==="desig")
        {
            if(e.target.value===null)
            {
                setErrdesig(true)
                setErr(true) 
            }
            else
            {
                setErrdesig(false)
            }
        }
        if(e.target.name==="iagree")
        {
            if(e.target.checked == false)
            {
                setErrtnc(true)
                setErr(true) 
            }
            else
            {
                setErrtnc(false)
            }
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Registration</div>
                       
                        <div>
                            <button className="btn btn-sm btn-info m-3" onClick={()=>setStatus(!status)}>{status? 'Hide' : 'Show'}</button>
                        </div>
                        {
                        status ?
                        <form onSubmit={(e)=>{userHandle(e); getData(e)}}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label >Name</label>
                                    <input className="form-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your Name"  
                                  
                                    onChange={(e)=>setName(e.target.value)}
                                    /> 
                                    {
                                        errName?
                                        <div  className="text-danger">  
                                            Required!
                                        </div> 
                                        :""
                                    }
                                     
                                </div>    
                                <div className="form-group">
                                    <label  >Email</label>
                                    <input  className="form-control"
                                    type="email"
                                    name="email"
                                    id="email" 
                                    placeholder="Enter your email"  
                                    onChange={(e)=>setEmail(e.target.value)}
                                    /> 
                                    {
                                        errEmail?
                                        <div  className="text-danger">  
                                            Required!
                                        </div> 
                                        :""
                                    }
                                </div>    
                                <div className="form-group" onChange={(e)=>setDesig(e.target.value)}   >
                                    <label  >Designation</label>
                                    <select  name="desig" className="form-control">
                                        <option>--Select Options--</option>
                                        <option>District Manager</option>
                                        <option>Asst. District Manager</option>
                                        <option>Sub Divisional Manager</option>
                                        <option>Asst. Sub Divisional Manager</option>
                                    </select>
                                    {
                                        errDesig?
                                        <div  className="text-danger">  
                                            Required!
                                        </div> 
                                        :""
                                    }
                                </div> 
                                <div className="form-group"> 
                                    <input name="iagree" type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span className="ml-1">Accept Terms & Conditions </span>
                                    {
                                        errTnc?
                                        <div  className="text-danger">  
                                            Required!
                                        </div> 
                                        :""
                                    }
                                </div> 
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div> 
                            </div>
                        </form>
                        : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example')); 
}
