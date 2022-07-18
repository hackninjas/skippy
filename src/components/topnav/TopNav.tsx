import BellIcon from '../../assets/svg/BellIcon'
import NavImgIcon from '../../assets/svg/NavImgIcon'
import SearchIcon from '../../assets/svg/SearchIcon'
import SettingIcon from '../../assets/svg/SettingIcon'
import './topnav.css'


const renderNotificationItem = (item: any, index: number) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const current_user = {
    display_name: "Gerald Kachi",
    image: ""
    // image: user_image
}

const renderUserToggle = (user: any) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="users" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const TopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" name="search" placeholder="Search..." />
                {/* <i className="bx bx-search"></i> */}
                <i><SearchIcon /></i>
            </div>

            <div className="topnav__right">
                <div></div>
                {/* <div className="topnav__right-item">
                    dropdown here 
                    <Dropdown
                        // icon="bx bx-user"
                        customToggle={() => renderUserToggle(current_user)}
                        contentData={user_menu}
                        renderItems={(item: any, index: number) => renderUserMenu(item, index)}
                    />
                </div> */}

                <div className="topnav__right-item">
                    <BellIcon />
                </div>
                
                <div className="topnav__right-item">
                    {/* dropdown here  */}
                    {/* <Dropdown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item: any, index: number) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to="/">View All</Link>}
                    /> */}
                    <SettingIcon />
                </div>

                <div className="topnav__right-item">
                    {/* theme settings */}
                    {/* <Dropdown icon="bx bx-user" /> */}
                    {/* <ThemeMenu /> */}
                    <NavImgIcon />
                </div>
            </div>
        </div>
    )
}

export default TopNav