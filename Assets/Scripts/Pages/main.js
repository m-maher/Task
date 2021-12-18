let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Save and Continue";
  }

  fixStepIndicator(n)
}

function nextPrev(n) {
  let x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    this.sendData();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("form-wizard__header-item");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}


function sendData() {
  let phone = $("#contactPhone").val();
  let name = $("#contactName").val();

  const data = {
    'phone': phone,
    'name': name
  };

  console.log(data)

  document.getElementById("loading").style.display = 'block';

  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("loading").style.display = 'none';
    document.getElementById("successMsg").style.display = 'block';
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


function myMap() {
  let mapOptions = {
      center: new google.maps.LatLng(51.5, -0.12),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  let map, map2;
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  map2 = new google.maps.Map(document.getElementById("map2"), mapOptions);
}
