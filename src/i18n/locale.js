export default {
  en: {
    message: {
      the_world: 'the world',
      dio: 'Test:',
      linked: '@:message.dio @:message.the_world !'
    },
    keyMsg: 'message', // basic
    nested: {
      message: 'nested message'
    },
    errorsMsg: [
      'error code message',
      {
        internalMsg: 'internal error message'
      },
      [
        'nested array error'
      ]
    ]
  },
  cn: {
    message: {
      the_world: '世界',
      dio: '测试:',
      linked: '@:message.dio @:message.the_world !!!!'
    },
    keyMsg: '消息', // basic
    nested: {
      message: '嵌套消息'
    },
    errorsMsg: [
      '错误代码信息',
      {
        internalMsg: '内部的错误代码信息'
      },
      [
        '嵌套的数组'
      ]
    ]
  }
}
