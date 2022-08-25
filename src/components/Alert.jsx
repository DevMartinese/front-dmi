import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const AlertComponent = () => {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Show Invalid</AlertTitle>
      <AlertDescription>You must provide a show name valid </AlertDescription>
    </Alert>
  )
}

export default AlertComponent;