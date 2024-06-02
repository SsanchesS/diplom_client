export interface ISneaker{
   id: number,
   img: string // file
   des: string,
   price: number
}
export interface ISneakersState{
   sneakers: ISneaker[] | null,
   overlaySwitch: boolean
}
export interface IOrder{
   id: number,
   user_id: number,
   order_date: Date,   // мб проблемы
   sum: number,
   status: string,
   delivery_method: string,
   payment_method: string,
}
export interface IUser{
   id: number,
   f_name: string | null,
   s_name: string | null,
   email: string | null,
   password?: string | null,
   role_id: number | null,

   itemsPrice: number | null,
   sneakers_basket: ISneaker[] | null,
   sneakers_orders: IOrder[] | null
}
export interface Iresponse{
   code: number,
   message: string,
   user?: IUser | null,
   orders?: IOrder[] | null,
   order?: IOrder | null,
   sneakers?: ISneaker[] | null,
// ....
}