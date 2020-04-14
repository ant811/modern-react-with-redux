import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  //console.log('props: ', props)
  if (!song) {
    return (
      <div>Please Select Song</div>
    )
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}<br/>
        Duration: {song.duration}
      </p>
    </div>
  )
}

const mapStatetoProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStatetoProps)(SongDetail);