import QuotesGenerator from "./components/QuotesGenerator"
import Text from "./components/Text"



function App() {
 

  return (
    <div className="h-screen w-full flex flex-col gap-2 justify-center items-center relative">
      <Text title text="Get Inspiration"/>
      <QuotesGenerator/>
      </div>
  )
}

export default App
