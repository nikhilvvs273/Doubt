import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, imageUrl} = teamDetails

  return (
    <li className="team-item">
      <Link to={`/team-matches/:${id}`} className="link">
        <img src={imageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
