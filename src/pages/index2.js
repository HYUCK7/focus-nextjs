export default function Calc(){
    const[inputs, setInputs] = useState({})
    const[result, setResult] = useState('')
    const{num1, opcode, num2} = inputs // object Destructing = 구조, 분해, 할당
    

    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick= (e) =>{
        e.preventDefault()
        memberCalc({num1, opcode, num2}).then(res=> setResult(res.data)).catch(err=>console.log(`에러 발생 : ${err}`))
    }
    return<>
    <form>
            <h1>CALC</h1>
            <div>
                <label><b>NUM1</b></label>
                <input type ="text" name="num1" onChange={handleChange}/><br/>
                <label>
                    <select type = "text" name="opcode" onChange={handleChange}>
                    <option value = "+">+</option>
                    <option value = "-">-</option>
                    <option value = "*">*</option>
                    <option value = "/">/</option>
                    <option value = "%">%</option>
                    </select>
                </label><br/>
            <label><b>NUM2</b></label>
            <input type ="text" name="num2" onChange={handleChange}/><br/>
            <button onClick={handleClick}>전송</button>
            </div>
        </form>
        <div>계산결과 : {result}</div>
    </>
}