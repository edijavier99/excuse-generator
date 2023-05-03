/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = excuseGenerator();
};

function excuseGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let rWho = Math.floor(Math.random() * who.length - 1) + 1;
  let rAction = Math.floor(Math.random() * action.length - 1) + 1;
  let rWhat = Math.floor(Math.random() * what.length - 1) + 1;
  let rWhen = Math.floor(Math.random() * when.length - 1) + 1;
  let result =
    who[rWho] + " " + action[rAction] + " " + what[rWhat] + " " + when[rWhen];
  return result;
}
