
import './App.css';
import weblogo from './imgALL/logo1.svg'
import webimg from './imgALL/nature.webp'
import webimg2 from './imgALL/natur2.jpeg'

function App() {
  let display=()=>{
    alert("welcome priyanka blog")
  }
  let datapluse=(a,b)=>{
    console.log(a+b)
  }
  let hello=(x,y)=>{
    console.log(x-y)
  }
  return (
    <div className="App">
      <h1 className='mt-8'>This is two buttons</h1>
      <button className='bg-[red] p-[10px]' onClick={display}>Click me!!</button>
      <button className='bg-[red] p-[10px] m-5' onClick={()=>datapluse(20,20)}>submit !!</button>
      <h1> click this first img check aftr check in console..</h1>
      <img width={200} src={webimg} onClick={()=>hello(40,10)}></img>
      <img width={200}  src={weblogo}></img>
      <img width={300} src={webimg2}></img>
    </div>
  );
}

export default App;
