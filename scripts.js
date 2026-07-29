// Places the menu bar at the top of each page
fetch("menubar.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });

// Places the footer at the bottom of each page
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("beforeend", data);
  });
