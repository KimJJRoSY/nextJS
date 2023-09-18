//next.js 서버를 설정하는 파일
//nextjs.org 검색 => Docs=>redirects 검색

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // redirects라는 property로 async 함수를 지정힘
  //  redirects: async function redirects
  async redirects() {
    return [
      {
        // :id === pharam의 이름임
        // products로 시작하는 주소를 items로 시작하는 주소로 변경
        source: "/products/:id",
        destination: "/items/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

// source : redirects 할 주소
// destinatio : 이동시킬 주소
// permanent: response status를 정함
// => 웹브라우저에게 주소가 바뀌었다는 사실을 저장하게 하려면 true, 아니면 false
