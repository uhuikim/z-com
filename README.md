[next 공식문서](https://nextjs.org/docs)

## Parallel Routes
[공식문서](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- 한페이지에서 2개의 화면을 동시에 보여주고 싶을 때 사용한다.
- 동일한 폴더에 있어야한다.
- default.tsx : parallel route에 대한 기본값
  @modal 폴더에 page가 없으면 layout에서는 not-found를 보여준다. default.tsx파일을 만들어 준다.

## Intercepting Routes
[공식문서](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
- 서로 주소가 다른데 같이 뜰 수 있게 해준다. 
- 원래 폴더 라우팅의 page를 보여줘야하는데 인터셉팅해서 다른걸  보여준다.
- 새로고침 했을때는 원래 폴더에 있는 page.tsx가 실행이 된다.(브라우저 통해서 처음 들어왔을 때 , 브라우저 직접 접근)
- Link를 통해서 해당 페이지로 넘어갈때만 가로채기를 한다.
- 서버에서 redirect를 시키면 Intercepting이 먹히지 않는다.클라이언트쪽에서 페이지가 넘어가야 인터셉터가 제대로 먹힌다.

## 주소창에 나타나지 않는 폴더
- 그룹 폴더 / () : 공통적으로 레이아웃을 적용해 주고 싶을때
- parallel route/ @ : 한화면에 2개의 페이지를 동시에 보여주고 싶을 때
- private 폴더 / _ : 폴더 정리용 (Intercepting Routes 할때 동일한 코드가 반복이 된다. 이럴때 _component 폴더에 공통 컴포넌트로 만들어준다.)