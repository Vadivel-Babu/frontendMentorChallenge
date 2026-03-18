import Avatar from "./ui/Avatar"
import Button from "./ui/Button"
import Input from "./ui/Input"


function App() {
  

  return (
    <>
    <h1 className="text-red-600 font-extrabold text-4xl">hello</h1>
    <Button text={'btn'} handler={(e) => console.log(e)
    }/>
    <Input/>
    <Avatar/>
    </>
  )
}

export default App
