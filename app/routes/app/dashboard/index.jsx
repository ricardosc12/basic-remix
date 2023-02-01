import Middleware from "@/middleware"
export const loader = Middleware

import Dashboard from "@/components/organisms/Dashboard"
import Framer from "@/components/layouts/Framer"

export default function Page(){
    return <Framer><Dashboard/></Framer>
}