import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { UserActions } from "@/store/UserSlice";
import DisplayBasicInfo from "./DisplayBasicInfo";
import EditBasicInfo from "./EditBasicInfo";
const BasicInfo = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const userID = useSelector((state) => state.user.id);
  const [editUser, setEditUser] = useState(false);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(UserActions.logout());
    router.replace("/");
  };
  const editHandler = () => {
    setEditUser(!editUser);
  };
  console.log("BasicInfo: ", user);
  console.log("USER id : ", userID);
  return (
    <Fragment>
      {!editUser && (
        <DisplayBasicInfo onToggle={editHandler}></DisplayBasicInfo>
      )}
      {editUser && <EditBasicInfo onToggle={editHandler} />}
    </Fragment>
  );
};
export default BasicInfo;
