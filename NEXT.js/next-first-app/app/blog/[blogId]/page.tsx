"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Article } from "@/app/types/definitions";
import useBlogDetail from "@/app/api/blogAPI";
//swr훅 참조
//use swr훅은 백엔드 api fetcher 를 통해 가져온 데이터를 클라이언트에서 자동으로 캐시 처리해주는 훅기능 제공
// mutate는 한번 가져온 데이터를 필요시 다시가지고 오고시을때 호출하는 기능제공
//화면이 재로딩 되거나 부모컴포넌트가 변경되어 해당화면이 재 렌더링 될때 실행
//SWR 을 사용하는 이유: 백엔드 api호출시 특히 클라이언트에 컴포넌트에서 웹브라우저에서 데이터 호출시 적극사용권장
//캐싱기능(백엔드에서 가져온 데이터를 프론트엔드에 저장해두고 사용하는 기능)
// 재호출기능/포커스 추적기능/인터벌 기능(주기적으로 api를 호출한다)
import useSWR, { mutate } from "swr";
//fetcher  함수 정의: fetcher함수는 실질적으로 프론트엔드 백엔드 api를 호출해주는 함수
//use swr훅은 기본적 인 훅 에서 지정된 전용 fetcher함수를 통해 벡엔드 데이터를
// const fetcher = (url: string) => fetch(url).then((res) => res.json());
// //단일
// const getArticleFetcher= async (url:string)=>{
//   const response = await fetch(url,{
//     method:get
//   })
//

export default function BlogDetail(props: any) {
  const router = useRouter();

  console.log("props정보 확인하기 : ", props);

  const articleId = props.params.blogId;

  const [article, setArticle] = useState<Article>({
    title: "",
    contents: "",
    is_display_code: 1,
  });

  //useeffect사용안하고 swr이용해 데이터를 가져와 클라환경에 캐쉬함
  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:3005/api/articles/1",
  //   fetcher
  // );
  const { data, error, isLoading } = useBlogDetail(articleId);
  //swr데이터가 변경될때마다 setter함수를 통해 데이터 변경처리

  useEffect(() => {}, [data]);
  //단일데이터 바인딩 처리
  if (data) {
    console.log("swr데이터바인딩완료", data);
    // setArticle(data.data);
  }
  if (error) return <div>백엔드 호출에러발생 uI제공</div>;
  if (isLoading) return <div>로딩중</div>;
  const onBlogChange = (e: any) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onBlogSubmit = (e: any) => {
    e.preventDefault();

    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3005/api/articles/${articleId}`,
        {
          method: "POST",
          headers: {
            //Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(article),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("처리결과 데이터:", result);

      if (result.code == "200") {
        // 특정 URL페이지로 이동시키기
        router.push("/blog/list");
      }
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  };
  //SWR 기반 데이터 리로딩하기 - 캐시 다시 저장
  const onDataReload = () => {
    mutate(`http://localhost:3005/api/articles/${articleId}`);
    console.log("SWR mutate를 통해서 다시 데이터 조회하기", data);
  };
  return (
    <div>
      <h3>블로그 상세 - {articleId}</h3>
      <div>
        <form onSubmit={onBlogSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                게시글내용 확인
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {data.data.title}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    글제목
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={article.title}
                      onChange={onBlogChange}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    글 내용
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="contents"
                      value={article.contents}
                      rows={3}
                      onChange={onBlogChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => router.push("/blog/list")}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              목록
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
