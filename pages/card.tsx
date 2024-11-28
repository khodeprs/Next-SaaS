import Style from "@/mypage.module.css"
import { Span } from "next/dist/trace"
export default (props:any)=>{

    return <div style={{height:400, width:200,borderRadius:5,
        backgroundColor:"purple", display:"flex",
        flexDirection:"column", alignItems:"center"}}>
            <br-x/>
            <br-x/>
            <br-x/>

            <f-20>TITLE</f-20>
            <img src='/1.jpg' style={{height:100, width:100,}}/>
            <f-12>CAPTION</f-12>


    </div>
}
export const getServerSideProps = async()=>{
    return {
        props:{
            a:{value:"Hi"}
        }
    }
}
