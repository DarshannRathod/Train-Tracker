
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



    // append new table row with table data
    $("#infoTable").append("<tr></tr>").append("<td>test</td>", "<td>test</td>", "<td>test</td>", "<td>test</td>", "<td>test</td>")
    $("#infoTable").append("<tr></tr>").append("<td>test</td>", "<td>test</td>", "<td>test</td>", "<td>test</td>", "<td>test</td>")

    // On submit button press
    $("#submit").on("click", function () {
        var formTrainName = $("#formTrainName").val()
        var formDestination = $("#formDestination").val()
        var formFirstTrainTime = $("#formFirstTrainTime").val()
        var formFrequency = $("#formFrequency").val()


        database.ref().push({
            trainName: formTrainName,
            destination: formDestination,
            firstTrainTime: formFirstTrainTime,
            frequency: formFrequency,
        })



    }) //END OF SUBMIT BUTTON PRESS

    // On Child Added to Database
    database.ref().on('child_added', function (snap) {
        var newTrainName = snap.val().trainName
        var newDestination = snap.val().destination
        var newFirstTrainTime = snap.val().firstTrainTime
        var newFrequency = snap.val().frequency

        // var newRole = snap.val().role
        console.log(newTrainName, newFrequency)
        
        $("#infoTable").append("<tr></tr>").append("<td>" + newTrainName + "</td>", "<td>" + newDestination + "</td>", "<td>" + newFrequency + "</td>", "<td>test</td>", "<td>test</td>")




    })

}) //END OF DOCUMENT READY