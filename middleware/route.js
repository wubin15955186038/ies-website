export default function ({ isServer, req, redirect, route }) {
  const isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  if (isMobile(userAgent)) {
    if (route.name === 'download' || route.name === 'questions') {
      console.log('aaaa')
      return redirect(route.fullaPth)
    } else {
      return redirect('/mobile')
    }
  } else if (!isMobile(userAgent) && route.fullPath === '/mobile') {
    return redirect('/')
  } else if (!isMobile(userAgent) && route.fullPath !== '/mobile') {
    return redirect(route.fullaPth)
  }
}
