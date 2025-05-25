import videoHomepage from '../../assets/video-homepage.mp4'

const HomePage = (props) => {
    return (<div className="homepage-container">
        <div className='page-content'>
            <div className='title-1'>There's a better way to ask</div>
            <div className='title-2'>You don't want to make a boring form.
                And your audience won't answer one.
                Create a typeform instead-and make every happy
            </div>
            <div className='title-3'>
                <button>Get's started. It's free</button>
            </div>
        </div>

        <video autoPlay muted loop>
            <source
                src={videoHomepage}
                type="video/mp4"
            />
        </video>
    </div>)
}
export default HomePage