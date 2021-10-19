import PropTypes from "prop-types";
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
    <div className={s.options}>
        {options.map(option => (
            <button
                className={s.button}
                type="button"
                data-feedback={option}
                onClick={onLeaveFeedback}
                key={option}>
                {option}
            </button>
        ))}
    </div>
);
}


FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};