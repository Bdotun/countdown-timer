const monthsInYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  let endDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  let year = endDate.getFullYear();
  let hours = endDate.getHours();
  let minutes = endDate.getMinutes();
  let day = endDate.getDay()
  let weekday = daysOfWeek[day];

  let month = endDate.getMonth();
  month = monthsInYear[month];
  
  let date = endDate.getDate();
  giveaway.textContent = `$1000 giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes}am`;
  
  let endTime = endDate.getTime();
  
  // calculates the remaining time until the end date and updates the HTML with the countdown values.
  function getCountdownTimer() {
    let today = new Date().getTime();
    let currentTime = endTime - today;
  
    // values in miliseconds
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60 * 1000;
  
    // calculate all values
    let days = currentTime / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((currentTime % oneDay) / oneHour);
    let minutes = Math.floor((currentTime % oneHour) / oneMinute);
    let seconds = Math.floor((currentTime % oneMinute) / 1000);
  
    // set values array
    const values = [days, hours, minutes, seconds];
  
    // Helper function to ensure that single-digit values are displayed with a leading zero
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (currentTime < 0) {
      clearInterval(countdown);
      const expiredMessage = document.querySelector('.expired-message');
      deadline.innerHTML = `<h4 class="expired expired-message">Sorry, this giveaway has expired! <br/> Please check back soon.</h4>`;
  
      expiredMessage.style.color = 'red';
      expiredMessage.style.fontWeight = 'bold';
      expiredMessage.textContent = expiredMessage.textContent.toUpperCase();
    }
  }
  
  // call the getCountdownTimer function every second (1000 milliseconds).
  let countdown = setInterval(getCountdownTimer, 1000);
  
  //set initial values
  getCountdownTimer();