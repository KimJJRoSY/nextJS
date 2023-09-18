import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import SizeReviewList from "@/components/sizeReviewList";

export default function Product() {
  const [product, setProduct] = useState();
  const [sizeReviews, setSizeReviews] = useState();

  const router = useRouter();
  // 여기서 id값은 파일이름의 [] 안에 있는 id 값임 => Api 연동가능
  const { id } = router.query;

  // targetId를 받아서 `/product/${targetId}` 이 주소로 요청할거임
  async function getProduct(targetId) {
    const res = await axios.get(`/product/${targetId}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  }

  async function getSizeReviews(targetId) {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    // 값이 없을수도 있으니까 빈 배열로 처리함
    const nextSizeReviews = res.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  }
  // id가 바뀔 때마다 실행
  useEffect(() => {
    if (!id) return;
    getProduct(id);
    getSizeReviews(id);
  }, [id]);

  if (!product) return null;
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt={product.name} />
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}

//function이름보다는 파일 이름으로 웹 페이지 생성됨
// http://localhost:3000/products/1

// 파일명에 대괄호를 쓰면 안에 있는 값은 변수처럼 쓸 수 있음 == params
//=> 주소가 바뀌어도 같은 페이지 보임 ==> 숫자가 들어간 자리가 id param의 값임
// 대괄호 표기법은 파일뿐만 아니라 폴더에도 자유롭게 사용 가능함
