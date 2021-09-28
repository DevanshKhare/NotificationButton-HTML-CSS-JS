const box = document.querySelectorAll('.notification_box p');
const number = document.querySelectorAll('.number');

number.forEach((d)=>{
    d.innerHTML =box.length;
});