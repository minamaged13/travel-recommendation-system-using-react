import ViewInfo from "@/components/ViewInfo"
import { useRouter } from "next/router"
import { Fragment } from "react"
const viewInfo=()=>{
    const router = useRouter()
    const query = router.query
    console.log(query.id);
return<Fragment>
    <ViewInfo id={query.id}/>
    
</Fragment>
}
export default viewInfo