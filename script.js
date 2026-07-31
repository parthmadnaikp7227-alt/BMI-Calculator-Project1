function calculateBMI() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("result").innerHTML =
            "Please enter weight and height.";
        return;
    }

    let bmi = weight / (height * height);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal Weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML =
        "BMI: " + bmi.toFixed(2) + "<br>" + category;
}