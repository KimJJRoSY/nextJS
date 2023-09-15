import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  // 여기서 id값은 파일이름의 [] 안에 있는 id 값임 => Api 연동가능
  const { id } = router.query;
  return <div>Product page{id}</div>;
}

//function이름보다는 파일 이름으로 웹 페이지 생성됨
// http://localhost:3000/products/1

// 파일명에 대괄호를 쓰면 안에 있는 값은 변수처럼 쓸 수 있음 == 파람?
//=> 주소가 바뀌어도 같은 페이지 보임 ==> 숫자가 들어간 자리가 id파람의 값임
// 대괄호 표기법은 파일뿐만 아니라 폴더에도 자유롭게 사용 가능함
