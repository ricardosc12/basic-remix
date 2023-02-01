import Middleware from "@/middleware"
export const loader = Middleware

import Store from "@/components/organisms/Store"
import Framer from "@/components/layouts/Framer"

export default function Page(){
    return <Framer><Store/></Framer>
}