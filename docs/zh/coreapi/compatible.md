# 兼容API
## trim
增加string的trim函数
- **用法**：
  ``` js
  " 234 ".trim() // => '234'
  ```
## startsWiths
增加string的startsWiths
- **用法**：
  ``` js
  "a234b".startsWiths("a2") // => true
  
  "a234b".startsWiths("a1") // => false
  ```
## endsWiths
增加string的endsWiths
- **用法**：
  ``` js
  "a234b".endsWiths("4b") // => true
  
  "a234b".endsWiths("a2") // => false
  ```
## forEach
兼容低版本浏览器没有forEach
- **用法**：
  ``` js
  [1,2,3].forEach(function(item){
      console.log(item)
  })
  // => 1 
  // => 2 
  // => 3 
  ```
## filter
兼容低版本浏览器没有filter函数
- **用法**：
  ``` js
  [1,2,3].filter(function(item){
      return item>1
  })
  // => [2,3] 
  ```
## classList
兼容低版本浏览器没有classList
- **用法**：
  ``` js
  document.getElementById("idm_dialog_wrap").classList
  /*
  {
    "0": "idm_module",
    "1": "component_x8iFzJ7vZMfz0RVC"
  }
  */
  ```