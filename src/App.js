import './App.css';
import { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => {
      return {
        [feedback]: prevState[feedback] + 1
      };
    })
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? +((good / total) * 100).toFixed(0) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div className='App'>
        <Section title='Please leave feedback'>
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        </Section>
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positiveFeedbackPercentage={positiveFeedback}
          />
        </Section>

      </div>
    );
  }
}

export default App;
