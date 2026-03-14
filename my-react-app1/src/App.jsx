import style from "styled-components"
//import './css/style.css'
import UserProfile from './UserProfile'

function App() {


  return (

<>
  <h1>Style with module CSS in React js</h1>
  <div style={{display:"flex", flexWrap:'wrap'}}>
  <UserProfile />
  <UserProfile />
  <UserProfile />
  <UserProfile />
  <UserProfile />
  <UserProfile />
  <UserProfile />
  <UserProfile />
  <UserProfile />
  </div>
</>

    // <>
    //   <h1 className="heading">External Stytle</h1>
    //   <div className='container'>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Ramkumar</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Ramkumar</h4>
    //     <p>Java Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Anuj</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Rajesh</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Mukesh</h4>
    //     <p>Project Engineer</p>
    //    </div>
    //   </div>
    //   <div>ZNAIpqCHa24g&s
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Ram Kumar</h4>
    //     <p>Java FullStack Developer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Raman Ahuja</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div><div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Rohit</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Mohit</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Dhruva</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWh" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Shamim</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Krishna Gupta</h4>
    //     <p>Software Engineer</p>
    //    </div>
    //   </div>
    //   <div>
    //    <div className='user-card'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMekiSqeokae-AHKLlJLHVJI48FDY4oiyxdhk64aU3KWhZNAIpqCHa24g&s" alt="Wait for Image" />
    //    </div>
    //    <div className='text-wrap'>
    //     <h4>Aman Singh</h4>
    //     <p>System Engineer</p>
    //    </div>
    //   </div>

    //   </div>
    // </>
  )
}

export default App
