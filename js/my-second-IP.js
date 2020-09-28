/* $(document).ready(function(){
    $("#myBirthDate").mask("99/99/9999");
});


function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    if(myBirthday === ""){
        document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Didn't Submit a Valid Date!</div>";
        $('#message').addClass("animated shake");
    }
    else {
        for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                else {
                    document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                    $('#message span:first-child').addClass("animated fadeInDown");
                    $('#message span:last-child').addClass("animated fadeInUp");
                }
                break;
            }    
            else {
                document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
                $('#message').addClass("animated shake");
            }
        }
    }
}

function overall() {

function givenGender() {
    var gender = document.getElementById("gender").value;
    if (gender == "") {
        alert("please select gender");
        return false;
    }
}

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
}
*/
function overall() {

var currentDate = new Date();
var currentYear = currentDate.getFullYear();


function selectGender() {
  var gender = document.getElementById("gender").value;
  if (gender == "1") {
    alert("Gender must be selected");
    return false;
  }
}

function givenCentury() {
  var century = document.getElementById("century").value;
  if (century == "") {
    alert("Century must be filled out");
    return false;
  }
}

function givenYear() {
  var year = document.getElementById("year").value;
  if (year == "") {
    alert("Year must be filled out");
    return false;
  }
}

function givenMonth() {
  var month = document.getElementById("month").value;
  if (month == "0") {
    alert("Month must be selected");
    return false;
  }
}

function givenDay() {
  var day = document.getElementById("date").value;
  if (day == "") {
    alert("Day must be filled out");
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


function validYear(){
    var year = document.getElementById("year").value;
    if (year < 1899 || year > currentYear) {
      alert("Invalid Year");
      return false;
    }
  }

function validDay(){
  var thirtyOneMonths = [1, 3, 5, 7, 9, 10, 12];
  var monthNumber = parseInt(document.getElementById("monthBorn").value);
  var dayNumber = parseInt(document.getElementById("dayBorn").value);
  var yearNumber = parseInt(document.getElementById("yearBorn").value);
  var yearNumber = parseInt(document.getElementById("centuryBorn").value);
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

function getName(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var cc = parseInt(document.getElementById("centuryBorn").value.slice(0, 2));
  var yy = parseInt(document.getElementById("yearBorn").value.slice(2, 4));
  var dd = parseInt(document.getElementById("dayBorn").value);
  var mm = parseInt(document.getElementById("monthBorn").value);
  var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
  var akanDay = days[day.toFixed()];
  var gender = parseInt(document.getElementById("gender").value);
  if (gender == 2) {
    if (akanDay === 'Sunday') {
      document.getElementById("output").value = "Born on Sunday: Your Akan Name would be: " + akanMale[0];
      return true;
    }
    else if (akanDay === 'Monday') {
      document.getElementById("output").value = "Born on Monday: Your Akan Name would be: " + akanMale[1];
      return true;
    }
    else if (akanDay === 'Tuesday') {
      document.getElementById("output").value = "Born on Tuesday: Your Akan Name would be: " + akanMale[2];
      return true;
    }
    else if (akanDay === 'Wednesday') {
      document.getElementById("output").value = "Born on Wednesday: Your Akan Name would be: " + akanMale[3];
      return true;
    }
    else if (akanDay === 'Thursday') {
      document.getElementById("output").value = "Born on Thursday: Your Akan Name would be: " + akanMale[4];
      return true;
    }
    else if (akanDay === 'Friday') {
      document.getElementById("output").value = "Born on Friday: Your Akan Name would be: " + akanMale[5];
      return true;
    }
    else {
      document.getElementById("output").value = "Born on Saturday: Your Akan Name would be: " + akanMale[6];
      return true;
    }
  }
    if (gender == 3) {
      if (akanDay === 'Sunday') {
        document.getElementById("output").value = "Born on Sunday: Your Akan Name would be: " + akanFemale[0];
        return true;
      }
      else if (akanDay === 'Monday') {
        document.getElementById("output").value = "Born on Monday: Your Akan Name would be: " + akanFemale[1];
        return true;
      }
      else if (akanDay === 'Tuesday') {
        document.getElementById("output").value = "Born on Tuesday: Your Akan Name would be: " + akanFemale[2];
        return true;
      }
      else if (akanDay === 'Wednesday') {
        document.getElementById("output").value = "Born on Wednesday: Your Akan Name would be: " + akanFemale[3];
        return true;
      }
      else if (akanDay === 'Thursday') {
        document.getElementById("output").value = "Born on Thursday: Your Akan Name would be: " + akanFemale[4];
        return true;
      }
      else if (akanDay === 'Friday') {
        document.getElementById("output").value = "Born on Friday: Your Akan Name would be: " + akanFemale[5];
        return true;
      }
      else {
        document.getElementById("output").value = "Born on Saturday: Your Akan Name would be: " + akanFemale[6];
        return true;
      }
    }
}

function clearForm(){
  document.getElementById("table").reset();
}

function clearResult(){
  document.getElementById("answer").reset();
}
}