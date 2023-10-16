import { useState } from "react";
import "./TicTacToe.css";

export function TicTacToe() {
  const [inputHandler, setInputHandler] = useState("0️⃣");
  const [userData,setUserData]=useState({firstUserName:"",secondUserName:"",start:false})
  const [winner, setWinner] = useState("0️⃣");
  const arr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [data, setData] = useState(arr);
  console.log(userData);

  function checkWiner(i, j) {
    // let count = 1;
    const countArr = [0, 0, 0, 0];
    for (let k = 0, l = data[i].length - 1; k < data[i].length; k++, l--) {
      if (data[i][k] === inputHandler) {
        countArr[0] = ++countArr[0];
      }
      if (data[k][j] === inputHandler) {
        countArr[1] = ++countArr[1];
      }
      if (data[k][k] === inputHandler) {
        countArr[2] = ++countArr[2];
      }

      if (data[k][l] === inputHandler) {
        countArr[3] = ++countArr[3];        
      }
    }
    if (countArr[0] === data.length) {
      setWinner(inputHandler);
      console.log({ count: countArr[0], length: data.length });

      alert("winner 0:" + inputHandler);
      return;
    }
    if (countArr[1] === data.length) {
      setWinner(inputHandler);
      console.log({ count: countArr[1], length: data.length });
      alert("winner 1:" + inputHandler);
      return;
    }

    if (countArr[2] === data.length ) {
      console.log({ count: countArr[2], length: data.length });
      
      setWinner(inputHandler);
      alert("winner2 :" + inputHandler);
      return;
    }
    if (countArr[3] === data.length) {
      console.log({ count: countArr[3], length: data.length });
      alert("winner 3 :" + countArr[3] + inputHandler);
      return;
    }
  }

  return (
    <div className="conatiner">
     {!userData.start&&<FormComponent setUserData={setUserData}/>}
      {userData.start && <table className="container">
        <div className="userName-container"><span>Player1:{userData.firstUserName}</span><span>Player2:{userData.secondUserName }</span></div>
        <tbody>
          {data.map((arr1, i) => {
            return (
              <tr>
                {arr1.map((val, j) => {
                  return (
                    <td>
                      <button
                        onClick={(e) => {
                          if (!data[i][j]) {
                            data[i][j] = inputHandler;
                            setData([...data]);
                            setInputHandler(
                              inputHandler === "0️⃣" ? "❌" : "0️⃣"
                            );
                            checkWiner(i, j);
                          }
                        }}
                      >
                        {data[i][j]}
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>}
    </div>
  );
}


function FormComponent({ setUserData }) {
  function handleFirstUserName(e) {
    setUserData((data) => {
      console.log(data);
      return {...data,firstUserName:e.target.value}
    })
  }
  function handleSecondUserName(e) {
    setUserData((data) => {
      return { ...data, secondUserName: e.target.value };
    });
  }
  return (
    <form>
      <h1>TicTakToe</h1>
      <input
        onBlur={handleFirstUserName}
        required
        type="text"
        placeholder="Enter First User Name"
      />
      <input
        onBlur={handleSecondUserName}
        required
        type="text"
        placeholder="Enter Second User Name"
      />
      <button onClick={() => {
        setUserData((data) => {
          return  {...data,start:true}
        })
      }}>Start</button>
    </form>
  );
}