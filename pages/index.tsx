import Style from "@/mypage.module.css"
export default (props:any)=>{

    let a = {color:"red"}
    return <div className={Style.ali}>
        {JSON.stringify(props)}
    </div>
}
export const getServerSideProps = async()=>{
    return {
        props:{
            a:{value:"Hi"}
        }
    }
}


