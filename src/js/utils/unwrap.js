const unwrapElements = () => {
  const elements = document.querySelectorAll("[unwrap]");
  elements.forEach((element) => {
    const parent = element.parentNode;

    while (element.firstChild) {
      parent.insertBefore(element.firstChild, element);
    }

    parent.removeChild(element);
  });
};

export { unwrapElements };
