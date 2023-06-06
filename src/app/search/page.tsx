import {data} from '../../data'
export default function Search() {
  return(
    <div className=" max-h-[650px] overflow-auto  flex flex-col px-6 justify-between ">
      <h1 className='font-bold text-2xl mt-8'>Browse all</h1>
      <div className='grid grid-cols-4 gap-y-6   py-6'>
     {data.map((item,index)=>(
      
      <div
      key={index}
      style={{'background':item.color}}
      className='w-[219px] h-[219px] rounded-xl px-6 relative overflow-hidden'
      >
        <h2 className='text-xl font-semibold mt-4'>{item.title}</h2>
        <img src={item.image} className='h-[6.25rem] w-[6.25rem] rotate-[25deg] shadow-xl absolute translate-x-4 translate-y-2 bottom-0 right-0 '/>
      </div>
     ))}
    
     </div>
    </div>
  )
}