
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBO6xR5XzZ-V7Ba1LuLvXUsn3TFwCWX_wE",
    authDomain: "train-assignment-8b6f3.firebaseapp.com",
    databaseURL: "https://train-assignment-8b6f3.firebaseio.com",
    projectId: "train-assignment-8b6f3",
    storageBucket: "",
    messagingSenderId: "824263833271"
};
firebase.initializeApp(config);



$(document).ready(function () {

    var database = firebase.database()

    var trainTime = 100
    var trainDestination = "destination"
    var frequency = 100
    var nextArrival = 100
    var minutesLeft = 100

    // On submit button press
    $("#submit").on("click", function (e) {
        e.preventDefault()

        // Store form data into variables
        var formTrainName = $("#formTrainName").val()
        var formDestination = $("#formDestination").val()
        var formFirstTrainTime = $("#formFirstTrainTime").val()
        var formFrequency = $("#formFrequency").val()

        // Push data into database as object
        database.ref().push({
            trainName: formTrainName,
            destination: formDestination,
            firstTrainTime: formFirstTrainTime,
            frequency: formFrequency,
        })



    }) //END OF SUBMIT BUTTON PRESS

    // On Child Added to Database
    database.ref().on('child_added', function (snap) {

        // Store database object data into variables
        var newTrainName = snap.val().trainName
        var newDestination = snap.val().destination
        var newFirstTrainTime = snap.val().firstTrainTime
        var newFrequency = snap.val().frequency
        
        // Append new data into display table
        $("#infoTable").append("<tr></tr>").append("<td>" + newTrainName + "</td>", "<td>" + newDestination + "</td>", "<td>" + newFrequency + "</td>", "<td>test</td>", "<td>test</td>")




    }) //END OF ON CHILD ADDED EVENT

}) //END OF DOCUMENT READY