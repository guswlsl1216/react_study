import { use, useState } from 'react'
import './App.css'
import Detail from './Detail'; // 경로 잘 잡아서 import도 해줘야함 

function App() {
  // const [변수명, 변경함수] = useState(초기값); => state 선언 방법 
  // useXXX : 리액트 내장함수 ( 리액트 훅 )
    const [title, setTitle] = useState('상품목록');
    const [boardTitle, setBoardTitle]   // state는 값만 저장할 수 있는게 아니라 값, 배열, 오브젝트 등 다양한 구조 넣을 수 있음  
                          = useState(['React', 'HTML', 'CSS']);
    const [like, setLike]  = useState([ 0, 0, 0]);    // 좋아요 누를 때 숫자 올라가는거 // 초기 값 0으로 설정 
    const [show, setshow] = useState(false); // 감추려고 만든 변수임 , 'show'라는 State를 보관할 변수 (처음 페이지를 들어갔을 때 안보이게 하려고 false로 )
    const [titleIndex, setTitleIndex] = useState(0);  // 몇번째 게시글을 클릭했는지 저장할 변수를 만들어서 datail에 보내줘서 iddex 활용 (똑같은 제목만 나올 때 )

let arr = [1,2,3,4,5];

    function change (){
      setLike(like + 1);        // 함수로 만들어서 그냥 빼줌, like 초기 값 + 1로 설정해 줘야함 ! 
    };

  return (                 // 배열도 {} 안에 작성해 줘야함, data는 작명 
    <div className='App'>   

        {/* {
          arr.map ( (data)  => {
            return (              // 함수이기 때문에 return도 가능함 ! // 반복하면서 화면에 보이고 싶은 태그도 return으로 반영되게 할 수 있음 
              <>                   
              <div>{data}</div>      
              <p>ggggg</p>
              </>
            )   
             
          }) 
        }
 */}

      <div className='nav'>
        <h3>{title}</h3>
      </div>
      <button onClick={( ) => {           // 변경함수를 입력해줘야 useState로 재 랜더링(화면 구성을 다시 해줘)됨, 반영됨 
        setTitle('게시판');                // 그치만 페이지가 새로고침되거나 그런건 아님. 컴포넌트만 바꿔줌 
      }}>제목바꾸기</button>

      {
        boardTitle.map( (title,i) => {   // 변수명이니까 아무렇게 꺼도 됨 title로 설정 
          return (
        <div className="list" key= {i}>
          <h4 onClick={ () => {
            setshow(!show);
            setTitleIndex(i);           // 클릭했을 때 나오는 반목문이니까 여기에 index를 넣어줌 
          }}>{title} <button onClick={(e) => {    
            e.stopPropagation();          // 버블링 

            let _like = [...like];
            _like[i] = _like[i]+ 1;            
              setLike(_like);             // 주소값이 같기 때문에 setLike를 써도 감지 못함. 배열을 깨고 다시 새 배열을 만들어야함!ㅃ 
            }}>좋아요</button> {like[i]} </h4>
          <p>2025-07-16</p>
        </div>

         )   
        })
      }


      {/* <div className='list'>    
        <h4>{boardTitle[0]}<button onClick={change}> 좋아요</button> {like} </h4>  
        <p>2025-07-16</p>                
      </div>

      <div className='list'>
        <h4>{boardTitle[1]} </h4>
        <p>2025-07-16</p>
      </div>


      <div className='list'>
        <h4 onClick={ () => {
          setshow(!show);           // show의 초기값 안보이는 상태 false로 뒀으니까 , 보이게 하기 위해 (!show)로 설정 
        }}>{boardTitle[2]}</h4>
        <p>2025-07-16</p>
      </div> */}

      <button onClick={ ( ) => {      
        let _boardTitle = [...boardTitle];    // 두번째 방법 : 기존 배열을 깨고 새 배열을 만든거임. 새 배열이기 때문에 주소값이 달라진다. (변수명은 마음대로 한거임)
        _boardTitle[0] = 'Java';              // 원본이 날아갈까봐 새 변수 만든거임, // 원시데이터는 바로 바뀌지만 배열과 오브젝트는 안되기 때문에, 깨고 변수에 담아서 활용해야함. 
        _boardTitle[1] = 'dqdq';
        // setBoardTitle(['java', 'HTML', 'CSS']) // 첫번째 방법  //주소 값을 가지고 있어서 감지를 못함 // 그래서 새로운 배열로 교체해 주세요 라고 명령해야함 

        setBoardTitle(_boardTitle);       //  새로운 주소 값을 가지고 있어서 잘 작동됨. (이거는 배열 뿐만 아니라 오브젝트도 가능함 . )
      }}>첫번째 게시물 제목바꾸기</button>

      { 
          show ? <Detail 
                    boardTitle= {boardTitle} 
                    setBoardTitle={setBoardTitle} 
                    titleIndex={titleIndex}/> : ' ' // &&, null로 설정해도 됨  // 조건식 넣고 조건식 결과가 true면 2번째 , false면 3번째 : 삼항연산자 

      }
     
      {/* 컴포넌트 : 태그들을 모으는 컴포넌트를 만들 수 있음, 태그처럼 불러올 수 있음 , 여러번 불러올 수도 있음  */}
      
    </div>
  )
  
}

 {/* - 는 빼기로 인식함  */}
export default App
// export 해줘야 내보낼 수 있음 