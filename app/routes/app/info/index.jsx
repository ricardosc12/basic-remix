import Middleware from "@/middleware"
export const loader = Middleware

import Framer from "@/components/layouts/Framer"
import Info from "@/components/organisms/Info"


export default function Page(){
    return <Framer><Info/></Framer>
}