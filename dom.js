const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("red-text");
para.textContent = "Hey I’m red!";
//adding single style inline
para.style["color"] = "red";
container.appendChild(para);

const h3 = document.createElement("h3");
h3.classList.add("header-three");
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const pinkDiv = document.createElement("div");
pinkDiv.classList.add("pink-div");
pinkDiv.style.cssText = "background:pink; border: 2px solid black;";

const pinkDivH1 = document.createElement("h1");
pinkDivH1.textContent = "I’m in a div";
pinkDivH1.classList.add("pinkie");

const para1 = document.createElement("p");
para1.textContent = "ME TOO!";

pinkDiv.appendChild(pinkDivH1);
pinkDiv.appendChild(para1);
container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
