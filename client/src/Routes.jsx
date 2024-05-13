import { useContext } from 'react'
import { UserContext } from './UserContext'
import RegisterAndLoginForm from './components/RegisterAndLoginForm';
import Chat from './Chat';

const Routes = () => {

    const { username } = useContext(UserContext);

    if(username) {
        return <Chat />
    }

    return (
        <RegisterAndLoginForm />
    )
}

export default Routes