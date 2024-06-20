import Header from '../Components/Header';
import SortBar from '../Components/SortBar';

import Card from '../Components/Card';
import StarRating from '../Components/StarRating';

import './Home.css'

export default function Home({boardGames}) {
    return (
    <div className='App'>
        
        <div className='top-bar'>
            <Header></Header>
            <div className="quote">
                <p>
                    Level Up Your Gaming Experience: 

                </p>
                <p>
                    Dive into the Ultimate Blog for
                </p>
                <p>
                    Gamers!
                </p>
            </div>
        </div>

        <SortBar></SortBar>

        {/* <div className='games-container'>
            <Card
                title='Monopoly'
                imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6fwDm83Pu2Rs8pjD0B6pSKqy1Ed6D5JCktNnXWKIW4sPdB9bEdErH5GQcvrbunh2GSc&usqp=CAU'
                rating = "4"
            />
            <Card
                title='Settlers of Catan'
                imageUrl='https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg'
                rating = "4"
            />
            <Card
                title='Agemonia'
                imageUrl='https://agemonia.com/wp-content/uploads/2023/09/Agemoniabox_3D.png'
                rating = "4"
            />
            <Card
                title="Captain's Chair"
                imageUrl='https://shop.wizkids.com/cdn/shop/files/star-trek-captains-chair---cover-flat_20_1_1024x1024.jpg?v=1717454716'
                rating = "4"
            />
            </div>

        <div className='games-container'>
            <Card
                title='The 7th Citadel'
                imageUrl='https://i.kickstarter.com/assets/031/065/739/8daa7a522be39973efabe04f29953374_original.png?anim=false&fit=scale-down&origin=ugc&q=92&width=700&sig=%2BdzQ6kncDSilTjxt9A3xAJJJ1zPgPMHeHK7BK5TLL%2B8%3D'
                rating = "4"
            />
            <Card
                title='Bounty Hunters'
                imageUrl='https://cf.geekdo-images.com/bfPo-GAs3pVmTc8HPHRVQA__itemrep/img/uMiZKnYz-jVHMSbJESsdlbTHQo8=/fit-in/246x300/filters:strip_icc()/pic7949042.jpg'
                rating = "4"
                />
            <Card
                title='Arcs'
                imageUrl='https://cf.geekdo-images.com/XWImAu_3RK61wbzcKboVdA__opengraph/img/JcSFSlDW_8Y2I9feSTa0jWnQXc0=/0x175:1000x700/fit-in/1200x630/filters:strip_icc()/pic8145530.png'
                rating = "4"
                />
            <Card
                title='Brass: Birmingham'
                imageUrl='https://www.thegamesteward.com/cdn/shop/products/brass-birmingham-retail-board-game-roxley-games-29701407473816.jpg?v=1619731690&width=1200'
                rating = "4"
                />
        </div> */}

        <div className='games-container'> 
            {boardGames.map(listItem => (
                <Card
                    boardGames={boardGames}
                    id={listItem.game_uid}
                    title={listItem.game_name}
                    imageUrl={listItem.game_coverImage}
                    rating = {listItem.game_rating}
                    key={listItem.game_uid}
                />
                
            ))}
        </div>
    </div>

  );
}

