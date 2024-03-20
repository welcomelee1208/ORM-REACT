import useSWR, { mutate } from "swr";
//get type의 기본데이터 조회 전용 fetch함수
const getFetcher = (url: string) => fetch(url).then((res) => res.json());

//백엔드 api 호출하고 swr훅으로 값을 반환해주는 전용개발자 훅함수 정의하기
const useBlogDetail = (blogId: string) => {
  const { data, error, isLoading } = useSWR<any>(
    `http://localhost:3005/api/articles/${blogId}`
  );
  return {
    data: data,
    error: error,
    isLoading: isLoading,
  };
};

export default useBlogDetail;
