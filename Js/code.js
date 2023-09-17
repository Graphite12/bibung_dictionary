const articleElements = document.querySelectorAll(".Module_imgs"); // Module_imgs div 항목들을 변수로 저장함

const moduleClassArrays = { // 추후 새로운 모듈이 출시 될시 빠른 추가를 위해 기존 모듈 클래스명을 저장해놓음
  Module_imgs_1: ["F14", "F15E", "F16", "F18", "F86F", "F5", "F1"],
  Module_imgs_2: ["A10C", "AV8", "AJS37", "M2000"],
  Module_casual_imgs: ["F15C", "A10A"]
};

function handleModuleImageClick(event) { // click event 발생시 발생하는 함수
  const clickedElement = event.target; // click evet 발생시 click 된 요소를 clickedElement 변수에 저장
  const parentArticle = clickedElement.closest("article.Module_imgs"); // closest을 사용하여 click 된 요소의 부모 요소를 변수에 저장

  if (!parentArticle) {
    return; // 부모 요소가 없으면 함수 종료
  }

  const parentArticleClass = parentArticle.classList[1]; // class name을 원하는 요소만 변수에 저장
  const moduleClassArray = moduleClassArrays[parentArticleClass]; // Array에서 class name과 똑같은 Array를 꺼내서 변수에 저장

  if (!moduleClassArray) {
    return; // 일치하는 클래스 배열이 없으면 함수 종료
  }

  const childElements = Array.from(parentArticle.querySelectorAll(".Module_img")); // 부모 요소 존재시 자식을 전부 변수에 저장
  const index = childElements.indexOf(clickedElement); //click evnet 발생시 해당 요소가 몇번째 index인지 변수에 저장

  if (index !== -1) {
    const moduleClassName = moduleClassArray[index];
    clickedElement.classList.add(moduleClassName);
    console.log("클릭된 요소의 인덱스:", index);
    console.log(clickedElement);
  } else {
    console.log("클릭된 요소가 부모 article 안에서 찾을 수 없음.");
  }
}

for (const articleElement of articleElements) {
  articleElement.addEventListener("click", handleModuleImageClick);
}
