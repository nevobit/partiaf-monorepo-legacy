const disableScroll = (): void => {
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
};

const enableScroll = (): void => {
  document.getElementsByTagName("html")[0].style.overflow = "auto";
};

export { disableScroll, enableScroll };
