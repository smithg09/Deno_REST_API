/**
 * @author  Sakshi Patel
 * @version 1.1.0
 * @date    17/05/2020
 * @description    User Schema.
 * @interface UserModel
 */

interface UserModel {
  _id: {
//     Og if for user
    $oid: string;
  };
  username: string;
  password: string;
}

export default UserModel;
