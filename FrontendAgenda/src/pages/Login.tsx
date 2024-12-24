import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../services/methods/user.api';
import { ILogin} from '../interfaces/User';
import Register from '../components/Register';

const Login = () => {
    const schemaValidationLogin = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
    });

    const [register, setRegister] = useState(false);
    const sendData = async(form:any)=>{
        try {
            const dataValid = await schemaValidationLogin.validate(form, {
                abortEarly: false
            })
           const dataParser:ILogin = dataValid as ILogin;  
           const SendData=  await login(dataParser);
            console.log(SendData);
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                console.error('Errores de validación:', error.errors);
              } else {
                console.error('Error al registrar usuario:', error);
              } 
        }
    }

    return (
        <>
{register != true ? (
    <>
        <h1>Welcome to Notik</h1>
        <h5>Login</h5>
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schemaValidationLogin}
            onSubmit={(values) => {
                console.log(values);
                sendData(values)
            }}
        >
            {
                () => (
                    <Form>
                        <div>
                            <label>Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div>
                            <label>Password</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" />
                        </div>
                        <button type="submit">Login</button>
                        
                    </Form>
                )
            }
        </Formik>
        <h4>Don't you have account? Register!</h4>
        <button onClick={()=>setRegister(true)}>Register</button>
    </>
) : <Register setRegister={setRegister}/>}
        </>
    )
}

export default Login