import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const DeleteAccount = () =>{
    const token = cookies.get("access_token")
    const authAxios = axios.create({
        baseURL: "http://143.198.25.164:5000/",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const deleteAccount = async () => {
        try {
            const userProfile = await authAxios.get("/api/auth/user/info")
            let username = userProfile.data.user.username
            await authAxios.delete(`/api/auth/user/${username}`)
            cookies.remove("access_token", token, { path: '/' })

            alert("Account Successfully deleted")
            window.location.href = '/';
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button class="btn btn-success" onClick={deleteAccount}>Delete Account</button>
        </>
    )
};

export default DeleteAccount;