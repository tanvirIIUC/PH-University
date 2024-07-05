import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/AuthApi";
import { setUser } from "../redux/features/auth/AuthSlice";
import { useAppDispatch } from "../redux/features/hooks";
import { VerifyToken } from "../utils/VerifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const onSubmit = async (data) => {
    const userInfo ={
        id:data.id,
        password:data.password,
    }
   const res = await login(userInfo).unwrap();
   const user = VerifyToken(res.data.accessToken)
   dispatch(setUser({user:{},token:res.data.accessToken}))
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="id">PASSWORD:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
