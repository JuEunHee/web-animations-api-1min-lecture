export default class Star {
  constructor(number) {
    // instance 변수로 this.element 사용하여 04.html에서 접근할 수 있게함
    this.element = document.createElement('div');
    this.element.classList.add('star');
    this.element.innerHTML = number;

    document.body.append(this.element)
  }
}
