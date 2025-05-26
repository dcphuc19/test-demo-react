import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'

const ManagerUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage user
            </div>
            <div className="users-content">
                <div>
                    <button>
                        Add new users
                    </button>
                </div>
                <div>
                    table users

                </div>
            </div>
            <ModalCreateUser />
        </div>
    )
}
export default ManagerUser;