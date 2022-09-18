
let ratedval = document.querySelector('.ratedval');

const timeRangeWrapper = document.querySelector('#text');
const timeOptions = timeRangeWrapper.querySelectorAll('.rate');
    timeOptions.forEach((item, i) => {
        const domIndex = item.getAttribute('data-item');
        item.addEventListener('click', () => {
            ratedval.innerText = item.innerText;
            timeOptions.forEach(option => {
              option.classList.remove('pressed');
            })
            if (i == domIndex) {
                item.classList.add('pressed');
            }
        });
    });

function myFunction() {
    var box = document.querySelector(".box"); 
    if (!ratedval.innerText){
        alert("please make a selection");
    } else if (box.style.display === "none") {
          box.style.display = "block";
    }else {
          box.style.display = "none";
        }
      }


