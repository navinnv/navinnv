(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Cloud Config
const firebaseConfig =
{
    apiKey: "AIzaSyBXAAj5A7hZA4n4JgjlOkTyRPJufjiDafw",
    authDomain: "myresume-naveen.firebaseapp.com",
    databaseURL: "https://myresume-naveen.firebaseio.com",
    projectId: "myresume-naveen",
    storageBucket: "myresume-naveen.appspot.com",
    messagingSenderId: "1027603230210",
    appId: "1:1027603230210:web:909e7b69616486451bc11b",
    measurementId: "G-V67V2P1CRD"
};
firebase.initializeApp(firebaseConfig);

var testimonalCount;
const dataRef = firebase.database().ref();
const videoRef = firebase.storage().ref();