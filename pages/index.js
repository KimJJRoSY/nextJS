import Link from "next/link";
import styles from "@/styles/Home.module.css";
import SearchForm from "./components/searcjForm";

export default function Home() {
  return (
    <div>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ul>
        <li>
          <Link href="/products/1">첫 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/2">두 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/3">세 번째 상품</Link>
        </li>
        <li>
          <Link href="https://codeit.kr">코드잇</Link>
        </li>
      </ul>
    </div>
  );
}

// Link 태그를 사용하면 페이지 전체를 불러오는게 아니라 필요한 데이터만 불러오기 때문에
// => 이동속도 빨라짐 + 넘어가는 동작 부드러움
