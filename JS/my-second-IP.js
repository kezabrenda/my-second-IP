  /* */
  function givenMonth() {
    var bMonth = document.getElementById("month").value;
    if (bMonth == "0") {
    alert("Month must be selected");
    return false;
    }
    else if (bMonth <= 0 || bMonth > 12) {
    alert("Invalid Month");
    return false;
    }
    }
    
    function givenDay() {
    var day = document.getElementById("DoM").value;
    if (day == "") {
    alert("Day must be filled out");
    return false;
    }
    else if (day <= 0 || day > 31) {
    alert("Invalid Day");
    return false;
    }
    } 
    
    function allLetters(input){
    var characters = /[^a-z]/gi;
    input.value = input.value.replace(characters, "");
    }
    
    function digits(input){
    var digits = /[^0-9]/;
    input.value = input.value.replace(digits, "");
    }
 

  function validDay(){
    var thirtyOneMonths = [1, 3, 5, 7, 9, 10, 12];
    var monthNumber = parseInt(document.getElementById("birthMonth").value);
    var dayNumber = parseInt(document.getElementById("DoM").value);
    var yearNumber = parseInt(document.getElementById("yearDigits").value);
    var yearNumber = parseInt(document.getElementById("centuryDigits").value);
    var a = yearNumber % 100;
    var b = yearNumber % 400;
    var c = yearNumber % 4;
    var d = thirtyOneMonths.includes(monthNumber);
    if (monthNumber === 2 && dayNumber > 28 && a === 0 && b !== 0){
    alert("Invalid day: The entered year, February had 28 days.");
    return false;
    }
    else if (monthNumber === 2 && dayNumber > 28 && c !== 0) {
    alert("Invalid day: The entered year, February had 28 days.");
    return false;
    }
    else if (!d && dayNumber > 30) {
    alert("Invalid day: The selected month has 30 days");
    return false;
    }
    else if (dayNumber > 31 || dayNumber < 1) {
    alert("Invalid day: Months have a possible 1 to 31 days");
    return false;
    }
    }

  function names() {
    var year = document.getElementById("year").value;
    var centuryDig = parseInt(year.substring(0, 2));
    var yearDig = parseInt(year.substring(2, 4));
    var monthDig = parseInt(document.getElementById("month").value);
    var dateDig = parseInt(document.getElementById("DoM").value);
    var day = (((centuryDig / 4) - 2 * centuryDig - 1) + ((5 * yearDig / 4)) + ((26 * (monthDig + 1) / 10)) + dateDig) % 7;
    console.log((Math.floor(day)));

    var genders = document.getElementById("gender").value
    if (genders == "male") {
        var akanName;
        if (day == 1) {
            akanName = "Kwadwo";
        } else if (day == 2) {
            akanName = "Kwabena";
        } else if (day == 3) {
            akanName = "Kwaku";
        } else if (day == 4) {
            akanName = "Yaw";
        } else if (day == 5) {
            akanName = "Kofi";
        } else if (day == 6) {
            akanName = "Kwame";
        } else if (day == 7) {
            akanName = "Kwasi"
        }
    }

    else {
        if (day == 1) {
            akanName = "Adwoa";
        } else if (day == 2) {
            akanName = "Abenaa";
        } else if (day == 3) {
            akanName = "Akua";
        } else if (day == 4) {
            akanName = "Yaa";
        } else if (day == 5) {
            akanName = "Afua";
        } else if (day == 6) {
            akanName = "Ama";
        } else if (day == 7) {
            akanName = "Akosua";
        }
    }

    document.getElementById("display").innerHTML = "Your Akan Name is " + akanName;

}
