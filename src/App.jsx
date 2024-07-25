import { useLayoutEffect, useRef } from "react"
import gsap from "gsap";
function App() {

  const comp = useRef(null);

  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
      const tl = gsap.timeline()
      tl.from("#intro-slider",{
        xPercent:"-100",
        duration:1.3,
        delay:0.3,
      }).from(["#title-1","#title-2","#title-3"],{
        opacity:0,
        y:"+=30",
        stagger:0.5,
      }).to(["#title-1","#title-2","#title-3"],{
        opacity:0,
        y:"-=30",
        delay:0.3,
        stagger:0.5
      }).to("#intro-slider",{
        xPercent:"-100",
        duration:1.3,
      }).from("#welcome",{
        opacity:0,
        duration:0.5
      })
    }, comp)

    return () => ctx.revert()
  },[])


  return (
    <>
      <div className="relative" ref={comp}>
        <div 
        id="intro-slider"
        className='h-screen p-10 bg-gray-50 absolute top-0 left-0 font-poppins z-10 w-full flex-col gap-10 tracking-tight '>
          <h1 className='text-4xl' id="title-1">Sbu's Driving School</h1>
          <h1 className='text-4xl' id="title-2">Drivers License</h1>
          <h1 className='text-4xl' id="title-3">Learners License</h1>
          
        </div>
        <div className="h-screen flex bg-gray-950 justify-center place-items-center">
          <h1 id="welcome" className='text-4xl font-bold text-gray-100 font-poppins'>Welcome</h1>
        </div>
      </div>
    </>
  )
}

export default App
