# redux-saga
> 核心API

# redux-saga
1. takeEvery
> 监听对应 action
2. takeLatest
> 监听对应 action,但只有最近的一次会触发（例：2s内多次点击按钮，只有最近一次会触发）


# redux-saga/effects
1. fork
> 创建一个新的进程或线程，并发送请求,第二个值为参数(与call用法差不多，但为非阻塞调用)

2. call
> 调用一个异步函数，第二个值为传递的参数(阻塞调用)

3. put 
> 发出 dispatch,触发 action

4. take
> 监听，等待 action触发

5. select
> 相当于getState,用于获取store中的state

6. all
> 并发执行多个内容

7. race
> 执行赛跑

8. cancel
> cancel(task) 取消任务

9. cancelled
> 任务函数内部可监听到 cancelled() 事件



# redux-thunk or redux-saga

1. redux-thunk 
```
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

- 缺点
* thunk 使 redux可以接受函数作为 action, thunk 实现做的操作只是判断action是否为函数，为函数直接执行，并不关注函数内部实现
* action 形式不统一
* 异步操作过于分散，分散在各个action中


2. redux-saga
- 优点
* 集中处理异步操作
* action 返回对象，形式统一
* effect, 方便接口调试
* worker和watcher可以实现非阻塞异步调用，并且可以实现非阻塞调用下的事件监听
* 异步操作流程可控制，可以随时取消异步操作

- 缺点
* 学习成本