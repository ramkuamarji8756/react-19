import style from './css/UserProfile.module.css'
function UserProfile(){
    return(

        <div>
            {/* <h1 className={style.heading}>User profile</h1> */}
            <div className={style.card}>
                <img className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="check your network" />
              
            </div>
            <div className={style.textWrap}>
                <h4>Ramkumar</h4>
                <p>Java Developer</p>
            </div>
        </div>
    )
}
export default UserProfile;