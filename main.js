
class Year {

  constructor(year) {
    this.year = year
  }

  printYear(year) {
    return this.year * 1
  }

  century(year) {
    let centenial = Math.floor(this.year/100)*100
    let century

    if (centenial === 0) {
      century = "1st Century"
    } else if (centenial === 100) {
      century = "2nd Century"
    } else if (centenial === 200) {
      century = "3rd Century"
    } else if (centenial === 300) {
      century = "4th Century"
    } else if (centenial === 400) {
      century = "5th Century"
    } else if (centenial === 500) {
      century = "6th Century"
    } else if (centenial === 600) {
      century = "7th Century"
    } else if (centenial === 700) {
      century = "8th Century"
    } else if (centenial === 800) {
      century = "9th Century"
    } else if (centenial === 900) {
      century = "10th Century"
    } else if (centenial === 1000) {
      century = "11th Century"
    } else if (centenial === 1100) {
      century = "12th Century"
    } else if (centenial === 1200) {
      century = "13th Century"
    } else if (centenial === 1300) {
      century = "14th Century"
    } else if (centenial === 1400) {
      century = "15th Century"
    } else if (centenial === 1500) {
      century = "16th Century"
    } else if (centenial === 1600) {
      century = "17th Century"
    } else if (centenial === 1700) {
      century = "18th Century"
    } else if (centenial === 1800) {
      century = "19th Century"
    } else if (centenial === 1900) {
      century = "20th Century"
    } else if (centenial === 2000) {
      century = "21st Century"
    } else if (centenial === 2100) {
      century = "22nd Century"
    } else if (centenial === 2200) {
      century = "23rd Century"
    } else if (centenial === 2300) {
      century = "24th Century"
    } else if (centenial === 2400) {
      century = "25th Century"
    } else if (centenial === 2500) {
      century = "26th Century"
    } else if (centenial === 2600) {
      century = "27th Century"
    } else if (centenial === 2700) {
      century = "28th Century"
    } else if (centenial === 2800) {
      century = "29th Century"
    } else if (centenial === 2900) {
      century = "30th Century"
    } else if (centenial === 3000) {
      century = "31st Century"
    }
    return century
  }


  isLeapYear(year) {
    return ((this.year % 4 == 0) && (this.year % 100 != 0)) || (this.year % 400 == 0);
  }
}

let currentYear = new Year(2019)

let leapYearConfirmation

if (currentYear.isLeapYear() === true) {
  leapYearConfirmation = currentYear.printYear() + " is a leap year."
} else {
  leapYearConfirmation = currentYear.printYear() + " is a not leap year."
}

let leapYearArray = []

let lastCentenial = (Math.floor(currentYear.printYear()/100)*100)

for (let i = lastCentenial; i < lastCentenial + 100; i++) {

  confirmation = ((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0);

      if (confirmation === true) {
        leapYearArray.push(i)
      }
    }

console.log(`The current year is ${currentYear.printYear()}`)
console.log(leapYearConfirmation)
console.log(`${currentYear.printYear()} is in the ${currentYear.century()}.`)
console.log(`The leap years in the ${currentYear.century()} are as follows: `)
console.log(leapYearArray)



console.log(" ")
