import {useNavigate} from 'react-router-dom';
import {constant} from '../constant';
import axios from 'axios';
import {toast} from 'react-toastify';
const useSignIn = () => {
    const navigate = useNavigate();

    const signin = (data) =>{
        axios.post(`${constant.baseUrl}/api/user/signin`, data)
        .then((response) => {
            if(response.status === 200){
                const {token} = response.data;
                if(token){
                    localStorage.setItem('token', token);
                    toast.success('Login successful')
                    navigate('/dashboard');
                }else{
                    console.error('Token not found in response data');
                }
            }else{
                console.error(`Unexpected status code: ${response.status}`);
            }
        });
        
    }
    return signin;
}
export default useSignIn;