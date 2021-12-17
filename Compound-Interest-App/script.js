const principalBox  = document.querySelector("#principal")
const rateBox = document.querySelector("#rate")
const numOfTimesBox = document.querySelector("#numOfTimes")
const yearsBox = document.querySelector("#years")
const profitSpan = document.querySelector("#profit")
const totalSpan = document.querySelector("#total")


function computeProfit()
{
  const principal = principalBox.value 
  const rate = rateBox.value
  const numOfTimes = numOfTimesBox.value
  const years = yearsBox.value
  const profit = principal*(1+ 
  (rate/numOfTimes))**(numOfTimes*years) - principal
  const total = principal*(1+ 
  (rate/numOfTimes))**(numOfTimes*years)
  totalSpan.textContent = total.toFixed(2)
  profitSpan.textContent = profit.toFixed(2)
  
}

principalBox.addEventListener('input',computeProfit)

rateBox.addEventListener('input',computeProfit)

numOfTimesBox.addEventListener('input',computeProfit)

yearsBox.addEventListener('input',computeProfit)

