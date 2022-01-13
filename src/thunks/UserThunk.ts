import { ISiteUserInfo } from "@pnp/sp/site-users/types"
import { RegisterUser } from "../actions/user.action";
import { GetUserLogged } from "../services/task.service"

export const UserThunk = {
    GetUserLogged: () => (dispatch) => {
        GetUserLogged()
            .then((user:ISiteUserInfo)=>{
                dispatch(RegisterUser(user.Id));
            })
    }
}