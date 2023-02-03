import Middleware from "@/middleware"
// export const loader = Middleware

import Pesquisa from "@/components/organisms/Pesquisa"
import Framer from "@/components/layouts/Framer"

export default function Page(){
    return <Framer><Pesquisa/></Framer>
}