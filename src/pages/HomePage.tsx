import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPhotos } from '../store/photos/action';
import { decrement, increment } from '../store/photos/photo.slice';

const HomePage:React.FC = () => {
    const { photos, isLoading, error, count } = useAppSelector(state => state.photoReducer);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(fetchPhotos())
    }, [])
  
    if (isLoading) return <h1>Loading . . .</h1>

  return (
    <>
        <h1>{import.meta.env.VITE_TITLE}</h1>
      <div className="photos-grid">
        {photos.slice(0, 21).map(({ id, title, url }) => (
          <div key={id} className="photo-card">
            <h2>{title}</h2>
            <img src={url} alt={title} className="photo" />
          </div>
        ))}
      </div>
      {error && <h1>{error}</h1>}
      <div className="counter">
        <button onClick={() => dispatch(decrement())}>-</button>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default HomePage