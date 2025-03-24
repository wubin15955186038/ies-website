export default function startUapm() {
  const APM = require('@umengfe/apm')
  APM.init({
    pageFilter: {
      mode: 'ignore',
      rules: []
    },
    pid: '6549cec6b2f6fa00ba78caa3',
    logLevel: 0,
    traceKey: 'trace-x'
  })
}
