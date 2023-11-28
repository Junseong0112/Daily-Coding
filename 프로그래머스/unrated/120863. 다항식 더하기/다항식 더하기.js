function solution(polynomial) {
    const newArr = polynomial.split(' + ')
  const xAnswer = newArr.filter((v) => v.includes('x')).map((v) => v.replace('x', '') || '1').reduce((acc, cur) => acc + Number(cur), 0)
  const numAnswer = newArr.filter((v) => !v.includes('x')).reduce((acc, cur) => acc + Number(cur), 0)
  let answer = []
  if(xAnswer){
    if(xAnswer === 1){
      answer.push('x')
    }else{
      answer.push(`${xAnswer}x`)
    }
  }
  if(numAnswer){
    answer.push(numAnswer)
  }
  return answer.join(' + ')
}