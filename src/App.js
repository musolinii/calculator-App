
import './App.css';



function App() {

  let string = "";
  let buttons = document.querySelectorAll(".btn")
  Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
      if(e.target.innerHTML == "="){
        string = eval(string)
        document.querySelector(".display").innerHTML =`
        <p>${string}</p>`

      }else if(e.target.innerHTML == "AC"){
        string = ""
        document.querySelector(".display").innerHTML =`
        <p>${string}</p>`

      }else{
        string += e.target.innerText
        document.querySelector(".display").innerHTML =`
        <p>${string}</p>`

      }

      

    })
  })

 


  return (
    <>
      <section>
        <div className='container'>

          <div className='display'><p>34</p></div>

          <table>
            <tbody>

              <tr>
                <td><button id='ac' className='btn special'>AC</button></td>
                <td><button id='sign' className='btn special'>+/-</button></td>
                <td><button id='percentage' className='btn special'>%</button></td>
                <td><button id='division' className='btn operator'>/</button></td>
              </tr>

              <tr>
                <td><button id='number' className='btn number'>7</button></td>
                <td><button id='8' className='btn number'>8</button></td>
                <td><button id='9' className='btn number'>9</button></td>
                <td><button id='mul' className='btn operator'>x</button></td>
              </tr>

              <tr>
                <td><button id='6' className='btn number'>6</button></td>
                <td><button id='5' className='btn number'>5</button></td>
                <td><button id='4' className='btn number'>4</button></td>
                <td><button id='min' className='btn operator'>-</button></td>
              </tr>

              <tr>
                <td><button id='3' className='btn number'>3</button></td>
                <td><button id='2' className='btn number'>2</button></td>
                <td><button id='1' className='btn number' >1</button></td>
                <td><button id='add' className='btn operator'>+</button></td>
              </tr>

              <tr>
                <td colSpan="2"><button id='zero' className='btn number'><p>0</p></button></td>
                <td><button id='point' className='btn decimal'>.</button></td>
                <td><button id='equal' className='btn operator'>=</button></td>

              </tr>


            </tbody>
          </table>


        </div>
      </section>
    </>
  )
}




export default App;
