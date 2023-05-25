import {Icon} from '../../icon'
export default function Buttons() {
    return (
        <div className="text-sm gap-x-1 mr-3 flex flex-row justify-end items-center  ml-10">
        <button className='border border-white bg-white font-semibold text-backdrop text-sm border-opacity-20 w-20 h-8  rounded-full' >Upgrade</button>
        <button className='border bg-black border-black text-white font-semibold  w-28  h-8 flex 
        justify-center items-center rounded-full gap-x-1' >
            <Icon name="downloap" size={16} />  Install App</button>
        </div>
    );
}