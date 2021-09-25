function saturdayFun(play = 'roller-skate') {
    return `This Saturday, I want to ${play}!`
  }
  
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(string = '*') {
    const c = function (s = 'special') {
        return `You are ${string}${s}${string}!`
    }
    return c 
}