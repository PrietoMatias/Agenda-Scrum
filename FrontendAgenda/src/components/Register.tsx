import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IUser } from '../interfaces/User';
import { register } from '../services/methods/user.api';

interface RegisterProps {
    setRegister: (value: boolean) => void;
}

const Register = ({ setRegister }: RegisterProps) => {
    
    const schemaValidationRegister = Yup.object({
        name: Yup.string().required('Must be a name'),
        surname: Yup.string().required('Must be a surname'),
        username: Yup.string().required('Must be a username'),
        password: Yup.string().required('Must be a password'),
        email: Yup.string().email('Invalid Email').required('Must be a email')
    });

    const sendData = async(form:any)=>{
        try {
            const dataValid = await schemaValidationRegister.validate(form,
                {abortEarly:false}
            )
            const dataParser:IUser = dataValid as IUser;
            const SendData = await register(dataParser);
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
    <Formik
    initialValues={{
        name:'',
        surname:'',
        username:'',
        password:'',
        email:''
    }}
    validationSchema={schemaValidationRegister}
    onSubmit={(values)=>{
        sendData(values)
        console.log(values);
    }}
    >
        {
            ()=>(
                <Form>
                    <div>
                        <label>Name</label>
                        <Field name='name' type='text'/>
                        <ErrorMessage name='name'/>
                    </div>
                    
                    <div>
                        <label>Surname</label>
                        <Field name='surname' type='text'/>
                        <ErrorMessage name='surname'/>
                    </div>
                    
                    <div>
                        <label>Username</label>
                        <Field name='username' type='text'/>
                        <ErrorMessage name='username'/>
                    </div>
                    
                    <div>
                        <label>Password</label>
                        <Field name='password' type='password'/>
                        <ErrorMessage name='password'/>
                    </div>
                    
                    <div>
                        <label>Email</label>
                        <Field name='email' type='email'/>
                        <ErrorMessage name='email'/>
                    </div>
                    <button type="submit">Register</button>
                </Form>
            )
        }
    </Formik>
    <h4>Already have a account? Log in!</h4>
    <button onClick={()=>setRegister(false)}>Login</button>
    
    </>
  )
}

export default Register