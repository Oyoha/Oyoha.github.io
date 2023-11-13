function PageLoaded() {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      console.log("Страница загружена.");
    }
  });
}

PageLoaded();
