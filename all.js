const i_day = document.querySelector("#day");
const i_month = document.querySelector("#month");
const i_year = document.querySelector("#year");
const submit = document.querySelector(".submit_bg");

const day_err = document.querySelector(".day_err");
const month_err = document.querySelector(".month_err");
const year_err = document.querySelector(".year_err");

const labelForDay = document.querySelector('label[for="day"]');
const labelForMonth = document.querySelector('label[for="month"]');
const labelForYear = document.querySelector('label[for="year"]');

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (i_day.value === "") {
    day_err.textContent = "The field is required.";
    labelForDay.style.color = "hsl(0, 100%, 67%)";
    i_day.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (!isNaN(i_day.value)) {
    if (i_day.value > 31 || i_day.value < 1) {
      day_err.textContent = "Must be a vaild day.";
      labelForDay.style.color = "hsl(0, 100%, 67%)";
      i_day.style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
      day_err.textContent = "";
      labelForDay.style.color = "";
      i_day.style.border = "";
    }
  } else {
    day_err.textContent = "Must be a vaild day.";
    labelForDay.style.color = "hsl(0, 100%, 67%)";
    i_day.style.border = "1px solid hsl(0, 100%, 67%)";
  }

  if (i_month.value === "") {
    month_err.textContent = "The field is required.";
    labelForMonth.style.color = "hsl(0, 100%, 67%)";
    i_month.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (!isNaN(i_month.value)) {
    if (i_month.value > 12 || i_month.value < 1) {
      month_err.textContent = "Must be a vaild  month.";
      labelForMonth.style.color = "hsl(0, 100%, 67%)";
      i_month.style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
      month_err.textContent = "";
      labelForMonth.style.color = "";
      i_month.style.border = "";
    }
  } else {
    month_err.textContent = "Must be a vaild month.";
    labelForMonth.style.color = "hsl(0, 100%, 67%)";
    i_month.style.border = "1px solid hsl(0, 100%, 67%)";
  }

  if (i_year.value === "") {
    year_err.textContent = "The field is required.";
    labelForYear.style.color = "hsl(0, 100%, 67%)";
    i_year.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (!isNaN(i_year.value)) {
    if (i_year.value > 2024) {
      year_err.textContent = "Must be in the past.";
    } else if (i_year.value <= 2024 && i_year.value > 0) {
      year_err.textContent = "";
      labelForYear.style.color = "";
      i_year.style.border = "";
    }
  } else {
    year_err.textContent = "Must be a vaild year.";
    labelForYear.style.color = "hsl(0, 100%, 67%)";
    i_year.style.border = "1px solid hsl(0, 100%, 67%)";
  }

  // Get current date
  let currentDate = new Date();

  let inputYear = parseInt(i_year.value);
  let inputMonth = parseInt(i_month.value);
  let inputDay = parseInt(i_day.value);
  let dateOfBirth = new Date(inputYear, inputMonth - 1, inputDay);
  let years = currentDate.getFullYear() - dateOfBirth.getFullYear();
  let months = currentDate.getMonth() - dateOfBirth.getMonth();
  let days = currentDate.getDate() - dateOfBirth.getDate();

  // If the birth date month is later than today's date month, adjust the years and months
  if (months < 0 || (months == 0 && days < 0)) {
    years--;
    months += 12;
  }

  // If the birth date day is later than today's date day, adjust the days and months
  if (days < 0) {
    const daysInLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    days += daysInLastMonth;
    months--;
  }

  const outputYear = document.querySelector(".year span");
  const outputMonth = document.querySelector(".month span");
  const outputDay = document.querySelector(".day span");

  if (!isNaN(days) && !isNaN(months) && !isNaN(years)) {
    outputYear.innerHTML = years;
    outputMonth.innerHTML = months;
    outputDay.innerHTML = days;
  }
});
