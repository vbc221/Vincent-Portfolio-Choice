//changes icon blue to what is selected

let icon = document.querySelectorAll(".fas");

let home=document.querySelector('.fa-home');
for (let i = 0; i <icon.length; i++) {
  icon[i].addEventListener("click", function (event) {
    //makes sure it stop refreshing
    //overrides last blue color
    icon[i].className= icon[i].className.replace('active', '');
    this.add('active');
  });
}


