export default function ({ isServer, req, redirect, route }) {
  const isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  console.log(route.name, isMobile(userAgent))
  if (isMobile(userAgent)) {
    const routeNames = ['download', 'questions', 'question-mobile-subject', 'question-mobile-subject-id']
    if (routeNames.includes(route.name)) {
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
