/* Firebase */
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDngXOeGcVPvj-51oopEZidB37MgwsZksk",
    authDomain: "samplecontactform-e2a45.firebaseapp.com",
    databaseURL: "https://samplecontactform-e2a45.firebaseio.com",
    projectId: "samplecontactform-e2a45",
    storageBucket: "samplecontactform-e2a45.appspot.com",
    messagingSenderId: "902762065078",
    appId: "1:902762065078:web:e6d283258d0da14e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* Get the elements */
const form = document.querySelector("#contactForm");
const alert = document.querySelector(".alert");

/* Reference message collection */
let messagesRef = firebase.database().ref('messages');

/* Submit the form */
function submitForm(e) {
    e.preventDefault();
    console.log(e);
    let name = getValue("name");
    let company = getValue("company");
    let email = getValue("email");
    let phone = getValue("phone");
    let message = getValue("message");

    saveMessage(name, company, email, phone, message);
    // console.log("Message sent!");
    alert.style.display = "block";
    setTimeout(function() {
        alert.style.display = "none";
    }, 3000);

    // Clear the form
    form.reset();
}

function getValue(id) {
    return document.querySelector(`#${id}`).value;
}

// Save messages to firebase
function saveMessage(name, company, email, phone, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}

/* Hook up the listener */
form.addEventListener('submit', submitForm);