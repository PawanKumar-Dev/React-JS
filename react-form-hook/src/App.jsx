import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name", { required: true })} />
        <br />
        {errors.name && <span>This field is required</span>}
        <br />
        <input type='password' {...register("password", { required: { value: true, message: 'This field must be filled' }, minLength: { value: 5, message: 'Password should have 5 character minimum' } })} />
        <br />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}
export default App