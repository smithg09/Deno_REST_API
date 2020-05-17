/**
 * @author  Smith Gajjar
 * @version 1.0.0
 * @date    17/05/2020
 * @description    User Schema.
 * @interface UserModel
 */

interface UserModel {
  _id: {
    $oid: string;
  };
  username: string;
  password: string;
}

export default UserModel;
