
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


function App() {
  

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{backgroundColor: "red"}}>hi</div>
        <div style={{backgroundColor: "green"}}>hi</div>
        <div style={{backgroundColor: "yellow"}}>hi</div>
        <div style={{backgroundColor: "yellow"}}>hi</div>
      </div>

<div className="flex justify-between">
  <div className='bg-red-500'>hi</div>
  <div className='bg-yellow-500'>hi</div>
  <div style={{backgroundColor: "yellow"}}>hi</div>
  <div style={{backgroundColor: "yellow"}}>hi</div>
</div>

  <div className='grid grid-cols-10'>
    <div className='bg-red-500 col-span-4'>hi there is a not</div>
    <div className='bg-yellow-500 col-span-4'>hi</div>
    <div className='bg-green-500 col-span-2'>hi</div>
    <div className='bg-blue-500'>hi</div>
    <div className='bg-green-500'>hi</div>
    <div className='bg-red-500'>hi</div>
  </div>

  <div className='grid grid-cols-3'>
    <div className='bg-red-500' >
    hi there 1</div>
    <div className='bg-blue-500' >
    hi there 1</div>
    <div className='bg-green-500' >
    hi there 1</div>

  </div>
  
  <div className='bg-red-500 md:bg-blue-500'>hi there</div>
  <div className='bg-red-500 md:bg-blue-500'>hi there</div>
   
   <div className='grid grid-cols-1  md:grid-cols-3 '>
  <div className='bg-blue-500  '>hi there</div>
  <div className='bg-red-500 '>hi there</div>
  <div className='bg-green-500  '>hi there</div>
</div>

      
    </>
  )
}

export default App;
