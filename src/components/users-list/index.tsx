import {UserApi} from "../../store/redusers/users/user-api";
import {useState} from "react";
import {IUserModel} from "../../models/user.model";

export const UsersList = () => {
    const [formData, setFormData] = useState<IUserModel>({
        firstName: '',
        lastName: ''
    })
    const {data: usersList, isLoading: loadUsers} = UserApi.useGetUsersQuery(null)
    const [addUserData] = UserApi.useAddUserMutation()
    const [deleteUser] = UserApi.useDeleteUserMutation()
    // console.log(data)
    return <div>
        <h1>Users list</h1>
        <div>
            <input onChange={(e) => {
                setFormData({...formData, firstName: e.target.value})
            }}
                   value={formData.firstName}
                   placeholder={'firstName'}
                   type="text"/>
            <input onChange={(e) => {
                setFormData({...formData, lastName: e.target.value})
            }}
                   value={formData.lastName}
                   placeholder={'lastName'}
                   type="text"/>
            <button onClick={async () => {
                await addUserData(formData)
            }}>Add use
            </button>
        </div>
        {!loadUsers ? <div>
            {usersList && usersList.length ? <div style={{display: 'flex', gap: '20px', flexDirection: 'column'}}>
                {usersList.map((item: IUserModel, index: number) => {
                    return <div key={index} style={{border: '1px solid black'}}>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                        <button onClick={async () => {
                            if (item._id) {
                                await deleteUser(item._id)
                            }
                        }}>Delete
                        </button>
                    </div>
                })}
            </div> : <p>Empty users list</p>}
        </div> : <p>Loading.....</p>}
    </div>
}