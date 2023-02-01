import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { routes } from "@/config/routes";

export default async function Middleware({request}){
    const route = new URL(request.url).pathname
    if(route=='/' || route=='/app'){
        return redirect('/app/dashboard')
    }
    return json(true)
}