function solution(id_pw, db) {
  let result = "";
  for (let i = 0; i < db.length; i++) {
    const [id, password] = db[i];
    console.log(id);
    if (id === id_pw[0] && password === id_pw[1]) {
      result = "login";
    } else if (id === id_pw[0] && password !== id_pw[1]) {
      result = "wrong pw";
    } else if (id !== id_pw[0] && password !== id_pw[1]) {
      result = "fail";
    }
  }
  return result;
}