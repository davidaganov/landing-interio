import { Header, Services, Projects, Blog } from "../"

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <Projects />
        <Blog />
      </main>
    </div>
  )
}
