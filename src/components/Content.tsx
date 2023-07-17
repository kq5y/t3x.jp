import { useMemo, useState } from "react"
import Profile from "../contents/Profile"
import Skills from "../contents/Skills"
import Works from "../contents/Works"
import History from "../contents/History"
import { Stack } from "@mui/material"
import Buttons from "./Buttons"

interface ContentProps {
  direction: 'row' | 'column'
}

const Content = (props: ContentProps) => {
  const [activeContent, setActiveContent] = useState<SideContent>('profile')
  const getContentComponent = useMemo(() => {
    switch (activeContent) {
      case 'profile':
        return <Profile />
      case "skills":
        return <Skills />
      case "works":
        return <Works />
      case "history":
        return <History />
      default:
        return null
    }
  }, [activeContent])
  return (
    <>
      {props.direction === 'row' ? (
        <Stack direction="column">
          <Buttons activeContent={activeContent} setActiveContent={setActiveContent} />
          {getContentComponent}
        </Stack>
      ) : (
        <>
          <Profile />
          <Skills />
          <Works />
          <History />
        </>
      )}
    </>
  )
}

export default Content
