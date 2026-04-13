import { useForm } from "react-hook-form"
import * as z from "zod"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
const formSchema = z.object({
  username: z.string().min(3).max(50),
})
const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data)
  }
  return (
    <div>
      <Button>ClickMe</Button>
    </div>
  )
}

export default SignUp