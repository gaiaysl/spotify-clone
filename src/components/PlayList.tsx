export default function PlayList() {
    return (
      <div className='pt-6  mx-6  '>
        <ul className="" >
          {new Array(40).fill(0).map((_, i) => (
            <li className="" key={i}>
              <a href='/'>{i+1}.şarkım</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  