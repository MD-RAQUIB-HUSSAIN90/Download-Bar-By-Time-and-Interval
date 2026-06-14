let progress = document.querySelector("#progressBar");
let percentage = document.querySelector(".percent");
let seconds = 5;

let count = 0;
let setIntval=setInterval(
  () => {
    if (count <= 99) {
      progressBar.style.width = `${count}%`;
      count++;
      percentage.textContent = count;
    } else {
      document.querySelector("#Dwnld").textContent = "Downloaded";
      clearInterval(setIntval)
    }
  },
  (seconds * 1000) / 100,
);

// Auto hide alert banner after 3s.................

let alrt = setTimeout(() => {
  document.querySelector(".display").style.display = "none";
}, 3000);
