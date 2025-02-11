import React, { useRef } from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
  const imgRef = useRef(null);

  return (
    <>
      <h2>Event Handler 예제</h2>
      <input
        type="text"
        placeholder="메세지를 입력 하세요"
        onKeyDown={(event) => console.log(`keydown: ${event.target.value}`)}
        onKeyUp={(event) =>
          event.key === 'Enter' && console.log(`keyup: ${event.target.value}`)
        }
        onChange={(event) => console.log(`change: ${event.target.value}`)}
        onFocus={(event) => console.log(`'focus: ${event.target.value}`)}
        onBlur={(event) => console.log(`'blur: ${event.target.value}`)}
      />
      <br />
      <br />
      <img
        ref={imgRef}
        style={{
          cursor: 'pointer',
          width: 190,
          border: '1px solid #ccc',
        }}
        src={logo}
        onMouseOver={(event) =>
          console.log(`mouseout: x=${event.clientX}, y=${event.clientY}`)
        }
        onMouseMove={(event) => {
          const offsetTop = imgRef.current.offsetTop;
          const offsetLeft = imgRef.current.offsetLeft;

          console.log(
            `mousemove: x=${event.clientX - offsetLeft}, y=${
              event.clientY - offsetTop
            }`,
          );
        }}
        onMouseOut={(event) =>
          console.log(`mouseout: x=${event.clientX}, y=${event.clientY}`)
        }
        onMouseDown={(event) =>
          console.log(`mousedown: x=${event.clientX}, y=${event.clientY}`)
        }
        onMouseUp={(event) =>
          console.log(`mouseup: x=${event.clientX}, y=${event.clientY}`)
        }
        onClick={(event) =>
          console.log(`mouseclick: x=${event.clientX}, y=${event.clientY}`)
        }
        onDoubleClick={(event) =>
          console.log(`doubleclick: x=${event.clientX}, y=${event.clientY}`)
        }
      />
    </>
  );
}
