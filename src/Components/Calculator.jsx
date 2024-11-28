import React, {useState} from 'react'
import './Calculator.css'

const Calculator = () => {
     const [value, setvalue] = useState('');
   
    
  return (
    
    <div>
       

    <form action="">
     <div className="container">
        <div className='h1'>  <h1>React Calculator</h1> </div>
     
     
      <div className="calculator">
      

       <div className='number-box'>
        <input type="text" value={value}/>
       </div>

        <div>
            <input type="button" className='AC' value="AC" onClick={e=> setvalue('')}/>
            <input type="button" className='DE'  value="DE" onClick={e=> setvalue(value.slice(0,-1))}/>
            <input type="button" value="%" onClick={e=> setvalue(e.target.value)} />
            <input type="button" value="/"  onClick={e=> setvalue(e.target.value)}/>
        </div>
 
        <div>
            <input type="button" value="7"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="8"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="9"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="*"  onClick={e=> setvalue(value+e.target.value)}/>
        </div>

        <div>
            <input type="button" value="4"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="5"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="6"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="+"  onClick={e=> setvalue(value+e.target.value)}/>
        </div>

        <div>
            <input type="button" value="1"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="2"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="3"  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" value="-"  onClick={e=> setvalue(value+e.target.value)}/>
        </div>

        <div>
            <input type="button" value="00"  onClick={e=> setvalue(value+e.target.value)}/>
            
        <input type="button" value="0"  onClick={e=> setvalue(value+e.target.value)}/>
        <input type="button" value="."  onClick={e=> setvalue(value+e.target.value)}/>
            <input type="button" className='equal' value="=" onClick={e=> setvalue(eval(value))}/>
        </div>

      </div>
     </div>
    </form>

    </div>


  )
}

export default Calculator