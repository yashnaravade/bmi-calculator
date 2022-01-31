function calculateBMI() {

  var weight = parseFloat(document.getElementById("txt-weight").value);
  var heightCm = parseFloat(document.getElementById("txt-height").value);
  var heightM = heightCm / 100;

  var bmi = (weight / (heightM * heightM)).toFixed(2);

  document.getElementById("txt-bmi").innerHTML ="BMI: "+ bmi;
} 