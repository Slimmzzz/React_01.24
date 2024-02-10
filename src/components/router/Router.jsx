import { createBrowserRouter } from "react-router-dom";
import { MainScreen } from '../MainScreen'
import { QuizScreen } from '../QuizScreen'
import { ResultsScreen } from '../ResultsScreen'
import { StatisticsScreen } from '../StatisticsScreen'
import { ErrorRouteScreen } from "./ErrorRouteScreen";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />,
    errorElement: <ErrorRouteScreen />
  },
  {
    path: '/quiz',
    element: <QuizScreen />
  },
  {
    path: '/results',
    element: <ResultsScreen />
  },
  {
    path: '/statistics',
    element: <StatisticsScreen />
  },
])