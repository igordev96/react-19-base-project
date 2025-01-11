import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';
import ReactLogo from './assets/react.svg';
import { ModeToggle } from "./components/mode-toggle";


export const App = () =>
{
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  const clickHandler = () =>
  {
    toast({
      title: "New count",
      action: <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
    })
  }

  return (
    <div>
      <p>Hello Vite + React!</p>
      <ReactLogo />
      <ModeToggle />
      <button onClick={clickHandler}>count is: {count}</button>
    </div>
  )
}
