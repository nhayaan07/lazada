function Slider() {
    let back = document.querySelector('.left-btn')
    let go   = document.querySelector('.right-btn')
    let items= document.querySelectorAll('.slides')
    let i = 0;
    go.addEventListener('click', () => {
        i++
        if (items.length -1 < i) {
            i = 0
        }
        items.forEach(item => {
            item.classList.remove('active')
        })
        items[i].classList.add('active') 
    }) 
    back.addEventListener('click', () => {
        i--;
        if (0 >= i) {
            i = 0
        }
        items.forEach(item => {
            item.classList.remove('active')
        })
        items[i].classList.add('active')
        console.log(i)
    })  
}
Slider()



function countdown(end_date) {
    // Get the current date and time.
    var now = new Date();
    var agami = new  Date("2023-09-25");
  
    // Calculate the time remaining until the end date.
    var time_remaining = agami - now;
  
    // Convert the time remaining to days, hours, and minutes.
    var days = Math.floor(time_remaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time_remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time_remaining % (1000 * 60 * 60)) / (1000 * 60));
  
    // Set the days, hours, and minutes in the HTML elements.
    document.getElementById("days").innerHTML = days + " Days";
    document.getElementById("hours").innerHTML = hours + " Hours";
    document.getElementById("minutes").innerHTML = minutes + " Minutes";
  
    // Update the countdown timer every second.
    setInterval(function() {
      time_remaining -= 1000;
      days = Math.floor(time_remaining / (1000 * 60 * 60 * 24));
      hours = Math.floor((time_remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((time_remaining % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById("days").innerHTML = days + " Days";
    document.getElementById("hours").innerHTML = hours + " Hours";
    document.getElementById("minutes").innerHTML = minutes + " Minutes";
    }, 1000);
  }