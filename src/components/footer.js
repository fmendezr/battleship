import githubIconSVG from "../images/github.svg";

const renderFooter = () => {
  const container = document.createElement("footer");
  document.body.appendChild(container);

  const mainText = document.createElement("p");
  mainText.textContent = "Copyright ©2022";
  container.appendChild(mainText);

  const link = document.createElement("a");
  link.href = githubIconSVG;
  mainText.appendChild(link);

  const githubIcon = new Image();
  githubIcon.src = "../images/github.svg";
  githubIcon.alt = "Github icon";
  link.appendChild(githubIcon);
};
export default renderFooter;
