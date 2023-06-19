import { apiUser } from "./api/value";
import { recommedInput } from "./TS/recommed";
import "./style.css";
import { jsonResponse, Results } from "./types/Types";
import { view } from "./TS/viewDom";

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.theme == "dark") {
    document.documentElement.classList.add("dark");
  } else if (localStorage.theme == "light") {
    document.documentElement.classList.remove("dark");
  }
});

let user = document.querySelector("#input-user") as HTMLInputElement;

function search(content: jsonResponse) {
  user.addEventListener("keyup", (event): void | null => {
    let inputDiv = event.target as HTMLInputElement;
    let keycode = event.key.charCodeAt(0);
    let keyLower = inputDiv.value.toLocaleLowerCase();

    if (
      event.key === "Alt" ||
      event.key === "Control" ||
      event.key === "Shift" ||
      event.key === "Meta" ||
      event.key === "AltGraph" ||
      event.key === "NumLock" ||
      event.key === "Tab"
    ) {
      return null;
    }
    if (inputDiv.value === "") {
      (document.querySelector("#nodo-parent") as HTMLDivElement).innerHTML = "";
    } else if (
      (keycode >= 65 && keycode <= 90) ||
      (keycode >= 97 && keycode <= 122)
    ) {
      let arrayFilter: Results[] = content.data.results.filter((content) => {
        let titleLower = content.name.title.toLocaleLowerCase();
        let firstLower = content.name.first.toLocaleLowerCase();
        let lastLower = content.name.last.toLocaleLowerCase();

        let Allname = `${titleLower} ${firstLower} ${lastLower}`

        return (
         Allname.includes(keyLower) 
        );
      });
      view(arrayFilter);
      console.log(arrayFilter);
    }
  });
}

apiUser().then((json) => {
  let value = json as jsonResponse;
  search(value);
  recommedInput(value.data.results);
});

//*Dark Mode
let buttonActive = document.getElementById(
  "button-toggle"
) as HTMLButtonElement;

const darkMode = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  document.documentElement.classList.toggle("dark");
  buttonActive.classList.toggle("active");
  buttonActive.classList.toggle("after:left-[unset]");
  buttonActive.classList.toggle("after:right-0");

  localStorage.theme =
    document.documentElement.className == "dark" ? "dark" : "light";
};

buttonActive.addEventListener("click", darkMode);
