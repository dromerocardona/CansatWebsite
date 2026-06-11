// Places the menu bar at the top of each page
fetch('menubar.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
    });
//