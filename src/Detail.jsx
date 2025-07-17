function Detail({ boardTitle, setBoardTitle, titleIndex }) {
  {/*console.log(props); 도 되지만, 애초에 받아올 애들은 위에 적어주면 변수 선언안해도 되고 그냥 쓸 수 있음, 단! 꼭 중괄호 안에 넣어줘야함  */}
  {/*const boardTitle = props.boardTitle;*/}

  return (
    <div className="detail">     
     {/* props에 다 들어있음 (약간 값들을 props에 담아서 온다고 생각), props에서 꺼내서 색깔도 쓸 수 있음  */}
      <button onClick={ () => {
        let _boardTitle = [...boardTitle];
        _boardTitle[0] = "ㅋㅋㅋㅋ";

        setBoardTitle(_boardTitle)

      }}>제목바꿔주는 버튼</button>
      <h4>{boardTitle[titleIndex]}</h4>                
      <p>날짜</p>
      <p>내용</p>
      </div>
  )
}

// 하나의 파일 안에 하나의 컴포넌트만 관리한다 라고 생각하면 됨. 
// 부모가 자식에게만 보낼 수 있음, 자식이 부모한테는 X
// boardTitle만 보내진 상태에서는 setBoardTitle을 쓸 수 없음, 부모에서 걔도 같이 보내줘야함 ! 


export default Detail;   // 내보낼거다! 함수 선언문으로 만드는 방식 ( boardTitle )