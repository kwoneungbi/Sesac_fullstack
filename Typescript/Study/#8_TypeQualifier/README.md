# **Type 제한자**

> **오늘은 타입 제한자에 대해 공부해 보려고 한다.**

- top 타입 : any 타입과 unknown 타입에 대해 알기
- 타입 서술어의 반환타입인 is 키워드에 대해 공부하기
- 타입 연산자 : keyof를 이용하여 타입의 키 알아내기, typeof로 값의 타입 알아내기

### **top 타입**

top 타입은 시스템에서 가능한 모든 값을 나타내는 타입이다.
모든 타입은 top타입에 할당이 가능하다.

**`any type`** :
any 타입은 모든 타입을 포함하는 타입으로, any 타입의 변수에는 어떤 종류의 값이라도 할당이 가능하다.
유연성이 높은 any 타입은 타입스크립트의 타입 체크 기능을 사실상 무력화시키므로, 타입 체크가 필요한 상황에서는 주의해서 사용해야 한다. 이를 잘못 사용하면 런타임에서 예기치 않은 오류를 발생시킬 수 있다.

![](https://velog.velcdn.com/images/eungbi/post/aa50b5ba-c08b-4597-bf60-380559547d6a/image.png)

**`unknown type`** :
any 타입 대신에 unknown 타입을 사용하는 것이 좋다.
unknown 타입 또한 모든 타입의 값을 가질 수 있지만, unknown 타입의 값을 가진 변수에는 타입 체크를 거치지 않고는 접근할 수 없다.
any 타입의 유연성을 유지하면서도, 타입스크립트의 타입 체크 기능을 활용할 수 있게 해준다.

![](https://velog.velcdn.com/images/eungbi/post/4471df09-bff5-47cc-b584-9794c7a9dd2f/image.png)![](https://velog.velcdn.com/images/eungbi/post/801551a7-c657-4f1c-8218-92971c0075d6/image.png)'unknown' 유형은 'string' 유형에 할당할 수 없습니다. 라는 오류 메시지를 확인할 수 있다.

![](https://velog.velcdn.com/images/eungbi/post/9f36e1f5-426b-4c32-94c8-381794c09504/image.png)이때 typeof를 사용하여 타입을 unknownd에서 string으로 좁혀준다.

### **is 키워드**

instaceof 이나 typeof와 같은 자바스크립트 구문을 사용하여 타입을 좁히는데는 한계가 있다. 로직을 함수로 감싸면 타입을 좁힐 수 없게 된다.

![](https://velog.velcdn.com/images/eungbi/post/0228e7a2-4935-44d6-bb70-257597f1ce20/image.png)

**`is 키워드`** : 사용자 정의 타입 가드를 정의할 때 사용된다. 타입 가드는 특정 범위에서 변수의 타입을 좁혀주는 조건문을 의미한다. is 키워드를 이용하면, 함수가 특정 타입이라는 것을 확인하는 방법을 타입스크립트에게 알려줄 수 있다.

![](https://velog.velcdn.com/images/eungbi/post/da6b6d85-3a04-4376-bc52-6cb2176f239c/image.png)

### **타입 연산자**

**`keyof`** :
keyof 연산자: keyof는 타입스크립트의 인덱스 타입 쿼리 연산자로, 특정 타입의 모든 키를 추출하여 그 키들의 유니온 타입을 생성한다.![](https://velog.velcdn.com/images/eungbi/post/0adc1f18-dee6-47a0-9e25-3e86541ee8b0/image.png)

**`typeof`** :
typeof는 타입스크립트의 타입 쿼리 연산자로, 특정 값의 타입을 추출한다.
![](https://velog.velcdn.com/images/eungbi/post/3acd85e4-2ec6-40dc-b1ec-420589187973/image.png)
