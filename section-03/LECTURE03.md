## animate method

![animate-method](/assets/animate-method.png)

https://studiomeal.com/archives/1465#waapi

- WAAPI는 GPU를 활용해 메인 스레드를 막지 않아 CSS 애니메이션 성능과 JS 제어의 장점을 합칩니다.

- HTML 요소 객체에서 `animate()` 메서드를 호출하여 키프레임과 옵션을 전달해 애니메이션을 적용해요.

- `animate()` 메서드는 애니메이션 객체를 반환해요. 이 객체로 재생, 일시정지, 속도 조절 등 다양한 제어가 가능하죠.

- 애니메이션 객체의 `finished` 속성은 Promise를 반환해요. Web Animation API에서 애니메이션이 끝나는 시점을 정확히 감지하고 특정 JavaScript 코드를 실행하려면 `.then()`을 사용하여 완료 시점을 정확히 감지하고 코드를 실행할 수 있죠.
