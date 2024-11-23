import Style from "@/mypage.module.css"
export default (props:any)=>{
    return <research-blue>hiiiiii</research-blue>

      
}
export const getServerSideProps = async()=>{
    return {
        props:{
            a:{value:"Hi"}
        }
    }
}


