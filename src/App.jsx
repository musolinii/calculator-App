import './App.css'

function App() {
  return (
    <>
    <section>
      <div className='container'>

        <div className='display'><p>1234</p></div>

        <table>
          <tbody>

            <tr>
              <td><button id='ac' className='special' value={1}>AC</button></td>
              <td><button id='sign' className='special'>+/-</button></td>
              <td><button id='percentage' className='special'>%</button></td>
              <td><button id='division' className='operator'>/</button></td>
            </tr>

            <tr>
              <td><button id='7' className='number' value={7}>7</button></td>
              <td><button id='8' className='number' value={8}>8</button></td>
              <td><button id='9' className='number' value={9}>9</button></td>
              <td><button id='mul' className='operator'>x</button></td>
            </tr>

            <tr>
              <td><button id='6' className='number' value={6}>6</button></td>
              <td><button id='5' className='number' value={5}>5</button></td>
              <td><button id='4' className='number' value={4}>4</button></td>
              <td><button id='min' className='operator'>-</button></td>
            </tr>

            <tr>
              <td><button id='3' className='number' value={3}>3</button></td>
              <td><button id='2' className='number' value={2}>2</button></td>
              <td><button id='1' className='number' value={1}>1</button></td>
              <td><button id='add' className='operator'>+</button></td>
            </tr>

            <tr>
              <td colSpan="2"><button id='zero' className='number' value={0}><p>0</p></button></td>
              <td><button id='point' className='decimal'>.</button></td>
              <td><button id='equal' className='operator'>=</button></td>
              
            </tr>
   

          </tbody>
     </table>


      </div>
    </section>
    </>
  )
}



const calculator = ()=>{
  const arr = document.querySelectorAll(".number")
  const display = document.querySelector(".display")

  for (let i = 0; i < arr.length ; i++){
    arr[i].addEventListener("click",(e)=>{
      const value = e.target.value
      display.innerHTML = `
      <p>${value}</p>`
      

    })
  }
  

}

calculator()



export default App
