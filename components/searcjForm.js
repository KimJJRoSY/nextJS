import { useRouter } from "next/router";
import { useState } from "react";

// initialValue 검색해도 검색어 input창에 남아있게 함
export default function SearchForm(initialValue = "") {
  const router = useRouter();
  const [value, setValue] = useState();

  //  input 태그에서 입력하는 값을 반영함
  function handleChange(e) {
    setValue(e.target.value);
  }

  //form태그의 기본동작은 쿼리스트링이랑 함께 페이지를 이동
  //=>But next.js의 router을 사용해서 페이지를 이동할거임
  //=> preventDefault으로 기본동작 막아줌
  function handleSubmit(e) {
    e.preventDefault();
    // 검색어가 없으면 홈페이지로이동 => 검색어 있으면 아무것도 리턴하지 않음
    if (!value) {
      router.push(`/`);
      return;
    }
    //push 안에 이동할 주소 넘겨줌
    router.push(`/search?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      {/* 검색 버튼을 누르면 submit 이벤트 발생 => handleSubmit 함수 실행  */}
      <button>검색</button>
    </form>
  );
}
