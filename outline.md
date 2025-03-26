## Hook

- useState
- useEffect
- useRef

- 與狀態相關

  - useContext -> 跨元件間共享狀態
  - useReducer -> 收斂狀態的變化

- 與效能相關

  - useMemo
  - useCallback

- custom hook

## Question

1. 【UseRef】甚麼時候會需要監聽 ref.current?
2. 【UseEffect】當我們對同一個對象進行某一個元素的值的變更(例如修改第一個 Index 的 Age)時，UseEffect 的 Hot Reload v.s 重新整理的差異???(猜測這個原因)
3. 【UseRef Dom】當我們需要在父元件操作子元件所曝露的方法(參考: Child, App)

## walkthrough

1. thinking in react -> App.tsx -> components [https://react.dev/learn/thinking-in-react]
2. useEffectLifeCycle 貫穿 Question1 及 Alice,Bob
3. event v.s effect [https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events]
