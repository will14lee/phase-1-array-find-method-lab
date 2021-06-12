
function superbowlWin(array){
  const wins=array.find(element=>element.result=== "W")
  const losses=array.find(element=>element.result=== "")
  if (wins){
    return wins.year
  }
  else{
    return wins
  }

}
superbowlWin(record)
