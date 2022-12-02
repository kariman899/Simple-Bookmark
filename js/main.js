var siteNameInput = document.getElementById("siteNameInput");
var siteUrlnput = document.getElementById("siteUrlInput");
var sitesContainer;

if (localStorage.getItem("mySites") != null) {
  sitesContainer = JSON.parse(localStorage.getItem("mySites"));
  displaySites(sitesContainer);
} else {
  sitesContainer = [];
}

function addSite() {
  var site = {
    name: siteNameInput.value,
    url: siteUrlnput.value,
  };

  if (siteNameInput.value != "" && siteUrlnput.value != "") {
    sitesContainer.push(site);
    localStorage.setItem("mySites", JSON.stringify(sitesContainer));
    clearForm();
    displaySites(sitesContainer);
    nameError.classList.replace("d-block", "d-none");
    urlError.classList.replace("d-block", "d-none");
  } else {
    if (siteNameInput.value == "" && siteUrlnput.value == "") {
      showNameError();
      showUrlError();
    } else {
      if (
        siteNameInput.value == "" ||
        (siteNameInput.value == "" && siteUrlnput.value != "")
      ) {
        showNameError();
        urlError.classList.replace("d-block", "d-none");
      }

      if (
        siteUrlnput.value == "" ||
        (siteUrlnput.value == "" && siteNameInput.value != "")
      ) {
        showUrlError();
        nameError.classList.replace("d-block", "d-none");
      }
    }
  }
}

function clearForm() {
  siteNameInput.value = "";
  siteUrlnput.value = "";
}

function displaySites(list) {
  var cartoona = ``;
  for (var i = 0; i < list.length; i++) {
    cartoona += ` <div class="row my-3 p-4 bg-gray">
                <div class="col-4">
                   <p> ${list[i].name}</p>
            </div>
              <div class="col-1">
                   <a href="${list[i].url}" target="_blank">
                       <button class="btn btn-info">
                     Visit </button>
                    </a>
                </div>
             <div class="col-1">
                   <button class=" btn btn-danger" onclick="deletSite(${i})">Delet</button>
             </div>
              
         </div>`;
  }
  document.getElementById("siteOutput").innerHTML = cartoona;
}

function deletSite(deletedIndex) {
  sitesContainer.splice(deletedIndex, 1);
  localStorage.setItem("mySites", JSON.stringify(sitesContainer));
  displaySites(sitesContainer);
}

function showNameError() {
  var nameError = document.getElementById("nameError");
  nameError.classList.replace("d-none", "d-block");
}

function showUrlError() {
  var urlError = document.getElementById("urlError");
  urlError.classList.replace("d-none", "d-block");
}

// function checkName(name) {

//   for (var i = 0; i < sitesContainer.length; i++) {
//       if (sitesContainer[i].name === name)
//       nameError.innerHTML="required"

//   }
//   return true;
// }

// function checkUrl(url) {

//   for (var i = 0; i < sitesContainer.length; i++) {
//       if (sitesContainer[i].url === url)
//       urlError.innerHTML="required"
//   }
//   return true;
// }
