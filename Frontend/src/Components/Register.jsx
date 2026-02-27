import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
const Register = () => {

  const Schema = yup.object().shape({
    name: yup.string().required().min(3).max(16),
    email: yup.string().required().email(),
    username: yup.string().required().min(6).max(12),
    password: yup.string().required().min(4).max(12),
    confirmPassword: yup.string().required().min(4).max(12),
    
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Schema) })

  const submit = (data) => {
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 mt-5 p-3 border boxReg">
          <div className="text-center fs-2 fw-bold">Register <span className="text-primary">MyBook</span></div>
          <hr />
          <form onClick={handleSubmit(submit)}>
            <input {...register('name')} type="text" placeholder="Enter Your Name" className="form-control mb-3 mt-3" />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
            <input {...register('email')} type="email" placeholder="Enter Your Email" className="form-control mb-3 mt-3" />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
            <input {...register('username')} type="text" placeholder="Enter Your Username" className="form-control mb-3 mt-3" />
            {errors.username && <p className="text-danger">{errors.username.message}</p>}
            <input {...register('password')} type="password" placeholder="Enter Your Password" className="form-control mb-3 mt-3" />
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
            <input {...register('confirmPassword')} type="password" placeholder="Enter Your Password" className="form-control mb-3 mt-3" />
            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
            <button className="btn btn-primary form-control">Register</button>
          </form>
          <div className="text-center  mt-3">You have an account Click Here <Link to='/'>Login</Link></div>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
}

export default Register;
