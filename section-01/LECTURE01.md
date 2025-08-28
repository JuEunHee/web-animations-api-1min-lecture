![transition image](/assets/image.png)

- transition-property를 지정하지 않으면 기본값인 'all'이 적용되어, 변화하는 모든 속성이 전환됩니다. 특정 속성만 원하면 속성 이름을 명시해야 하죠.

- transition-timing-function : 전환 속도 변화를 제어하는 속성이에요. 애니메이션 시작부터 끝까지 속도가 어떻게 달라지는지 정의하죠. Ease, Linear 등의 키워드로 설정할 수 있습니다.

- transition-end : 전환 애니메이션이 최종 상태에 도달하고 완료되었을 때 발생하는 이벤트입니다. 애니메이션 완료 후 상태 변경이나 다른 애니메이션 시작 등에 유용하죠.

- `<object>` 태그는 SVG를 외부 파일로 불러오면서도 내부 요소에 JavaScript로 접근할 수 있게 해줘서 `<img>`보다 상호작용에 유리합니다.

- `transform-origin`은 변형(transform)의 기준점을 설정합니다. SVG는 기본 기준점이 좌상단이므로, 원하는 위치(예: 원의 중앙)를 기준으로 회전시키려면 조정이 필요해요.


* 02 폴더의 키홀더 svg같은건 애니메이션을 고려해서
여유 공간까지 같이 고려해서 여백을 두고 저장해야함.

```css
.key-blade {
  transform: rotate(-180deg);

  <!--
    transform-origin:
      transform의 중앙값을 정해주는것.
      svg라 0, 0이 기본 기준임.
      circle의 중심이 211.89, 213.45이므로 이걸로 지정해주자.
  -->
  transform-origin: 211.89px 213.45px;
  transition: 0.3s;
}
```
