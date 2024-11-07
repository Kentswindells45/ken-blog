import FormHeader from "../assets/components/FormHeader";

interface LayoutProps{
    children:React.ReactNode;
}
const Layout =({children}:LayoutProps)=>{
    return(
        <div className="w-full h-screen flex items-center justify-center p-[15px]">
            <div className="w-[670px] bg-white rounded-[10px] pb-5">
                <FormHeader/>
                {children}
            </div>
        </div>
    )
}
export default Layout;