import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackItem = props => {
  const {track, deleteTrackItem} = props
  const {id, imageUrl, genre, duration, name} = track
  const onClickDeleteTrackItem = () => {
    deleteTrackItem(id)
  }
  return (
    <li className="track-item">
      <div className="track-left-section">
        <img className="track-image" src={imageUrl} alt="track" />
        <div className="track-left-section-content">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="track-right-section">
        <p className="track-duration">{duration}</p>
        <button
          className="delete-btn"
          data-testid="delete"
          type="button"
          onClick={onClickDeleteTrackItem}
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
