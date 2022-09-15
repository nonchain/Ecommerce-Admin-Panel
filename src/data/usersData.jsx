import styles from './users_data.module.scss';

const setStatus = (status) => {
  if(status === 'pending') return styles.pending;
  if(status === 'passive') return styles.passive;
  return styles.active;
}

export const userColumns = [
   { field: "id", headerName: "ID", width: 70 },
   {
     field: "user",
     headerName: "User",
     width: 230,
     renderCell: (params) => {
       return (
         <div className={styles.users}>
           <img className="avatar-mini" src={params.row.img} alt="avatar" />
           <span>{params.row.username}</span>
         </div>
       );
     },
   },
   {
     field: "email",
     headerName: "Email",
     width: 230,
   },
 
   {
     field: "age",
     headerName: "Age",
     width: 100,
   },
   {
     field: "status",
     headerName: "Status",
     width: 160,
     renderCell: (params) => {
       return (
         <span className={`${styles.status} ${setStatus(params.row.status)}`}>
           {params.row.status}
         </span>
       );
     },
   },
 ];
 
 //temporary data
 export const userRows = [
   {
     id: 1,
     username: "Snow",
     img: "https://arga-mag.com/file/img/2022/01/Profile-pictures-for-gamers-16.jpg",
     status: "active",
     email: "1snow@gmail.com",
     age: 35,
   },
   {
     id: 2,
     username: "Jamie Lannister",
     img: "https://static-b.netshahr.com/www.netshahr.com/images/2017-12/photodune-9235903-game-m-16x9.jpg",
     email: "2snow@gmail.com",
     status: "passive",
     age: 42,
   },
   {
     id: 3,
     username: "Lannister",
     img: "https://arga-mag.com/file/img/2022/01/Profile-pictures-for-gamers-16.jpg",
     email: "3snow@gmail.com",
     status: "pending",
     age: 45,
   },
   {
     id: 4,
     username: "Stark",
     img: "https://arga-mag.com/file/img/2022/01/Profile-pictures-for-gamers-16.jpg",
     email: "4snow@gmail.com",
     status: "active",
     age: 16,
   },
   {
     id: 5,
     username: "Targaryen",
     img: "https://arga-mag.com/file/img/2022/01/Profile-pictures-for-gamers-16.jpg",
     email: "5snow@gmail.com",
     status: "passive",
     age: 22,
   },
   {
     id: 6,
     username: "Melisandre",
     img: "https://static-b.netshahr.com/www.netshahr.com/images/2017-12/photodune-9235903-game-m-16x9.jpg",
     email: "6snow@gmail.com",
     status: "active",
     age: 15,
   },
   {
     id: 7,
     username: "Clifford",
     img: "https://arga-mag.com/file/img/2022/01/Profile-pictures-for-gamers-16.jpg",
     email: "7snow@gmail.com",
     status: "passive",
     age: 44,
   },
   {
     id: 8,
     username: "Frances",
     img: "https://static-b.netshahr.com/www.netshahr.com/images/2017-12/photodune-9235903-game-m-16x9.jpg",
     email: "8snow@gmail.com",
     status: "active",
     age: 36,
   },
   {
     id: 9,
     username: "Roxie",
     img: "https://arga-mag.com/file/img/2022/01/Profile-pictures-for-gamers-16.jpg",
     email: "snow@gmail.com",
     status: "pending",
     age: 65,
   },
   {
     id: 10,
     username: "Roxie",
     img: "https://static-b.netshahr.com/www.netshahr.com/images/2017-12/photodune-9235903-game-m-16x9.jpg",
     email: "snow@gmail.com",
     status: "active",
     age: 65,
   },
 ];