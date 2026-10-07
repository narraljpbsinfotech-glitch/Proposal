
let yesScale = 1;
function resizeYes(){
  const yes = document.querySelector('#YesBtn');
  yesScale +=0.3
  yes.style.transform = `scale(${yesScale})`;
  yes.style.transition = 'transform 0.3 ease';
}

let selectedTheme = "";

function selectTheme(button){
  selectedTheme = button.value;

  const allThemes = document.querySelectorAll('.themes');
  allThemes.forEach(btn => btn.style.backgroundColor = '');
  button.style.backgroundColor = 'lightpink';
}



function gotoNext(currentStepId, nextStepId){
  
  if (currentStepId === 'step2'){
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    if(date === "" || time === ""){
      alert('You must completed Form');
      return;
    }
  }

  if (currentStepId === 'step3'){
  
    if(selectedTheme === "" ){
      alert('Please select a theme or type in Others!');
      return;
    }
  }

  if (currentStepId === 'step4'){
    const InputBtn = document.querySelector('#step4 input').value;
    
    if(InputBtn.trim() === "" ){
      alert('Please select a theme or type in Others!');
      return;
    }
  }

  document.querySelector('#' + currentStepId).style.display = 'none';
  document.querySelector('#' +  nextStepId).style.display = 'block';
}


const addBtn = document.querySelector('#addBtn');
const container = document.querySelector('#input-container');

addBtn.addEventListener('click', function(){
  const row = document.createElement('div');
  row.className = 'flex gap-2 items-center text-left';

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.placeholder = 'e.g. Milk Tea, Ramen...';
  newInput.className = 'px-4 py-2.5 rounded-xl bg-rose-50/50 border border-rose-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-400';

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'px-4 py-2.5 bg-rose-100 text-rose-600 font-semibold rounded-xl hover:bg-rose-200 transition-all text-sm';


deleteBtn.addEventListener('click', function(){
  row.remove();
});
row.appendChild(newInput);
row.appendChild(deleteBtn);
container.appendChild(row);
})


function submitForm(){
  let date = document.querySelector('#date').value;
  let theme = selectedTheme;
  let additionalInputs = Array.from(document.querySelectorAll('#input-container input')).map(input => input.value);

  let timeValue = document.querySelector('#time').value;
  let formattedTime = '';

  if (timeValue) {
  let [hours, minutes] = timeValue.split(':');
  hours = parseInt(hours);

  let amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour format

  formattedTime = `${hours}:${minutes} ${amPm}`;
}

  document.querySelector('#outputDate').textContent = date;
  document.querySelector('#outputTime').textContent = formattedTime;
  document.querySelector('#outputTheme').textContent = theme;
  document.querySelector('#outputAdditional').textContent = additionalInputs.join(', ');
  document.querySelector('#output').style.display = 'hidden';
}

// once pinindut yung submit malalagay sa email or notif
// yung date neeb idebug kasi daming number walang limit
// tska dapat text lang yung input sa food and drink
// yung yes hindi responsive