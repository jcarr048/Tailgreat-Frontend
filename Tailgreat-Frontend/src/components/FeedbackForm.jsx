import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'


const FeedbackForm = ({ user, authenticated, feedbackFromState, handleFormChange, handleFormSubmit}) => {

    let navigate = useNavigate()

    return (user && authenticated) ? (
        <div className="feedback-container">
            <h1 className="feedback-title">Review Tailgate</h1>
            <form className="feedback-form" onSubmit={handleFormSubmit}>
                <textarea
                className="form-body"
                id="feedback-body"
                cols="50"
                rows="10"
                value={feedbackFromState.body}
                onChange={handleFormChange}
                name="feedback-body"
                placeholder={'Review Tailgate'}
                />
                <div className="rating-section">
                    <select
                    className="feedback-rating"
                    id="rating"
                    value={feedbackFromState.rating}
                    onChange={handleFormChange}
                    name="rating"
                    >
                    <option value="" disabled hidden>Rating</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    </select>
                    <button className="submit-button">Submit Feedback</button>
                </div>
            </form>
        </div>
    ) : (
        <div className="sign-in-required">
            <h3 className="login-required">You must be logged in to leave feedback.</h3>
            <Button variant="contained" onClick={() => navigate('/login')}>
            Login
          </Button>
        </div>
    )
}

export default FeedbackForm