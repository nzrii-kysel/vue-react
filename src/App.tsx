import './App.css'
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";

const Injected = ({targetSelector, content}: { targetSelector: string, content: React.ReactNode }) => {
  const [target, setTarget] = useState(() => document.querySelector(targetSelector))

  console.log('target', target)

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          setTarget(document.querySelector(targetSelector))
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, []);

  if (!target) return null

  return createPortal(
    <div className="hide-siblings">{content}</div>,
    target
  )
}

function App() {
  return (
    <Injected
      targetSelector="#chartdiv"
      content={
        <div  style={{height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', fontSize: '50px'}}>
          ТУТ МОЖЕ БУТИ ВАША РЕКЛАМА
        </div>
      }
    />
  )
}

export default App
