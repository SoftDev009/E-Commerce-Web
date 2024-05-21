function callScript() {
  return new Promise(function (resolve, reject) {
    fetch(
      "https://scripts.openinapp.com/gtm/121dd8b6-f037-4b61-96a8-6cd6fb91266e",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_agent: window.navigator.userAgent,
          source_url: window.location.origin,
          referrer: document.referrer,
        }),
      }
    )
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then(function (data) {
        resolve(data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function toShowModal() {
  var popupContainer = document.querySelector(".main-container")
  popupContainer.style.display = "flex"
}

function startProgress(link) {
  var progressBar = document.getElementById("progress-bar")
  progressBar.style.width = "0%"
  var totalDuration = 3000
  var intervalDuration = 10
  var increment = 100 / (totalDuration / intervalDuration)
  var width = 0
  var interval = setInterval(frame, intervalDuration)
  function frame() {
    if (width >= 100) {
      if (link) {
        window.location.href = link
      }
      var popupContainer = document.querySelector(".main-container")
      popupContainer.style.display = "none"
      clearInterval(interval)
    } else {
      width += increment
      progressBar.style.width = width + "%"
    }
  }
}

window.onload = function () {
  callScript()
    .then(function (data) {
      if (data.bb_display && data.tak) {
        toShowModal()
        startProgress(data.tak)
      } else if (!data.bb_display && data.tak) {
        window.location.href = data.tak
      }
    })
    .catch(function (error) {
      console.error("Error calling script:", error)
      var popupContainer = document.querySelector(".main-container")
      popupContainer.style.display = "none"
    })
}

document.addEventListener("DOMContentLoaded", function () {
  var mainContainer = document.createElement("div")
  mainContainer.className = "main-container"
  mainContainer.innerHTML = `
          <div class="progress-container">
              <div class="progress-bar" id="progress-bar"></div>
          </div>
          <div class="popupContainer">
              <div class="content">
                  <img src="https://res.cloudinary.com/die12ywpb/image/upload/v1716182323/Logo_1_d3bnan.svg"/>
                  <p class="textContent">Opening Safely in Default Browser</p>
              </div>
          </div>
      `
  document.body.appendChild(mainContainer)

  var style = document.createElement("style")
  style.innerHTML = `
          .main-container {
              position: fixed;
              bottom: 0;
              width: 100%;
              display: none;
              flex-direction: column;
              z-index: 99999;
          }
          .popupContainer {
              padding-bottom: 16px;
              padding-top: 16px;
              padding-right: 20px;
              padding-left: 20px;
              box-shadow: 0px -3px 16px 0px rgba(0, 0, 0, 0.12);
              background-color: #ffff;
          }
          .content {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 14px;
              font-weight: 400;
              line-height: 24px;
          }
          .textContent {
              padding-left: 12px;
              color: black;
          }
          .progress-container {
              width: 100%;
              background-color: #e9e9e9;
              border-radius: 15px;
          }
          .progress-bar {
              width: 0%;
              height: 4px;
              background-color: #0e6fff;
              border-radius: 15px;
          }
      `
  document.head.appendChild(style)
})
