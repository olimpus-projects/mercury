import { useNavigate } from "react-router";
import "./Header.css"

interface HeaderProps {
    leftSection?: React.ReactNode;
    middleSection?: React.ReactNode;
    rightSection?: React.ReactNode;
}

export const Header = ({ leftSection, middleSection = (<></>), rightSection }: HeaderProps) => {
    const navigate = useNavigate();

    const defaultLeftSection = (
        <div className="navigation-menu-item" onClick={() => navigate("/")}>
            Routes App
        </div>
    )

    const defaultMiddleSection = (
        <div className="navigation-menu-item"></div>
    )

    const defaultRightSection = (
        <div className="navigation-menu-item" onClick={() => navigate("/login")}>
            Login
        </div>
    )

    return (
        <nav id="header-navigation-menu">
            {leftSection ? (
                leftSection
            ) : (
                defaultLeftSection
            )}
            {middleSection ? (
                middleSection
            ) : (
                defaultMiddleSection
            )}
            {rightSection ? (
                rightSection
            ) : (
                defaultRightSection
            )}
        </nav>
    )
}
