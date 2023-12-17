function solution(phone_number) {
      return phone_number.replaceAll(/\d(?=\d{4})/g, '*');
}