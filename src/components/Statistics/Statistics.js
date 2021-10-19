import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({good, neutral, bad, total, positiveFeedbackPercentage}) {
    return (
        <>
            {total > 0 ? (
                <ul className={s.list}>
                    <li className={s.item}>Good:{good}</li>
                    <li className={s.item}>Neutral:{neutral}</li>
                    <li className={s.item}>Bad:{bad}</li>
                    <li className={s.item}> Total:{total} </li>
                    <li className={s.item}>Positive feedback:{positiveFeedbackPercentage}%</li>
                </ul>
            ) : (
                <p className={s.notification}>no feedback...</p>
            )}
        </>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
