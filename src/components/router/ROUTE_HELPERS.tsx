import { NavigateFunction } from 'react-router-dom'

type navigateHook = NavigateFunction

export const ROUTE_HELPERS = {
  handleGoMainPage(nav: navigateHook) {
    nav('/')
  },
  handleGoToQuizScreen(nav: navigateHook) {
    nav('/quiz')
  },
  handleGoToStatisticsScreen(nav: navigateHook) {
    nav('/statistics')
  },
  handleGoToResultsScreen(nav: navigateHook) {
    nav('/results')
  }
}
