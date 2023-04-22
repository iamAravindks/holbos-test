import login from "./assets/images/login.svg";
import signUp from "./assets/images/signUp.svg";
import eng from "./assets/images/eng.jpg";

export const IMAGES = {
  login,
  signUp,
  eng,
};

export const getColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
};

export const setView = (ref) =>
  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "start",
  });
