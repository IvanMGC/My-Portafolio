import { useState } from "react"
import "./styles.scss"
import PropTypes from 'prop-types';

const Button = ({text,nclass,row,col,click}) =>{
  return(
    <td rowSpan={row} colSpan={col}><button className={`${nclass}`} onClick={click}>{text}</button></td>
  )
}

const ButtonBase = ({inputOperation, deleteOperation, resultOperation}) =>{
  
  return(
    <>
      <tbody className="buttons">
        <tr>
          <Button nclass="btn black" text="C" click={()=>{deleteOperation()}}/>
          <Button nclass="btn white" text="/" click={()=>{inputOperation("/")}}/>
          <Button nclass="btn white" text="*" click={()=>{inputOperation("*")}}/>
          <Button nclass="btn white" text="-" click={()=>{inputOperation("-")}}/>
        </tr>
        <tr>
          <Button nclass="btn trans" text="7" click={()=>inputOperation(7)}/>
          <Button nclass="btn trans" text="8" click={()=>inputOperation(8)}/>
          <Button nclass="btn trans" text="9" click={()=>inputOperation(9)}/>
          <Button nclass="btn white height" row={2} text="+"click={()=>inputOperation("+")}/>
        </tr>
        <tr>
          <Button nclass="btn trans" text="4" click={()=>inputOperation(4)}/>
          <Button nclass="btn trans" text="5" click={()=>inputOperation(5)}/>
          <Button nclass="btn trans" text="6" click={()=>inputOperation(6)}/>
        </tr>
        <tr>
          <Button nclass="btn trans" text="1" click={()=>inputOperation(1)}/>
          <Button nclass="btn trans" text="2" click={()=>inputOperation(2)}/>
          <Button nclass="btn trans" text="3" click={()=>inputOperation(3)}/>
          <Button nclass="btn red height" row={2} text="=" click={()=> resultOperation()}/>
        </tr>
        <tr>
          <Button nclass="btn trans width" col={2} text="0" click={()=>inputOperation(0)}/>
          <Button nclass="btn trans" text="." click={()=>inputOperation(".")}/>
        </tr>
      </tbody>
    </>
  )
}

const ShowOut = ({text,remake}) => {
  return(
    <thead className="show-out">
      <tr>
        <th colSpan={4} id="view">
          <p className="remake">{remake}</p>
          <p className="out">{text}</p>
        </th>
      </tr>
    </thead>
  )
}

const HistoyButton = ({click,operation,result}) => <button className="box" onClick={click}><span>{operation}</span><span className="num">{result}</span></button>

const History = ({isVisible,history,fun}) => {
  if(isVisible){
    return(
      <div id="box-history">
        {history.map((e,i) => <HistoyButton key={i} click={()=>{fun(e+" =",eval(e))}} operation={`${e.split("").join(" ")} =`} result={`${(eval(e)+"").split("").join(" ")}`} />).reverse()}
      </div>
    )
  }else{
    return
  }
}


export default function CalculatorBase(){
  const [operation, setOperation] = useState("0.00")
  const [remake, setRemake] = useState("")
  const [visible, setVisible] = useState(false)
  const [history, setHistory] = useState([])
 
  const inputHistory = (op, rs) =>{
    setRemake(op.split("").join(" "))
    setOperation(rs+"")
    setVisible(!visible)    
  }

  const inputOperation = (value) =>{
    if(operation === "0.00" || operation === "Error"){
      setOperation(""+value)
    }else{
      setOperation(operation.concat("",value))
    }
  }
 
  const deleteOperation = () =>{
    setOperation("0.00")
    setRemake("")
  }

  const resultOperation = () => {
    try{
      setRemake(operation.split("").join(" ").concat(" ="))
      setOperation(eval(operation).toFixed(2))
      setHistory(history.concat(operation))
    }catch(e){
      setOperation("Error")
    }
  }

  return(
    <div id="content-calculator">
      <div id="history">
        <div id="decoration"><div className="box"/><div className="box"/><div className="box"/></div>
        <button onClick={()=>{setVisible(!visible)}} ><span className="material-symbols-outlined">history</span></button>
      </div>
      <History isVisible={visible} history={history} fun={(op,rs)=>{inputHistory(op,rs)}}/>
      <table id="calculator-base">
        <ShowOut text={operation} remake={remake}/>
        <ButtonBase inputOperation={inputOperation} deleteOperation={deleteOperation} resultOperation={resultOperation}/>
      </table>
    </div>
  )
}




Button.propTypes = {
    text: PropTypes.string,
    nclass: PropTypes.string,
    row: PropTypes.number,
    col: PropTypes.number,
    click: PropTypes.func,
}
ButtonBase.propTypes = {
    inputOperation: PropTypes.func, 
    deleteOperation: PropTypes.func, 
    resultOperation: PropTypes.func,
}

ShowOut.propTypes = {
    text: PropTypes.string,
    remake:PropTypes.string,
}

HistoyButton.propTypes = {
    click: PropTypes.func,
    operation: PropTypes.string,
    result: PropTypes.string,
}

History.propTypes = {
    isVisible: PropTypes.bool,
    history: PropTypes.array,
    fun: PropTypes.func,
}