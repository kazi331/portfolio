import axios from 'axios'

const SignIn = () => {
    const signIn = () => {
        try {
            const res = axios.get('localhost:5000/api/login')
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <button onClick={signIn}>Sign In</button>
        </div>

    )
}

export default SignIn