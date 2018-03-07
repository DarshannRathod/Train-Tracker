
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

// Document Ready Beginning
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

        // Console log train database all values
        // console.log("Train Name: " + newTrainName)
        // console.log("Destination: " + newDestination)
        // console.log("First Arrival: " + newFirstTrainTime)
        // console.log("Frequency: " + newFrequency)

        // Train Time logic
        var currentTime = moment()
        var firstTimeConverted = moment(newFirstTrainTime, "hh:mm").subtract(1, "years")
        var timeDiff = moment().diff(moment(firstTimeConverted), "minutes")
        var timeRemainder = timeDiff % newFrequency
        var minUntilNext = newFrequency - timeRemainder
        var nextTrainTime = moment().add(minUntilNext, "minutes").format("hh:mm")

        // Console log time logic
        // console.log(currentTime.format("hh:mm"))
        // console.log(firstTimeConverted)
        // console.log(timeDiff)
        // console.log(timeRemainder)
        // console.log(minUntilNext)
        // console.log(nextTrainTime)

        // Append new data into display table
        $("#infoTable").append("<tr></tr>").append(
            "<td>" + newTrainName + "</td>",
            "<td>" + newDestination + "</td>",
            "<td>" + newFrequency + "</td>",
            "<td>" + nextTrainTime + "</td>",
            "<td>" + minUntilNext + "</td>")

    }) //END OF ON CHILD ADDED EVENT

}) //END OF DOCUMENT READY