import { Header, Services, Projects, Blog, Footer } from "../"

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
