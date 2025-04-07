const images = document.querySelectorAll(".image");

// 이미지 클릭 시 최상위로 이동
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        images.forEach((img) => (img.style.zIndex = 1)); // 다른 이미지를 뒤로 보냄
        image.style.zIndex = 10; // 클릭한 이미지를 최상위로 올림
    });
});
