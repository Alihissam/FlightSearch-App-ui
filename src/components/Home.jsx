import React from 'react'
import Card from './Card'


const Home = () => {
    return (
        <>
            <div className=''>
                <div className="home-image">
                    <div className="container">
                        <span className='top-section'>Prepare for Takeoff... on the Cheapest Flights Around.</span>
                        <span className='second-section'>Direct Search - Direct Price</span>
                    </div>
                    <img src="https://i.pinimg.com/originals/ec/05/db/ec05dbb5deb17a06d30ee83f7b98d3f5.jpg"
                        alt="" className='home-image' />
                </div>



                <div className="container">
                    <div className="card-section" style={{ display: "flex" }}>
                        <Card src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            title="Online Experience" description="Have an amazing online experience of our beautiful sites by logging into our application and earn lots of bonus points" />
                        <Card src="https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            title="Unique Stays" description="Have amazing journey by availing our unique stays at desert, beaches, oceans near malls and enjoy local natural beauty" />
                        <Card src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            title="Entire Homes" description="Get whole 2bh 1bh apartment condo for your stay, and customize them according to your choice." />
                    </div>

                    <div className="card-section" style={{ display: "flex" }}>
                        <Card src="https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4="
                            title="Home Sweet Home" description="Small 2 bed apartment for rent" price="Price: 2000$" />
                        <Card src="https://media.istockphoto.com/photos/two-pendant-lights-hang-over-kitchen-island-picture-id1272358382?b=1&k=20&m=1272358382&s=170667a&w=0&h=b_z0yvPvGoyQy0PkhDw-MLFM-k9x35_EVFiijjGwGXs="
                            title="Full Condo Available" description="Small 2 bed apartment for rent" price="Price: 2500$" />
                        <Card src="https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=515&h=329&q=80"
                            title="Full Condo Available" description="Small 2 bed apartment for rent" price="Price: 1700$" />
                    </div>

                </div>


            </div>
        </>
    )
}

export default Home
