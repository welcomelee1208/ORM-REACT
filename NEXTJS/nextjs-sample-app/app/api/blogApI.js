export const fetchArticleData = async (url) => {
  const result = await fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log("처리결과 데이터:", result.data);

      return result;
      // if (result.code === "200") {
      // 	//성공시 article바인딩 데이터 조회해온 데이터로 업데이트
      // 	setPost(result.data);
      // }
    })
    .catch((error) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", error);
    });

  return result;
};
