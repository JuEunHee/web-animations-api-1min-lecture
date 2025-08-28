# web-animations-api-1min-lecture


- CSS 애니메이션은 메인 스레드가 아닌 별도의 Compositor Thread에서 GPU를 활용하여 처리되어, 메인 스레드 부하를 줄이고 부드러운 애니메이션 구현에 장점을 가질 수 있습니다.

- 반면 CSS 애니메이션은 선언적 제어에 한계가 있지만, JS 애니메이션은 코드 상에서 각 스타일 값의 변화 단계를 자유롭고 세밀하게 조작할 수 있어 복잡한 인터랙션에 유리합니다.

- JS 애니메이션은 CPU가 관리하는 메인 스레드에서 실행되므로, 다른 작업들과 부하가 겹칠 때 애니메이션이 끊기거나 버벅이는 현상이 발생할 수 있다는 단점이 있습니다.

- Web Animation API는 CSS 애니메이션의 성능적 장점을 가져오면서, JavaScript를 통해 세밀한 제어 및 다양한 기능을 추가하여 두 방식의 이점을 결합한 새로운 웹 표준 API입니다.

### 참조 사이트
- [cdnjs.com/](https://cdnjs.com/libraries/web-animations)
