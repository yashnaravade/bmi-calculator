function calculateBMI() {

  var weight = parseFloat(document.getElementById("txt-weight").value);
  var heightCm = parseFloat(document.getElementById("txt-height").value);
  var heightM = heightCm / 100;

  var bmi = (weight / (heightM * heightM)).toFixed(2);

  document.getElementById("txt-bmi").innerHTML ="BMI: "+ bmi;

  if(bmi < 18.5) {
    document.getElementById("txt-remark").innerHTML = "Underweight";
  }
  else if(bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("txt-remark").innerHTML = "Normal";
  }
  else if(bmi >= 25 && bmi <= 29.9) {
    document.getElementById("txt-remark").innerHTML = "Overweight";
  }
  else if(bmi >= 30) {
    document.getElementById("txt-remark").innerHTML = "Obese";
  }

} 