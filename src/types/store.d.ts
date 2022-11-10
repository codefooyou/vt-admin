// export interface RoleInfo {
//   roleName: string
//   value: string
// }

export interface UserInfo {
  userId: string | number
  username: string
  realName?: string
  avatar?: string
  desc?: string
  homePath?: string
  roles?: string[]
  authBtnList?: string[]
}
