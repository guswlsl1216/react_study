import { useRef, useState } from 'react';



function App2 () {
 
    const [board, setBoard] = useState ([
          {
            title : 'React',
            date : '2025-07-17',
            like : 0
          },
          
          {
            title : 'HTML',
            date : '2025-07-17',
            like : 0
          },
    
          {
            title : 'CSS',
            date : '2025-07-17',
            like : 0
          },
        ]);
    
  const [newTitle, setNewTitle] = useState('');
  const refNew = useRef();
 

  return (
    <div>
      {
      board.map((data, i) => {
        return (
        <div className="list" key={i}>
          <h4>
            {data.title}
            <span onClick={ () => {
             // 내가 클릭한 따봉이 몇번 ㄸㅏ봉인지 파악이 1번 
             // alert(i); 내가 클릭한 인덱스 번호 ! 
             // board에 있는 like를 꺼내와야 하는데 오브젝트에 있어서 원본을 가져오는 작업을 해야함
            
             let _board = [...board];
              _board[i].like = _board[i].like + 1 // 차곡 차곡 1씩 증가 
            
              //  console.log(_board) // console.log(board) * 복사본임 _board 
              // 변경 함수 : 인수에다가 변경시킬 값을 넣으면 해당 변수에 그 값으로 변경시켜달라는 뜻임 ,get, set 
              // 임시변수를 만들어서 임시변수의 값을 바꾸도록 시킨거임  (_board)
              // 원본을  치우고 라이크만 반영된 board로 바꿔달라고 해야함 
            
              setBoard(_board)  //setBoard = (_board[i].like) 로 바꾸면 위에 오브젝트의 값이 다 지워지고 1이 됨 => 덩어리로 바꿔달라고 해야함 
              
            }}>👍</span><span>{data.like}</span>
          </h4>
            
          <p>{data.date}</p>
          <button onClick={ () => {
            let _board = [...board];   //바꿔줘야 인식을 하니까
            _board.splice(i,1);
           // console.log(_board)
            setBoard(_board);
          }}>삭제</button>
       </div> 
        )
      }) 
      }

      <input ref={refNew} type="text" onChange={(e) => {
        setNewTitle(e.target.value);
        // setNewTitle(refNew.current.value);

      }} />
      <button onClick= {() => {
       let now = new Date();                  // 문자열이니까 +1이 그냥 글자로 붙음, ()로 묶어줘야함
       let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();  //날짜를 뽑아줌

       let newData = {
        title: refNew.current.value,
        date : date,
        like : 0
       }
       console.log(newData);
       let _board = [...board];
       _board.push(newData);  // 새로만든 저 오브젝트를 추가해 주세요 라는 뜻 

       setBoard(_board);
       
       refNew.current.value = '';

      }}>추가</button>
    </div>
  );
} 
 


export default App2;
