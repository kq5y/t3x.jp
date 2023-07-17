import { Button, Stack } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface ButtonsProps {
    activeContent: SideContent
    setActiveContent: Dispatch<SetStateAction<SideContent>>
}

const Buttons = (props: ButtonsProps) => {
  return (
    <Stack direction="row">
        <Button onClick={() => props.setActiveContent('profile')}>Profile</Button>
        <Button onClick={() => props.setActiveContent('skills')}>Skills</Button>
        <Button onClick={() => props.setActiveContent('works')}>Works</Button>
        <Button onClick={() => props.setActiveContent('history')}>History</Button>
    </Stack>
  )
}

export default Buttons
