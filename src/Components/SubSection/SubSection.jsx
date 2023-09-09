import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SubSection = () => {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  let startListing = () =>{ SpeechRecognition.startListening({ continuous: true })
  toast("Started listining")
}

  let [data, setData] = useState("")
  let [flag,setflag]=useState(false)
  let stopListening = () => {
    SpeechRecognition.stopListening()
    setData(transcript)
    setflag(!flag)
    toast("Stoped listining")

  }

  const [isCopied, setCopied] = useClipboard(data);








  return (
    <div className='flex flex-col items-center mt-10'>
      <div className=' border-2 md:w-2/3 lg:w-2/3 w-11/12 md:h-64 lg:h-64 h-72 shadow-lg rounded-lg bg-white text-gray-500 '>

        <div>
          <div className='h-52 px-10 overflow-scroll overflow-x-hidden scrollbar-hide '>{transcript}</div>


        </div>
        
      </div>
      <div className='flex space-x-12 px-8 justify-around m-10 '>

   {
    flag==true?<div><button className="inline-flex items-center text-white text-md bg-orange-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={setCopied}>
    {isCopied? <div>copied</div>: <div>copy</div>}
       
    
    
    </button> </div>:<div></div>
   }
<button className="inline-flex items-center text-white text-md bg-orange-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 " onClick={startListing}>
    Start Listining

</button>
<button className="inline-flex items-center text-white text-md bg-orange-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={stopListening}>
Stop Listining


</button>

</div>

      
      </div>
  )

}


export default SubSection