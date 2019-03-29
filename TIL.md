# Expo AppLoading component

## 기본 사항

- `import { AppLoading } from 'expo';

  <AppLoading /> 컴포넌트는 세 개의 prop을 가질 수 있음
  `<AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError} />`

1. handleError
2. handleLoaded
3. loadAssets: loadAssets가 진행되고 나서 결과로 handleError 또는 handleLoaded로 분기된다.

## DOC

- [Assets](https://docs.expo.io/versions/v32.0.0/sdk/asset/): `Assets.loadAsync` 부분
- [AppLoading](https://docs.expo.io/versions/v32.0.0/sdk/app-loading/): `<AppLoading />` 부분

# export default

- [x] https://enyobook.wordpress.com/2016/08/17/export-default%EC%97%90-%EB%8C%80%ED%95%B4/ 정리

## named exports

하나의 module 파일이라도 이 중 일부만 필요로 하는 경우가 있을 수 있다. 예를 들어서 하나의 함수 혹은 하나의 클래스만 사용하고 싶은 경우가 이에 해당한다. 이런 경우 사용하는 것이 `named export`이다.

```
// lib.js
export const sqrt = Math.sqrt;
export square = (x) => x * x;
export diag = (x, y) => sqrt(square(x) + square(y));

// main.js
import { square, diag } from "lib";
```

## default exports

변수 하나만 export하는 방법은 빈번하게 사용되는데, front-end 개발자의 경우는 constructor나 class를 export하는 경우가 많다. 이런 겨우 하나의 module이 하나의 export만 갖는 경우가 되는데 이런 때 사용할 수 있는 것이 `default export`이다.

```
// myFunc.js
export default function () { ... };

// main.js
import myFunc from 'myFunc';
myFunc();
```

```
// MyClass.js
export default class { ... };

//main2.js
import Myclass from 'MyClass';
let inst = new MyClass();
```

## \_ 표기

ES6에서는 `_`가 `default exports`를 의미하고, `forEach`, `each`는 `named exports`를 의미한다. 따라서 다음과 같이 `default exports`와 `named exports`를 동시에 얻는 방법도 가능하다.

```
// underscore.js
export default (obj) => { ... };
export function each (obj, iterator, context) { ... }
export { each as forEach };

// main.js
import _, { each } from "underscore";
```

# 전개 연산자 ...

`...`는 ES6에서 추가된 전개 연산자이다. 전개 연산자는 반복 가능한 (이터러블한) 객체를 반환하는 표현식 앞에 표기하고, 이를 통해 반복 가능한 객체를 배열 리터럴 또는 함수의 인수 목록으로 펼칠 수 있다.

```
[...'ABC'] // -> ['A', 'B', 'C']
f(...'ABC') // -> f('A', 'B', 'C')
[1, ...[2, 3, 4], 5] // -> [1, 2, 3, 4, 5]
f(...[1, 2, 3]) // -> f(1, 2, 3)
```

# React-Navigator

- [ ] `DOC`: https://reactnavigation.org/docs/en/getting-started.html
- [ ] `createButtonTabNavigator`: https://reactnavigation.org/docs/en/bottom-tab-navigator.html
- [ ] `stackNavigation`: https://reactnavigation.org/docs/en/stack-navigator.html
- 카드 스택처럼 한 장의 카드만 맨 위로 올려서 보여준다.
- 뷰를 바꾸는 것이 아님 (탭 네비게이션과 다르게)

# React-native-swiper

- [ ] `DOC`: https:/s/github.com/leecade/

# expo

- [ ] `DOC`: https://docs.expo.io/versions/latest/
- [ ] `exp/vector-icons`: https://expo.github.io/vector-icons/
- [x] `Live Reload, Hot Reload`: expo에서 로드한 뒤에 shake를 하면 설정이 나옴,
- Live Reload: 새로고침 할 때마다 엑스포가 새로고침 된다. 앱 전체가 리로드 됨
- Hot Reload: 바뀐 부분만 리로드가 된다.

# axios // api 부분 완성되지 않았음

- [ ] `DOC`: https://github.com/axios/axios

## Features

    - 브라우저에서 `XMLHttpRequest`를 보낸다.
    - node.js에서 http 리퀘스르트를 보낸다.
    - `Promise` api를 지원한다.
    - Request, Response를 인터셉트 한다.
    - Request, Response 데이터를 바꾼다.
    - Request를 취소한다.
    - 자동적으로 JSON 데이터를 바꾼다.

## Example

- GET request

```
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

- POST request

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

- multiple Request 만들기

```
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
```

# Container Presenter Pattern

- 컴포넌트를 분리해서 데이터를 가져오고, 변환하는 등의 데이터를 가지고 하는 작업을 하는 컴포넌트인 컨테이너(Container), 해당 데이터를 보여주는 컴포넌트인 프레젠터(Presenter)

# prop-types

- [ ] `DOC`: https://www.npmjs.com/package/prop-types

# Component

## ActivityIndicator

- [ ] `DOC`: https://facebook.github.io/react-native/docs/activityindicator

# styled-component

- [ ] `DOC`: https://www.styled-components.com/
