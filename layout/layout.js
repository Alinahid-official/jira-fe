import SideNavBar from "../components/sidebars/sidebar"
import RightContainer from "../components/containers/rightContainer"

export default function Layout({children,role}){
    return(
        <div className="flex">
            <SideNavBar role={role}/>
            <RightContainer>
                {children}
            </RightContainer>
        </div>
    )
}
