"use client";
import { useRouter } from "next/navigation"; // 수정
import Link from "next/link"; // 추가

export default function BlogDetail() {
  const router = useRouter(); // 수정

  // 실제로는 해당 ID에 해당하는 블로그 정보를 가져오는 로직이 여기에 들어갑니다.
  // 이 예시에서는 더미 데이터를 사용하고 있습니다.
  const blog = {
    id: 1,
    title: "Sample Blog Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "John Doe",
    date: "2022-03-25",
  };

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Blog Detail
              </h2>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {blog.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {blog.content}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    Author: {blog.author}
                  </dt>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    Date: {blog.date}
                  </dt>
                </div>
              </dl>
              <Link href="/blogs">
                {" "}
                {/* 추가 */}
                <a className="text-indigo-600 hover:text-indigo-700 mt-8 inline-block">
                  &larr; Back to Blog List
                </a>
              </Link>{" "}
              {/* 추가 */}
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
