/* VARIABLES
 ************************************************************************************/
// Get elements
let header = document.getElementById("header");
let loader = document.getElementById("loader");
let resultDiv = document.getElementById("result");
let resultHeader = document.getElementById("resultHeader");
let resultImg = document.getElementById("resultImg");
let btnYes = document.getElementById("btnYes");
let btnNo = document.getElementById("btnNo");
// let btnChangeAnswer = document.getElementById("btnChangeAnswer");
let startGif = document.getElementById("startGif");
let mainContainer = document.getElementById("mainContainer");

/* LOADER
---------------------------------------------------- */
const load = (choice) => {
  // scroll to top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // hide UI content
  header.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    if (choice == "") {
      question();
    } else {
      if (choice == "yes" || choice == "no") {
        header.style.display = "none";
      } else {
        header.style.display = "inline";
      }
      if (choice == "reset") setUI("go");
    }
  }, 2000);
};

/* HIDE UI ELEMENTS
---------------------------------------------------- */
const hideUI = (msg) => {
  header.innerHTML = msg;
  header.style.display = "none";
  btnYes.style.display = "none";
  btnNo.style.display = "none";
  resultDiv.style.display = "none";
  // btnChangeAnswer.style.display = "none";
  startGif.style.display = "none";
  mainContainer.style.display = "none";
};

const question = () => {
  hideUI();

  Swal.fire({
    title: "Hiii Dubidafhhhhh!",
    imageUrl: "assets/images/chaeyoung wave.gif",
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: "Custom image",
    confirmButtonText: "Yes ?",
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
  }).then((result) => {
    Swal.fire({
      title: "First, I hope that you have a great day today! :)",
      imageUrl: "https://media.giphy.com/media/QyJ0We4GHpjBa7PvKL/giphy.gif",
      imageWidth: 400,
      imageHeight: 300,
      confirmButtonText: "You too! :)",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    }).then((result) => {
      Swal.fire({
        title: "Second, good luck on getting those certifications! You can do it! I am so proud of you! :)",
        imageUrl: "assets/images/giphy.gif",
        imageWidth: 400,
        imageHeight: 300,
        confirmButtonText: "Thank you! :)",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      }).then((result) => {
        Swal.fire({
          title: "Uhmm, anyways...",
          imageUrl: "https://media.giphy.com/media/3o6MbeHSjggZAjR7eU/giphy.gif",
          imageWidth: 400,
          imageHeight: 300,
          confirmButtonText: "What is it ?",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then((result) => {
          Swal.fire({
            title: "I wanted to ask you something...",
            imageUrl:
              "https://media.giphy.com/media/3o6wrtMgP9zOzudnzi/giphy.gif",
            imageWidth: 400,
            imageHeight: 300,
            confirmButtonText: "What is it ?",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then((result) => {
            Swal.fire({
              title: "Since Valentines Day is almost here.",
              text: "I'm going to be straight with you, I really want to take you on a date this Valentine's Day but I know that we are both busy with our work and other stuff.",
              imageUrl: "https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif",
              imageWidth: 400,
              imageHeight: 300,
              confirmButtonText: "Yup.",
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
            }).then((result) => {
              Swal.fire({
                title: "So, I would like to ask...",
                text: "Are you free on the 18th of February, 5 PM onwards? I know Valentine's Day is over this day but uhmmm...",
                imageUrl:
                  "https://media.giphy.com/media/ZXpb6ZiMvLMwCmc5B3/giphy.gif",
                imageWidth: 400,
                imageHeight: 300,
                confirmButtonText: "Uhmmm...",
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
              }).then((result) => {
                setUI();
              });
            });
          });
        })
      })
    });
  });
};

/* SET UI ELEMENTS
---------------------------------------------------- */
const setUI = (answer) => {
  // set header title
  header.innerHTML = `${uiData.valentinesFirstName} ${uiData.valentinesLastName}<br>${uiData.headerMessage}`;

  // Answer is yes
  if (answer === "yes") {
    yesResponse();
  }
  // Answer is no
  else if (answer === "no") {
    Swal.fire({
      title: "Oh no! :(",
      text: "Are you sure?",
      imageUrl: "https://media.giphy.com/media/EoHMS2NChcglXbnUGt/giphy.gif",
      imageWidth: 400,
      imageHeight: 300,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      showCancelButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Oh no! :(",
          text: "Are you really really sure?",
          imageUrl:
            "https://media.giphy.com/media/Q6WPVzFU8LcBWWgQE1/giphy.gif",
          imageWidth: 400,
          imageHeight: 300,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          showCancelButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            noResponse();
          } else {
            notYetResponse();
          }
        });
      } else {
        notYetResponse();
      }
    });
  }
  // No valid answer (yes / no) available
  else if (answer === "reset") {
    load("reset");
    btnYes.style.display = "none";
    btnNo.style.display = "none";
    resultDiv.style.display = "none";
    // btnChangeAnswer.style.display = "none";
    startGif.style.display = "none";
    mainContainer.style.display = "none";
  } else {
    load("go");
    btnYes.style.display = "inline";
    btnNo.style.display = "inline";
    resultDiv.style.display = "none";
    // btnChangeAnswer.style.display = "none";
    startGif.style.display = "block";
    mainContainer.style.display = "block";
  }
};

function yesResponse() {
  Swal.fire({
    title: "Yay! :)",
    text: "I'm so glad that you said yes! See you on the 18th! Mwaah! :)",
    imageUrl: "https://media.giphy.com/media/lptOHczNAFD1G79Ofq/giphy.gif",
    imageWidth: 400,
    imageHeight: 300,
    confirmButtonText: "Yay!",
  }).then((result) => {
    load("yes");
    resultHeader.innerHTML = uiData.resultHeaderYes;
    resultImg.src = uiData.yesImgLink;
    resultDiv.style.display = "block";
    // btnChangeAnswer.style.display = "inline";
    btnYes.style.display = "none";
    btnNo.style.display = "none";
    startGif.style.display = "none";
  });
}

function noResponse() {
  Swal.fire({
    title: "Oh no! :(",
    text: "Well, I guess I'll just have to wait for the next opportunity. You're still the best! Mwaah! :)",
    imageUrl: "https://media.giphy.com/media/H7SaUQ5vEbocJqYZKO/giphy.gif",
    imageWidth: 400,
    imageHeight: 300,
    confirmButtonText: "Awwww!",
  }).then((result) => {
    load("no");
    resultHeader.innerHTML = uiData.resultHeaderNo;
    resultImg.src = uiData.noImgLink;
    resultDiv.style.display = "block";
    // btnChangeAnswer.style.display = "inline";
    btnYes.style.display = "none";
    btnNo.style.display = "none";
    startGif.style.display = "none";
  });
}

function notYetResponse() {
  Swal.fire({
    title: "Please think about it!",
    text: "I know it's a bit sudden but I really want to spend time with you. Please think about it! :)",
    imageUrl: "https://media.giphy.com/media/CF8Lh2sE1r0zFWVCWf/giphy.gif",
    imageWidth: 400,
    imageHeight: 300,
    confirmButtonText: "Okay!",
  }).then((result) => {
    setUI("reset");
  });
}

load("");

/* SET DATA
---------------------------------------------------- */
const setData = (answer) => {
  // // record a submission only if answer is yes or no
  if (answer === "yes" || answer === "no") {
    setUI(answer);
  }
};

/* BUTTONS CLICKED
---------------------------------------------------- */
const yesClicked = () => {
  setData("yes");
};

const noClicked = () => {
  setData("no");
};

// const changeAnswerClicked = () => {
//   setData("");
//   setUI();
// };
