/////////// VARIABLES ///////////////////
const characterPicker = $(".pickCharacter")
const enemyCharacterPicker = $(".pickEnemyCharacter")
const characterOne = $("#gokumui")
const characterTWO = $("#vegeta")
const characterThree = $("#gotenks")
let chosenFighter = $("#goodFighter")
const chosenEnemy = $("#badFighter")
let goodGuysDiv = $("#goodGuys")







////////////// FUNCTIONS ///////////////

$("#attackBtn").on("click", function () {
    alert("attacked!")
})
$("#gokumui").on("click", function () {
    $("#goodFighter").append(`<img src="./img/gokumui.jpg" alt="" class="pickCharacter" id="gokumui"> <span>health</span>`)
    $("#gokumui").css('display', 'none');
    $("#vegeta").css('display', 'none');
    $("#gotenks").css('display', 'none');
    $("#deleteSpan").text(" ")
    $("#deleteSpan2").text(" ")
    $("#deleteSpan3").text(" ")
})
$("#vegeta").on("click", function () {
    $("#goodFighter").append(`<img src="./img/vegeta.jpg" alt="" class="pickCharacter" id="vegeta"> <span>health</span>`)
    $("#gokumui").css('display', 'none');
    $("#vegeta").css('display', 'none');
    $("#gotenks").css('display', 'none');
    $("#deleteSpan").text(" ")
    $("#deleteSpan2").text(" ")
    $("#deleteSpan3").text(" ")

})
$("#gotenks").on("click", function () {
    $("#goodFighter").append(`<img src="./img/gotenks.jpg" alt="" class="pickCharacter" id="gotenks"> <span>health</span>`)
    $("#gokumui").css('display', 'none');
    $("#vegeta").css('display', 'none');
    $("#gotenks").css('display', 'none');
    $("#deleteSpan").text(" ")
    $("#deleteSpan2").text(" ")
    $("#deleteSpan3").text(" ")

})
$("#gokublack").on("click", function () {
    $("#gokublack").css('display', 'none');
    $("#broly").css('display', 'none');
    $("#frieza").css('display', 'none');
    $("#badFighter").append(`<img src="./img/gokublack.jpg" alt="" class="pickEnemyCharacter" id="gokublack"> <span>health</span>`)
    $("#deleteSpan4").text(" ")
    $("#deleteSpan5").text(" ")
    $("#deleteSpan6").text(" ")
})
$("#broly").on("click", function () {
    $("#gokublack").css('display', 'none');
    $("#broly").css('display', 'none');
    $("#frieza").css('display', 'none');
    $("#badFighter").append(`<img src="./img/broly.jpg" alt="" class="pickEnemyCharacter" id="broly"> <span>health</span>`)
    $("#deleteSpan4").text(" ")
    $("#deleteSpan5").text(" ")
    $("#deleteSpan6").text(" ")
})
$("#frieza").on("click", function () {
    $("#gokublack").css('display', 'none');
    $("#broly").css('display', 'none');
    $("#frieza").css('display', 'none');
    $("#badFighter").append(`<img src="./img/frieza.jpg" alt="" class="pickEnemyCharacter" id="frieza"> <span>health</span>`)
    $("#deleteSpan4").text(" ")
    $("#deleteSpan5").text(" ")
    $("#deleteSpan6").text(" ")
})






////////////// FUNCTION CALLS ///////////////