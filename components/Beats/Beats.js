import React from 'react'

const Beats = ({beats=[]}) => {

    return (
        <div className="d-flex flex-column align-items-center justify-content-around">
            <div className="text header d-flex justify-content-center myfont">
                beats
            </div>
            <div className="text d-flex align-items-center beat-section">
                <div className="text d-flex justify-content-center flex-wrap">
                    {beats.map(beat => {
                        return <div className="d-flex justify-content-between flex-column beat align-items-center" key={beat.id}>
                            <div className='d-flex'>
                                <p className='myfont'>{beat.name}</p>
                                <button> BUY NOW</button>
                            </div>
                            <audio controls>
                                <source src={beat.mp3} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Beats;