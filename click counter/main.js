let button = document.getElementById("counter"),
     count = 0;
button.onclick = function() {
          count += 1;
          button.innerHTML = "Currently: " + count;
     };
