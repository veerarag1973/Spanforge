import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import BackToTop from './components/BackToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const LlmDiffHome = lazy(() => import('./pages/LlmDiffHome.jsx'))
const LlmDiffDocs = lazy(() => import('./pages/LlmDiffDocs.jsx'))
const StandardHome = lazy(() => import('./pages/StandardHome.jsx'))
const StandardSpec = lazy(() => import('./pages/StandardSpec.jsx'))
const Feedback = lazy(() => import('./pages/Feedback.jsx'))
const TutorialsDocs = lazy(() => import('./pages/TutorialsDocs.jsx'))
const AgentObsHome = lazy(() => import('./pages/AgentObsHome.jsx'))
const AgentObsDocs = lazy(() => import('./pages/AgentObsDocs.jsx'))
const ToolsCoreHome = lazy(() => import('./pages/ToolsCoreHome.jsx'))
const AgentObsDebugHome = lazy(() => import('./pages/AgentObsDebugHome.jsx'))
const AgentObsDebugDocs = lazy(() => import('./pages/AgentObsDebugDocs.jsx'))
const AgentObsValidateHome = lazy(() => import('./pages/AgentObsValidateHome.jsx'))
const AgentObsValidateDocs = lazy(() => import('./pages/AgentObsValidateDocs.jsx'))
const Security = lazy(() => import('./pages/Security.jsx'))
const Reliability = lazy(() => import('./pages/Reliability.jsx'))
const Compatibility = lazy(() => import('./pages/Compatibility.jsx'))
const Roadmap = lazy(() => import('./pages/Roadmap.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function AppRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="route-outlet">
      <Suspense fallback={null}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/llm-diff" element={<LlmDiffHome />} />
          <Route path="/llm-diff/docs" element={<LlmDiffDocs />} />
          <Route path="/llm-diff/docs/*" element={<LlmDiffDocs />} />
          <Route path="/standard" element={<StandardHome />} />
          <Route path="/standard/spec" element={<StandardSpec />} />
          <Route path="/standard/feedback" element={<Feedback />} />
          <Route path="/learn" element={<TutorialsDocs />} />
          <Route path="/learn/*" element={<TutorialsDocs />} />
          <Route path="/tools" element={<ToolsCoreHome />} />
          <Route path="/tools/core" element={<ToolsCoreHome />} />
          <Route path="/sdk" element={<AgentObsHome />} />
          <Route path="/sdk/docs" element={<AgentObsDocs />} />
          <Route path="/sdk/docs/*" element={<AgentObsDocs />} />
          <Route path="/agentobs-debug" element={<AgentObsDebugHome />} />
          <Route path="/agentobs-debug/docs" element={<AgentObsDebugDocs />} />
          <Route path="/agentobs-debug/docs/*" element={<AgentObsDebugDocs />} />
          <Route path="/agentobs-validate" element={<AgentObsValidateHome />} />
          <Route path="/agentobs-validate/docs" element={<AgentObsValidateDocs />} />
          <Route path="/agentobs-validate/docs/*" element={<AgentObsValidateDocs />} />
          <Route path="/security" element={<Security />} />
          <Route path="/reliability" element={<Reliability />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <BackToTop />
    </BrowserRouter>
  )
}
