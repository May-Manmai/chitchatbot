type EmotionType = "Happy" | "Neutral" | "Sad";
interface ComponentWithHappinessTrackerProps {
  setQuestionName: any;
  responseValue: string;
  handleHappinessTracker: (emotion: EmotionType) => void;
}
