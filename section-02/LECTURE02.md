- `animation-iteration-count` 속성을 사용해 애니메이션 반복 횟수를 정하며, 값을 `infinite`로 설정하면 애니메이션이 계속 반복돼요.

- `transform`과 `opacity` 속성은 브라우저 레이어 위에서 처리되어 애니메이션 성능이 좋아요. 위치나 크기 변경은 레이아웃 재계산이 필요해 성능 저하를 유발할 수 있죠.

계산(calculate, recalculate) > Layout(레이어라는게 생성됨. transform, opacity) > 레이어 아닌거 (top, left, width, border, background...) > animation!

- 가급적 transform, opacity와 같은 레이어 작업을 사용하고 top, left, width, border, background..등은 계속 재계산해야하므로 쓸 수 있다면 transform 사용.
