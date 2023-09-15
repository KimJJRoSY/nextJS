import { useRouter } from "next/router";
import SearchForm from "./components/searcjForm";

export default function Search() {
  const router = useRouter();
  // router의 query객체에서 q라는 이름을 가져오면 됨
  // http://localhost:3000/search?q=티셔츠
  // 이렇게 검색 가능
  const { q } = router.query;
  return (
    <div>
      <h1>Search page</h1>
      <SearchForm initialValue={q} />
      <h2>{q} search results</h2>
    </div>
  );
}
