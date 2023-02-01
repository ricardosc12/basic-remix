import Middleware from "@/middleware"
export const loader = Middleware
import Login from "@/components/organisms/Login"


export default function Page(){
    return (
        <Login/>
    )
}