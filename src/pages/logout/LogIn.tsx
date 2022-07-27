import './login.css'
import CompanyLogo from "../../assets/svg/CompanyLogo"
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../services/authApis'
import { useAppDispatch } from '../../app/hooks'
import React, { useEffect, useRef, useState } from 'react'
import { setUser, setUserDetails, setUserToken } from '../../features/auth/authSlice'
import { toast } from 'react-toastify';
import Button from '../../components/button/Button'
import LoginBackGIcons from '../../assets/svg/LoginBackGIcons'
import Input from '../../components/input/Input'


export interface initialStateType {
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  confirmPassword?: string
}
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const LogIn = () => {
  const [formValue, setFormValue] = useState<initialStateType>(initialState)
  const { firstName, lastName, email, password, confirmPassword } = formValue

  const userRef = useRef<any>()
  const errRef = useRef<any>()
  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
      isLoading,
      reset,
      status,
    }] = useLoginUserMutation()
  const handleChange = (e: any) => setFormValue({ ...formValue, [e.target.name]: e.target.value })

  // useEffect(() => {
  // userRef.current.focus()
  // }, [email, password])


  console.log(loginData, "loginData loginData data data")

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (email && password) {
        // await loginUser({ email, password })
        // console.log(await loginUser({ email, password })).unwrap();

        // call login trigger from rtk query
        const response: any = await loginUser({ email, password }).unwrap();
        console.log(response, "response response response")

        const { token, user }: any = loginData
        // set user data and token in redux store
        dispatch(setUserDetails({ user: response?.data }));
        dispatch(setUserToken({ token: response?._meta.token }));
        toast.success("Login successful");
        console.log('login now')
        console.log(dispatch(setUser({ user, token })), "dispatch(setUser({ user, token}))")
        dispatch(setUser({ user, token }))
        // setFormValue({email: '', password:''})
        navigate('/')
      } else {
        toast.error("Please fill all Input field")
        console.log('Not logined ')
      }
    } catch (err: any) {
      if (!err?.response) {
        toast.error(!err?.response);
        setErrMsg("No Server Response")
      } else if (err.response?.status === 400) {
        toast.error(err.response?.status);
        setErrMsg("Missing Email or Password")
      } else if (err?.response?.status === 401) {
        toast.error(err.data._meta.error.message);
        setErrMsg("Unauthorized")
      } else {
        setErrMsg("Login Failed")
      }
      errRef.current.focus()
    }
  }


  //////////////


  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("User Login Successfully")
      // dispatch(setUser({ name: loginData, token: loginData}))  
      navigate('/')
    }
  }, [isLoginSuccess])


  return (
    <div className="h-screen">
      <div className="absolute scale-75 top-[-98px] left-[-40px]" >
        <LoginBackGIcons />
      </div>
      <div className='loginBody'>
        {/* <p className={errMsg ? "errmsg" : "offscreen"}>{isLoginError && JSON.stringify(isLoginError.valueOf())}</p> */}

          <div className='text-center logoLogin flex flex-col justify-center items-center absolute top-[13%] md:top-[12%]'>
            <div className='flex items-center gap-5'>
              <CompanyLogo className='md:scale-110 my-1' /> <h1 className='font-bold text-lg md:text-[30px]'>Skippy</h1>
            </div>
            <span className='text-center text-[18px] color-[#282828]'>Click Play & Get Paid</span>
          </div>

        <div className="login z-10 p-3 w-full max-w-[23rem] md:bg-white bg-transparent">

          <div className='p-[10px]'>
            <span className='text-[#949AB1] text-sm'>Welcome Back,</span>
            <h1 className='font-bold'>Admin</h1>
          </div>

          <form className='userInput' action="" onSubmit={handleLogin}>      
              {/* <p ref={errRef} className={errMsg ? "errmsg text-center" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
              <div className="userInput">
                <input type="email" name="email" value={email} placeholder='Email' onChange={handleChange} />
              </div>

              <div className="userInput">
                <input type="password" name='password' value={password} placeholder='Password' onChange={handleChange} />
                {/* <Input label='Password' className="w-full outline-none border-solid border-b border-emerald-300 overflow-x-auto bg-transparent pt-4  pr-0 pb-1 pl-0" type="password" name='password' value={password} placeholder='Password' onChange={handleChange} /> */}
              </div>

              <div className='my-3 userInput'>
                <span className="text-[#FF5A5A] font-bold text-sm">Reset Passsword</span>
              </div>

              <div className="">
                <Button className='w-full' size='medium' type='submit'>Sign In</Button>
              </div>            
          </form>

        </div>
      </div>
    </div>
  )
}

export default LogIn