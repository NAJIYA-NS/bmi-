// // Reset

// function reset(){
//     result.innerHTML=''
//     category.innerHTML=''
//     weight.value=''
//     height.value=''
//     age.value=''

//     // Uncheck the radio buttons and remove the 'selected' class from labels
//     const genderLabels = document.querySelectorAll('.gender-button');
//     genderLabels.forEach(function (label) {
//         const radioInput = label.querySelector('input[type="radio"]');
//         radioInput.checked = false;
//         label.classList.remove('selected');
//     });
// }
// document.addEventListener('DOMContentLoaded', function () {
//     const genderLabels = document.querySelectorAll('.gender-button');

//     genderLabels.forEach(function (label) {
//         label.addEventListener('click', function () {
//             // Remove 'selected' class from all labels
//             genderLabels.forEach(function (l) {
//                 l.classList.remove('selected');
//             });

//             // Add 'selected' class to the clicked label
//             label.classList.add('selected');
//         });
//     });
// });

// calculate

// function calculate(){
//     result.value=eval(weight.value/(height.value**2))
//     result.innerHTML = result.value.toFixed(1)
//     if(result.value<18.5){
//         category.innerHTML = 'Underweight'
//     }
//     else if(result.value>=18.5 && result.value<=24.9){
//         category.innerHTML = 'Normal'
//     }
//     else if(result.value>=25.0 && result.value<=29.9){
//         category.innerHTML = 'Overweight'
//     }
//     else if(result.value>=30.0 && result.value<=34.9){
//         category.innerHTML = 'Obese'
//     }
//     else{
//         category.innerHTML = 'Extremely Obese'
//     }
// }

// Reset
const reset = () => {
    result.innerHTML = '';
    category.innerHTML = '';
    weight.value = '';
    height.value = '';
    age.value = '';

    // Uncheck the radio buttons and remove the 'selected' class from labels
    const genderLabels = document.querySelectorAll('.gender-button');
    genderLabels.forEach(label => {
        const radioInput = label.querySelector('input[type="radio"]');
        radioInput.checked = false;
        label.classList.remove('selected');
    });

    // Reset the line graph's vertical bar to the default position
    updateLineGraph(0);
};

document.addEventListener('DOMContentLoaded', () => {
    const genderLabels = document.querySelectorAll('.gender-button');

    genderLabels.forEach(label => {
        label.addEventListener('click', () => {
            // Remove 'selected' class from all labels
            genderLabels.forEach(l => l.classList.remove('selected'));

            // Add 'selected' class to the clicked label
            label.classList.add('selected');
        });
    });
});





// Function to update the line graph
const updateLineGraph = bmiCategory => {
    const lineSections = document.querySelector('.line-section');
    const verticalBar = document.getElementById('verticalBar');

    switch (bmiCategory) {
        case 'Underweight':
            lineSections.style.backgroundImage = 'linear-gradient(to right, #FFFF00 0%, #eee 100%)';
            break;
        case 'Normal':
            lineSections.style.backgroundImage = 'linear-gradient(to right, #FFFF00 0%, #00FF00 100%)';
            break;
        case 'Overweight':
            lineSections.style.backgroundImage = 'linear-gradient(to right, #FFFF00 0%, #FFA500 100%)';
            break;
        case 'Obese':
            lineSections.style.backgroundImage = 'linear-gradient(to right, #FFFF00 0%, #FF0000 100%)';
            break;
        default:
            lineSections.style.backgroundImage = 'linear-gradient(to right, #FFFF00 0%, #eee 100%)';
    }

    // Update the position of the vertical bar based on BMI category
    verticalBar.style.left = '0'; // Set it to the start initially
};

// Function to calculate BMI and update line graph
const calculate = () => {
    result.value = eval(weight.value / (height.value ** 2));
    result.innerHTML = result.value.toFixed(1);

    // Update the BMI category
    const bmi = result.value;
    const bmiCategory =
        bmi < 18.5 ? 'Underweight' :
        bmi <= 24.9 ? 'Normal' :
        bmi <= 29.9 ? 'Overweight' :
        bmi <= 34.9 ? 'Obese' :
        'Extremely Obese';

        if(result.value<18.5){
                    category.innerHTML = '<b style=color:yellow>Time to grab a bite!</b><br><p style=font-size:smaller>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>'
                }
                else if(result.value>=18.5 && result.value<=24.9){
                    category.innerHTML = '<b style=color:green>Great shape</b><br><p style=font-size:smaller>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>'
                }
                else if(result.value>=25.0 && result.value<=29.9){
                    category.innerHTML = '<b style=color:orange>Time to run!</b><br><p style=font-size:smaller>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>'
                }
                else if(result.value>=30.0 && result.value<=34.9){
                    category.innerHTML = '<b style=color:red>Obese!</b><br><p style=font-size:smaller>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>'
                }
                else{
                    category.innerHTML = '<b style=color:darkred>Extremely Obese!</b><br><p style=font-size:smaller>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>'
                }
    // Update the line graph based on the calculated BMI category
    updateLineGraph(bmiCategory);

    // Update the BMI category display
    category.innerHTML = bmiCategory;
};
