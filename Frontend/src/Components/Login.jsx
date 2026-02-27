import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
const Login = () => {

  const Schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(4).max(12),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Schema) })

  const submit = (data) => {
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 mt-5 p-3 border box">
          <div className="text-center fs-2 fw-bold">Login <span className="text-primary">MyBook</span></div>
          <hr />
          <form onClick={handleSubmit(submit)}>
            <input {...register('email')} type="email" placeholder="Enter Your Email" className="form-control mb-3 mt-3" />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
            <input {...register('password')} type="password" placeholder="Enter Your Password" className="form-control mb-3 mt-3" />
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
            <button className="btn btn-primary form-control">Login</button>
          </form>
          <div className="text-center  mt-3">You Don't have account Click Here <Link to='/register'>Register</Link></div>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  );
}

export default Login;
