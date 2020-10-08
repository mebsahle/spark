import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
function TinderCards() {
    const [people,setPeople] = useState([
        {
        name: 'Tedy Afro',
        Bio: 'i like music and walking',
        url: 'https://africanquarters.com/wp-content/uploads/2017/09/TewodrosKassahun.jpg'

    },
    {
        name: 'Aster Awoke',
        Bio: 'i like music and walking',
        url: 'https://www.ethiosports.com/wp-content/uploads/2017/05/Aster-Aweke.jpg'
    },
    {
        name: 'Some one',
        Bio: 'i like music and walking',
        url: 'https://i.pinimg.com/736x/b2/f8/65/b2f8657c14ad4a885dfeb8ccbdc3e399.jpg'
    },
    {
        name: 'Some one 2',
        Bio: 'i like music and walking',
        url: 'https://i.pinimg.com/originals/f7/97/70/f797704a701e02007deb84e839af56c5.jpg'
    }
]);

    return (
         <div className="tinderCards__cardContainer">

            <div className="tinderCards__cardContainer">
            {
                people.map(person =>(
                    <TinderCard className="swipe"
                    key={person.name}
                    preventSwipe={['down']}>
                        <div className="card" style={{ backgroundImage: `url(${person.url})`} }>
                            <h3>{person.name}</h3>
                            <h5>{person.Bio}</h5>
                        </div>
                    </TinderCard>
                ))
            }
            </div>

        </div>
    )
}

export default TinderCards
