import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section } from './Section/Section.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}